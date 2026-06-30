import { useProgresso } from '../context/ProgressoContext';
import { Character } from '../types';
import { motion } from 'framer-motion'; // <-- Importação adicionada para a animação funcionar!

export default function CalebDetailCard({ character }: { character: Character }) {
  const { verificarDesbloqueio } = useProgresso();
  
  // Verifica se o fragmento de origem do Caleb está ativo
  const estaAtivo = verificarDesbloqueio(character.unlockKey || '');

  return (
    <div className="space-y-6">
      {/* Imagem com Aura Dinâmica Baseada no Desbloqueio Legado */}
      <div className="relative rounded-xl overflow-hidden group border border-mythic-gold/15">
  <img 
    src={character.imageUrl} 
    className={`w-full transition-all duration-700 ${estaAtivo ? 'grayscale-0' : 'grayscale'}`} 
  />
  {/* Efeito de Aura Azul/Dourada caso ativo */}
  <div className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none mix-blend-screen ${
    estaAtivo ? 'opacity-40 shadow-[inset_0_0_80px_rgba(0,170,255,0.8)]' : 'opacity-0'
  }`} />
</div>

      {/* Caixa de Status Reativa */}
      <div className="flex justify-between text-xs font-mono border-b border-mythic-gold/10 pb-2">
        <span className="text-gray-400">Status da Entidade:</span>
        <span className={estaAtivo ? "text-emerald-400 font-bold" : "text-amber-500 font-bold"}>
          {estaAtivo ? "ATIVO" : "BLOQUEADO"}
        </span>
      </div>

      {/* Exibição Condicional Enxuta da Lore */}
      <div className="space-y-3 text-xs md:text-sm text-gray-300 font-light leading-relaxed">
        <p>{character.lore.base}</p>
        
        {estaAtivo && character.lore.origin && (
          <motion.p 
            initial={{ opacity: 0, x: -5 }} 
            animate={{ opacity: 1, x: 0 }}
            className="p-3 bg-cyan-950/20 border-l-2 border-cyan-500 text-cyan-200 font-mono text-xs rounded-r-lg"
          >
            {character.lore.origin}
          </motion.p>
        )}
      </div>
    </div>
  );
}