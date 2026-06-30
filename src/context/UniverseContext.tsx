import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll } from 'lucide-react';

// Tipagem dos estados de cada personagem
export interface CharacterState {
  unlocked: boolean;
  origin: boolean;
  logs: number;
  name: string;
}

// Interface principal do estado do Universo
export interface UniverseState {
  characters: {
    caleb: CharacterState;
    nyx: CharacterState;
    orion: CharacterState;
    kylo: CharacterState;
  };
  lore: {
    globalFragments: number;
  };
  version: string;
}

// Estado padrão inicial do sistema
const DEFAULT_STATE: UniverseState = {
  characters: {
    caleb: { unlocked: true, origin: false, logs: 0, name: "Caleb" },
    nyx: { unlocked: false, origin: false, logs: 0, name: "???" },
    orion: { unlocked: false, origin: false, logs: 0, name: "???" },
    kylo: { unlocked: false, origin: false, logs: 0, name: "???" }
  },
  lore: { globalFragments: 0 },
  version: "2.5-unified"
};

// Contrato de métodos e dados fornecidos pelo Contexto
interface UniverseContextType {
  state: UniverseState;
  unlockCalebOrigin: () => void;
  unlockCharacter: (id: string, customName?: string) => void;
  resetUniverse: () => void;
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined);

export const UniverseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<UniverseState>(DEFAULT_STATE);
  const [notificacao, setNotificacao] = useState<string | null>(null);

  // Carrega os dados salvos do localStorage ao inicializar o app
  useEffect(() => {
    const localData = localStorage.getItem("fragmentos_universe");
    if (localData) {
      try {
        const parsed = JSON.parse(localData);
        setState({
          ...DEFAULT_STATE,
          ...parsed,
          characters: { ...DEFAULT_STATE.characters, ...parsed.characters },
          lore: { ...DEFAULT_STATE.lore, ...parsed.lore }
        });
      } catch (e) {
        console.warn("Erro ao carregar save, resetando universo", e);
      }
    }
  }, []);

  // Sincroniza e grava as alterações automaticamente no localStorage
  useEffect(() => {
    if (state.version === DEFAULT_STATE.version) {
      localStorage.setItem("fragmentos_universe", JSON.stringify(state));
    }
  }, [state]);

  // Função para exibir o pop-up dinâmico na tela
  const dispararNotificacao = (nomeExibicao: string) => {
    setNotificacao(nomeExibicao);
    setTimeout(() => setNotificacao(null), 4000);
  };

  // Ação: Desbloqueia o Passado Oculto/Origem do Caleb
  const unlockCalebOrigin = () => {
    setState(prev => {
      if (prev.characters.caleb.origin) return prev; // Evita duplicar o ganho de fragmentos
      
      dispararNotificacao("Origem de Caleb Restaurada");
      return {
        ...prev,
        characters: {
          ...prev.characters,
          caleb: { ...prev.characters.caleb, origin: true }
        },
        lore: {
          ...prev.lore,
          globalFragments: prev.lore.globalFragments + 1
        }
      };
    });
  };

  // Ação Genérica: Desbloqueia a ficha de um personagem na Wiki
  const unlockCharacter = (id: string, customName?: string) => {
    setState(prev => {
      const char = prev.characters[id as keyof typeof prev.characters];
      if (!char || char.unlocked) return prev; // Se não existir ou já estiver liberado, ignora

      const exibicao = customName || char.name;
      dispararNotificacao(`Ficha de ${exibicao} Desbloqueada`);

      return {
        ...prev,
        characters: {
          ...prev.characters,
          [id]: {
            ...char,
            unlocked: true,
            name: exibicao
          }
        }
      };
    });
  };

  // Reseta completamente o progresso do usuário
  const resetUniverse = () => {
    localStorage.removeItem("fragmentos_universe");
    window.location.reload();
  };

  return (
    <UniverseContext.Provider value={{ state, unlockCalebOrigin, unlockCharacter, resetUniverse }}>
      {children}
      
      {/* Sistema Integrado de Notificação Flutuante de Lore */}
      <AnimatePresence>
        {notificacao && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 border border-mythic-gold/30 rounded-xl bg-void-black/95 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <div className="p-2 bg-mythic-gold/10 border border-mythic-gold/20 rounded-lg text-mythic-gold">
              <Scroll className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-mythic-gold/70">Nova Memória Restaurada</p>
              <p className="text-xs font-cinzel font-bold text-white tracking-wide">📜 {notificacao}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </UniverseContext.Provider>
  );
};

// Hook central para consumir o estado global e os gatilhos
export const useUniverse = () => {
  const context = useContext(UniverseContext);
  if (!context) throw new Error("useUniverse deve ser usado dentro de um UniverseProvider");
  return context;
};