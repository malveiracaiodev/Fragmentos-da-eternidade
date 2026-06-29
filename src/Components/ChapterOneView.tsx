import { useState, useEffect } from 'react';
import { Flame, Unlock, CheckCircle, BookOpen } from 'lucide-react';
import { verificarSegredoDesbloqueado, desbloquearSegredo } from '../utils/storageHelper';
import { CHAPTER_ONE_SCENES } from '../data/chaptersData';

export default function ChapterOneView() {
  const [calebAtivo, setCalebAtivo] = useState(false);

  useEffect(() => {
    setCalebAtivo(verificarSegredoDesbloqueado('caleb_origin'));
  }, []);

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

      {/* Gatilho de Progresso mantido no final */}
      <div className="p-4 border border-mythic-gold/15 rounded-xl bg-void-black/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h4 className="font-cinzel text-xs font-bold text-white uppercase">Ressonância de Éter</h4>
          <p className="text-[11px] text-gray-400">Ative os dados do Caleb após a leitura.</p>
        </div>
        <button
          onClick={() => { if (desbloquearSegredo('caleb_origin')) setCalebAtivo(true); }}
          disabled={calebAtivo}
          className={`px-4 py-2 rounded-lg text-xs font-cinzel tracking-widest transition-all ${
            calebAtivo ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' : 'bg-mythic-gold/5 border border-mythic-gold/30 text-mythic-gold hover:bg-mythic-gold/10'
          }`}
        >
          {calebAtivo ? 'Ativo' : 'Ativar Ficha'}
        </button>
      </div>

    </div>
  );
}
import { useUniverse } from '../context/UniverseContext';

export default function ChapterOneView() {
  // Puxa o estado atualizado e as funções do motor global
  const { state, unlockCalebOrigin, unlockCharacter } = useUniverse();

  const calebAtivo = state.characters.caleb.origin;
  const kyloAtivo = state.characters.kylo?.unlocked;

  return (
    <div>
      {/* Botão de desbloqueio do Caleb baseado no motor limpo */}
      <button 
        onClick={unlockCalebOrigin}
        disabled={calebAtivo}
      >
        {calebAtivo ? "Fragmento Ativo" : "Restaurar Memória"}
      </button>

      {/* Botão de desbloqueio do Kylo Tsurugi */}
      <button 
        onClick={() => unlockCharacter('kylo', 'Kylo Tsurugi')}
        disabled={kyloAtivo}
      >
        {kyloAtivo ? "Ficha Ativa na Wiki" : "Desbloquear Kylo"}
      </button>

      <div className="text-xs text-mythic-gold mt-4">
        Fragmentos Globais Coletados: {state.lore.globalFragments}
      </div>
    </div>
  );
}