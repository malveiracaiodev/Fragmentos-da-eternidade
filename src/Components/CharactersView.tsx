import { useState } from 'react';
import { useUniverse } from '../context/UniverseContext';
import { Lock, Eye, ArrowLeft, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CharactersViewProps {
  characters: any; // Dados estáticos vindos de src/data
}

export default function CharactersView({ characters }: CharactersViewProps) {
  const { state } = useUniverse();
  const [selectedCharId, setSelectedCharId] = useState<string | null>(null);

  // Encontra os dados estáticos do personagem selecionado para a ficha detalhada
  const selectedStaticChar = characters.find((c: any) => c.id.toLowerCase() === selectedCharId || c.nome.toLowerCase() === selectedCharId);
  const selectedStateChar = selectedCharId ? state.characters[selectedCharId as keyof typeof state.characters] : null;

  // Renderização da Ficha Detalhada (Antigo caleb.html)
  if (selectedCharId && selectedStaticChar && selectedStateChar) {
    const isOriginUnlocked = selectedStateChar.origin;

    return (
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
        {/* Botão de Voltar */}
        <button
          onClick={() => setSelectedCharId(null)}
          className="flex items-center gap-2 text-xs font-cinzel text-gray-400 hover:text-mythic-gold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar à Lista
        </button>

        {/* Cabeçalho da Ficha */}
        <header className="border-b border-mythic-gold/10 pb-4">
          <h1 className="font-cinzel text-3xl font-black tracking-widest text-white uppercase">
            {selectedStateChar.name}
          </h1>
          <p className="text-xs text-mythic-gold font-mono tracking-widest uppercase mt-1">
            {isOriginUnlocked ? "FRAGMENTO ATIVO: RESTAURADO" : "FRAGMENTO ATIVO: DESCONHECIDO"}
          </p>
        </header>

        {/* Conteúdo Principal em Duas Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Caixa do Modelo 3D (Antigo #canvas-3d) */}
          <div className="lg:col-span-5 bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 h-[420px] shadow-2xl relative overflow-hidden group">
            <div className="w-full h-full border border-mythic-gold/5 rounded-lg flex flex-col items-center justify-center bg-gradient-to-b from-void-black via-mythic-gold/5 to-void-black">
              {/* Espaço para o Canvas 3D que configuraremos a seguir */}
              <div id="canvas-container" className="absolute inset-0 w-full h-full" />
              
              <p className="text-xs text-gray-500 font-mono z-10 pointer-events-none tracking-widest uppercase">
                [Visualizador 3D / Matriz Energética]
              </p>
            </div>
          </div>

          {/* Informações e Registos Ocultos */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Dados Gerais */}
            <div className="bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 shadow-xl">
              <div className="border border-mythic-gold/5 rounded-lg p-5 space-y-4 font-sans text-sm text-gray-300">
                <h2 className="font-cinzel text-base font-bold tracking-wider text-mythic-gold border-b border-mythic-gold/10 pb-2">
                  DADOS GERAIS
                </h2>
                <p><strong className="text-white font-cinzel text-xs tracking-wider mr-2">Idade:</strong> 19 anos</p>
                <p><strong className="text-white font-cinzel text-xs tracking-wider mr-2">Origem:</strong> {selectedStaticChar.lore?.descricao || "Terras Esquecidas pelas Estrelas"}</p>
                <p className="leading-relaxed">
                  <strong className="text-white font-cinzel text-xs tracking-wider mr-2 block mb-1">Descrição:</strong> 
                  Um jovem de olhar compenetrado que carrega marcas de nascença misteriosas que brilham sutilmente quando expostas a energia ancestral.
                </p>
              </div>
            </div>

            {/* Passado Oculto (Antigo secret-card com efeito blur reativo) */}
            <div className="bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 shadow-xl relative overflow-hidden">
              <div className="border border-mythic-gold/5 rounded-lg p-5 space-y-3">
                <h2 className="font-cinzel text-base font-bold tracking-wider text-mythic-gold flex items-center gap-2 border-b border-mythic-gold/10 pb-2">
                  📜 PASSADO OCULTO
                </h2>

                <div className={`transition-all duration-700 select-none ${!isOriginUnlocked ? 'blur-md opacity-20 pointer-events-none' : ''}`}>
                  <p className="text-sm font-sans text-gray-300 leading-relaxed">
                    Caleb e seu irmão não nasceram em vilas comuns. Eles foram encontrados envoltos em um manto feito de fios de poeira cósmica após a queda do meteorito na Era do Eclipse...
                  </p>
                </div>

                {/* Overlay de Bloqueio Reativo ao Estado Global */}
                <AnimatePresence>
                  {!isOriginUnlocked && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-void-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 space-y-2"
                    >
                      <div className="p-2 bg-mythic-gold/5 border border-mythic-gold/30 rounded-full text-mythic-gold animate-pulse">
                        <Lock className="w-5 h-5" />
                      </div>
                      <h3 className="font-cinzel text-xs font-bold tracking-widest text-white">
                        INFORMAÇÃO BLOQUEADA
                      </h3>
                      <p className="text-[11px] text-gray-400 max-w-xs font-sans leading-relaxed">
                        Descubra a verdade sobre a infância de {selectedStateChar.name} nos capítulos da história para revelar este registo cósmico.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  {/* Grelha de Personagens Dinâmica (Antigo index.html) */}
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <header className="text-center space-y-2">
        <h1 className="font-cinzel text-3xl font-black tracking-widest text-white">PERSONAGENS</h1>
        <p className="text-xs font-mono tracking-widest text-mythic-gold uppercase">POVOS, LENDAS E PORTADORES DA ETERNIDADE</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(state.characters).map(([id, charData]: [string, any]) => {
          const isUnlocked = charData.unlocked;

          return (
            <div 
              key={id}
              className={`bg-void-black border rounded-xl p-1.5 transition-all duration-300 shadow-xl ${
                isUnlocked 
                  ? 'border-mythic-gold/15 hover:border-mythic-gold/40 hover:-translate-y-1' 
                  : 'border-white/5 opacity-60'
              }`}
            >
              <div className="border border-mythic-gold/5 rounded-lg p-5 flex flex-col h-full space-y-4">
                
                {/* Container de Imagem ou Cadeado */}
                <div className="aspect-video w-full rounded-lg bg-void-black border border-mythic-gold/5 flex items-center justify-center overflow-hidden relative bg-gradient-to-b from-void-black to-mythic-gold/5">
                  {isUnlocked ? (
                    <div className="text-xs font-mono text-mythic-gold/40 tracking-widest">[RECONEXÃO_OK]</div>
                  ) : (
                    <Lock className="w-8 h-8 text-gray-600 animate-pulse" />
                  )}
                </div>

                <div className="space-y-1 flex-grow">
                  <h2 className="font-cinzel text-lg font-bold tracking-widest text-white uppercase">
                    {isUnlocked ? charData.name : "???"}
                  </h2>
                  <span className="block text-[11px] font-mono tracking-wider text-mythic-gold uppercase">
                    {isUnlocked ? (charData.origin ? "Portador Desperto" : "Portador Inicial") : "BLOQUEADO"}
                  </span>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed pt-2">
                    {isUnlocked 
                      ? "Um dos irmãos gémeos marcados pelo destino. Guarda em si um fragmento cujo verdadeiro poder ainda desconhece."
                      : "Continue a ler a história para desbloquear a identidade e a lore deste personagem."
                    }
                  </p>
                </div>

                {/* Botões Reativos de Ação */}
                {isUnlocked ? (
                  <button
                    onClick={() => setSelectedCharId(id)}
                    className="w-full flex items-center justify-center gap-2 py-2 bg-mythic-gold/5 border border-mythic-gold/20 rounded-lg font-cinzel text-xs text-mythic-gold tracking-widest hover:bg-mythic-gold/10 hover:border-mythic-gold/40 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Ver Ficha Completa
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full flex items-center justify-center gap-2 py-2 bg-white/5 border border-white/10 rounded-lg font-cinzel text-xs text-gray-500 tracking-widest cursor-not-allowed"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Bloqueado
                  </button>
                )}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}