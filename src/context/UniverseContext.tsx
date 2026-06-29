import React, { createContext, useContext, useState, useEffect } from 'react';

// Tipagem idêntica ao seu defaultState antigo
export interface CharacterState {
  unlocked: boolean;
  origin: boolean;
  logs: number;
  name: string;
}

export interface UniverseState {
  characters: {
    caleb: CharacterState;
    nyx: CharacterState;
    orion: CharacterState;
    kylo?: CharacterState; // Adicionado dinamicamente conforme sua história cresce
  };
  lore: {
    globalFragments: number;
  };
  version: string;
}

const DEFAULT_STATE: UniverseState = {
  characters: {
    caleb: { unlocked: true, origin: false, logs: 0, name: "Caleb" },
    nyx: { unlocked: false, origin: false, logs: 0, name: "???" },
    orion: { unlocked: false, origin: false, logs: 0, name: "???" },
    kylo: { unlocked: false, origin: false, logs: 0, name: "???" }
  },
  lore: { globalFragments: 0 },
  version: "2.0-react"
};

interface UniverseContextType {
  state: UniverseState;
  unlockCalebOrigin: () => void;
  unlockCharacter: (id: string, customName?: string) => void;
  resetUniverse: () => void;
}

const UniverseContext = createContext<UniverseContextType | undefined>(undefined);

export const UniverseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<UniverseState>(DEFAULT_STATE);

  // Equivalente ao antigo storage.load() executado no DOMContentLoaded
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

  // Sincroniza e salva automaticamente sempre que o estado mudar (antigo storage.save())
  useEffect(() => {
    if (state.version === DEFAULT_STATE.version) {
      localStorage.setItem("fragmentos_universe", JSON.stringify(state));
    }
  }, [state]);

  // Antiga ação: lore.unlockCalebOrigin()
  const unlockCalebOrigin = () => {
    setState(prev => {
      if (prev.characters.caleb.origin) return prev; // Evita duplicação se já estiver ativo
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

  // Antiga ação genérica: lore.unlockCharacter(id, customName)
  const unlockCharacter = (id: string, customName?: string) => {
    setState(prev => {
      const char = prev.characters[id as keyof typeof prev.characters];
      if (!char || char.unlocked) return prev;

      return {
        ...prev,
        characters: {
          ...prev.characters,
          [id]: {
            ...char,
            unlocked: true,
            name: customName || char.name
          }
        }
      };
    });
  };

  const resetUniverse = () => {
    localStorage.removeItem("fragmentos_universe");
    window.location.reload();
  };

  return (
    <UniverseContext.Provider value={{ state, unlockCalebOrigin, unlockCharacter, resetUniverse }}>
      {children}
    </UniverseContext.Provider>
  );
};

// Hook customizado para consumir o motor em qualquer lugar da aplicação
export const useUniverse = () => {
  const context = useContext(UniverseContext);
  if (!context) throw new Error("useUniverse deve ser usado dentro de um UniverseProvider");
  return context;
};