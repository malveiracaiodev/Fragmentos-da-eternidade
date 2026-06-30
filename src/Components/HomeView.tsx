import { BookOpen, Users, Shield, Gem, ChevronRight, Play, Info } from 'lucide-react';
import { useUniverse } from '../context/UniverseContext';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const { state } = useUniverse();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fade-in">
      
      {/* Grade Principal (Antigo container grid-layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Coluna Comece sua Jornada (col-jornada) */}
        <div className="lg:col-span-4 bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 shadow-xl">
          <div className="border border-mythic-gold/5 rounded-lg p-6 space-y-4 h-full flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="font-cinzel text-xl font-bold tracking-wider text-white">COMECE SUA JORNADA</h2>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Entre em um mundo onde deuses caem, reinos se erguem e fragmentos de algo maior aguardam por seus verdadeiros portadores.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                onClick={() => onNavigate('capitulo1')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-mythic-gold/5 border border-mythic-gold/30 rounded-lg font-cinzel text-xs text-mythic-gold tracking-widest hover:bg-mythic-gold/10 hover:border-mythic-gold/60 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4" /> COMEÇAR A HISTÓRIA
              </button>
              <button 
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg font-cinzel text-xs text-gray-400 tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" /> OUVIR NARRAÇÃO
              </button>
            </div>
          </div>
        </div>

        {/* Coluna Último Capítulo / Destaque (col-destaque) */}
        <div className="lg:col-span-4 bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 shadow-xl">
          <div className="border border-mythic-gold/5 rounded-lg p-6 space-y-4 h-full flex flex-col justify-between relative bg-gradient-to-b from-void-black via-mythic-gold/5 to-void-black">
            <div className="space-y-3">
              <span className="inline-block px-2 py-0.5 bg-mythic-gold/10 border border-mythic-gold/30 rounded text-[9px] font-mono tracking-widest text-mythic-gold-light uppercase">
                ÚLTIMO CAPÍTULO
              </span>
              <h2 className="font-cinzel text-2xl font-black tracking-widest text-white leading-tight">
                CAPÍTULO 1<br />
                <span className="text-mythic-gold text-base tracking-wider font-bold">O DESPERTAR</span>
              </h2>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Em um mundo esquecido pelas estrelas, um jovem começa a despertar para um destiny que pode mudar tudo.
              </p>
            </div>
            <div className="flex items-center justify-between pt-6 border-t border-mythic-gold/10">
              <button 
                onClick={() => onNavigate('capitulo1')}
                className="text-xs font-cinzel text-white hover:text-mythic-gold font-bold tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" /> LER AGORA
              </button>
              <button 
                onClick={() => onNavigate('capitulo1')}
                className="text-[11px] font-mono text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
              >
                VER TODOS OS CAPÍTULOS →
              </button>
            </div>
          </div>
        </div>

        {/* Coluna Lista de Exploração do Universo (col-explorar) */}
        <div className="lg:col-span-4 bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 shadow-xl">
          <div className="border border-mythic-gold/5 rounded-lg p-5 space-y-4">
            <h2 className="font-cinzel text-base font-bold tracking-wider text-white">EXPLORAR O UNIVERSO</h2>
            
            <ul className="space-y-2 font-sans">
              
              {/* Personagens */}
              <li>
                <button 
                  onClick={() => onNavigate('wiki-personagens')}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-mythic-gold/10 hover:bg-mythic-gold/5 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="block text-xs text-white tracking-wide font-cinzel group-hover:text-mythic-gold transition-colors">PERSONAGENS</strong>
                      <p className="text-[10px] text-gray-400">Conheça os protagonistas e lendas</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-mythic-gold group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>

              {/* Armas */}
              <li>
                <button 
                  onClick={() => onNavigate('wiki-armas')}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg border border-transparent hover:border-mythic-gold/10 hover:bg-mythic-gold/5 transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                      <Shield className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="block text-xs text-white tracking-wide font-cinzel group-hover:text-mythic-gold transition-colors">ARMAS</strong>
                      <p className="text-[10px] text-gray-400">Relíquias, armas e artefatos</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-mythic-gold group-hover:translate-x-0.5 transition-all" />
                </button>
              </li>

              {/* Fragmentos (Dinâmico com contador) */}
              <li>
                <div className="w-full flex items-center justify-between p-2.5 rounded-lg border border-transparent">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Gem className="w-4 h-4" />
                    </span>
                    <div>
                      <strong className="block text-xs text-white tracking-wide font-cinzel">FRAGMENTOS</strong>
                      <p className="text-[10px] text-purple-400 font-mono">Ativos no Save: {state.lore.globalFragments}</p>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>

      {/* Seção Sobre a Obra (about-section) */}
      <section id="sobre" className="bg-void-black border border-mythic-gold/15 rounded-xl p-1.5 shadow-xl">
        <div className="border border-mythic-gold/5 rounded-lg p-6 md:p-8 space-y-4 relative overflow-hidden">
          <h2 className="font-cinzel text-xl font-bold tracking-wider text-white">SOBRE A OBRA</h2>
          <p className="text-xs text-gray-400 font-sans leading-relaxed max-w-4xl">
            Fragmentos da Eternidade é uma saga épica que acompanha Caleb e seu irmão gêmeo em uma jornada através de eras, deuses e mistérios que precedem a própria criação do mundo. Uma história de poder, escolhas e o destino que aguarda aqueles que carregam fragmentos do impossível.
          </p>
          <div className="pt-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-cinzel text-xs text-gray-300 tracking-wider hover:bg-white/10 transition-all cursor-pointer">
              <Info className="w-3.5 h-3.5" /> SAIBA MAIS
            </button>
          </div>
        </div>
      </section>

      {/* Rodapé Interno */}
      <footer className="text-center py-6 border-t border-mythic-gold/5 text-[10px] font-mono text-gray-600 tracking-widest uppercase">
        &copy; 2026 FRAGMENTOS DA ETERNIDADE. TODOS OS DIREITOS RESERVADOS.
      </footer>

    </div>
  );
}