import { createContext, useContext, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Corrigido para a importação padrão estável
import { Scroll } from 'lucide-react';

interface ProgressoContextType {
  desbloqueados: Record<string, boolean>;
  verificarDesbloqueio: (id: string) => boolean;
  desbloquearConteudo: (id: string, nomeExibicao: string) => void;
}

const ProgressoContext = createContext<ProgressoContextType | undefined>(undefined);

export function ProgressoProvider({ children }: { children: ReactNode }) {
  // Carrega o estado inicial do localStorage
  const [desbloqueados, setDesbloqueados] = useState<Record<string, boolean>>(() => {
    const salvo = localStorage.getItem('fragmentos_eternidade_lore');
    return salvo ? JSON.parse(salvo) : {};
  });

  const [notificacao, setNotificacao] = useState<string | null>(null);

  const verificarDesbloqueio = (id: string) => !!desbloqueados[id];

  const desbloquearConteudo = (id: string, nomeExibicao: string) => {
    if (desbloqueados[id]) return; // Evita re-desbloqueio desnecessário

    const novoEstado = { ...desbloqueados, [id]: true };
    setDesbloqueados(novoEstado);
    localStorage.setItem('fragmentos_eternidade_lore', JSON.stringify(novoEstado));

    // Sistema de Pop-up reativo
    setNotificacao(nomeExibicao);
    setTimeout(() => setNotificacao(null), 4000);
  };

  return (
    <ProgressoContext.Provider value={{ desbloqueados, verificarDesbloqueio, desbloquearConteudo }}>
      {children}
      
      {/* Container de Notificação Flutuante Estilizada */}
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
    </ProgressoContext.Provider>
  );
}

export function useProgresso() {
  const context = useContext(ProgressoContext);
  if (!context) throw new Error('useProgresso deve ser usado dentro de um ProgressoProvider');
  return context;
}