import { Flame, BookOpen } from 'lucide-react';
import { CHAPTER_ONE_SCENES } from '../data/chaptersData';
import { useUniverse } from '../context/UniverseContext';

export default function ChapterOneView() {
  // Puxa o estado atualizado e as funções do motor global
  const { state, unlockCalebOrigin, unlockCharacter } = useUniverse();

  const calebAtivo = state.characters.caleb.origin;
  const kyloAtivo = state.characters.kylo?.unlocked;

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-12 pb-24 px-4 md:px-8 max-w-3xl mx-auto space-y-16">
      
      {/* Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex p-3 bg-crimson-blood/5 border border-crimson-blood/20 rounded-full text-crimson-blood animate-pulse">
          <Flame className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-cinzel font-black tracking-wider text-white">CICATRIZES DO MUNDO</h1>
      </div>

      {/* Loop pelas Cenas Dinâmicas */}
      {CHAPTER_ONE_SCENES.map((cena, index) => (
        <section key={index} className="space-y-6">
          <h2 className="font-cinzel text-sm font-bold tracking-widest text-mythic-gold border-b border-mythic-gold/10 pb-1.5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-mythic-gold/60" />
            {cena.title}
          </h2>

          <div className="space-y-4 text-gray-300 font-sans font-light text-sm leading-relaxed text-justify">
            {cena.blocks.map((bloco) => {
              // Se o bloco for texto normal
              if (bloco.text) return <p key={bloco.id}>{bloco.text}</p>;

              // Se o bloco for diálogo estilizado
              if (bloco.dialogue) return (
                <p key={bloco.id} className="font-cinzel text-sm text-mythic-gold pl-4 border-l border-mythic-gold/40 italic my-3">
                  {bloco.dialogue}
                </p>
              );

              // Se o bloco for um vídeo dinâmico colocado na pasta pública
              if (bloco.videoUrl) return (
                <div key={bloco.id} className="my-6 rounded-xl overflow-hidden border border-mythic-gold/15 bg-void-black/80 aspect-video shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={bloco.videoUrl} type="video/mp4" />
                  </video>
                </div>
              );

              return null;
            })}
          </div>
        </section>
      ))}

      {/* Gatilhos de Progresso unificados no final */}
      <div className="p-5 border border-mythic-gold/15 rounded-xl bg-void-black/40 space-y-4">
        <div className="text-center sm:text-left border-b border-mythic-gold/10 pb-2">
          <h4 className="font-cinzel text-xs font-bold text-white uppercase">Ressonância de Éter</h4>
          <p className="text-[11px] text-gray-400">Ative os fragmentos de memórias do universo após a leitura.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Controle do Caleb */}
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xs text-white font-mono">Origem de Caleb</span>
            <button
              onClick={unlockCalebOrigin}
              disabled={calebAtivo}
              className={`mt-1.5 px-4 py-2 rounded-lg text-xs font-cinzel tracking-widest transition-all ${
                calebAtivo ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-mythic-gold/5 border border-mythic-gold/30 text-mythic-gold hover:bg-mythic-gold/10'
              }`}
            >
              {calebAtivo ? 'Fragmento Ativo' : 'Restaurar Memória'}
            </button>
          </div>

          {/* Controle do Kylo */}
          <div className="flex flex-col items-center sm:items-end">
            <span className="text-xs text-white font-mono">Ficha de Kylo Tsurugi</span>
            <button
              onClick={() => unlockCharacter('kylo', 'Kylo Tsurugi')}
              disabled={kyloAtivo}
              className={`mt-1.5 px-4 py-2 rounded-lg text-xs font-cinzel tracking-widest transition-all ${
                kyloAtivo ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-mythic-gold/5 border border-mythic-gold/30 text-mythic-gold hover:bg-mythic-gold/10'
              }`}
            >
              {kyloAtivo ? "Ficha Ativa na Wiki" : "Desbloquear Kylo"}
            </button>
          </div>
        </div>

        {/* Indicador Global */}
        <div className="text-center text-[10px] font-mono uppercase tracking-widest text-mythic-gold/70 pt-2 border-t border-mythic-gold/5">
          Fragmentos Globais Coletados: {state.lore.globalFragments}
        </div>
      </div>

    </div>
  );
}