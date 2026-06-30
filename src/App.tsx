// src/App.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ajustado de 'motion/react' para o pacote padrão se necessário
import { BookOpen, Users, Sword, Globe, ChevronDown } from 'lucide-react';

// Importação do Provedor do Motor Global
// Certifique-se de que este arquivo existe em: src/context/UniverseContext.tsx
import { UniverseProvider } from './context/UniverseContext';

// Importação dos seus componentes estruturais
// Certifique-se de criar estes componentes na pasta correspondente
import HomeView from './components/HomeView';
import ChapterOneView from './components/ChapterOneView';
import CharactersView from './components/CharactersView';

export default function App() {
  // Controle de estados de navegação focados no seu escopo atual
  const [currentView, setCurrentView] = useState<string>('home');
  const [isWikiDropdownOpen, setIsWikiDropdownOpen] = useState<boolean>(false);

  // Sistema reativo de renderização
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomeView 
            onNavigate={(view) => {
              if (view === 'capitulo1') setCurrentView('capitulo1');
              else if (view === 'wiki-personagens') setCurrentView('personagens');
            }} 
          />
        );
      case 'capitulo1':
        return <ChapterOneView />;
      case 'personagens':
        return <CharactersView characters={[]} />;
      default:
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
            <h2 className="text-xl font-cinzel text-mythic-gold mb-2">Fragmento Perdido</h2>
            <p className="text-xs text-gray-400">Esta área do universo ainda está sendo moldada por Caleb.</p>
            <button 
              onClick={() => setCurrentView('home')} 
              className="mt-4 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs hover:bg-white/10 transition-all"
            >
              Voltar ao Início
            </button>
          </div>
        );
    }
  };

  return (
    <UniverseProvider>
      <div className="min-h-screen bg-void-black text-gray-100 font-sans selection:bg-crimson-blood/30">
        {/* Barra de Navegação Mística */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-void-black/80 backdrop-blur-md border-b border-white/5 h-16">
          <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
            
            {/* Logo / Título do Universo */}
            <button 
              onClick={() => setCurrentView('home')} 
              className="flex items-center gap-2 group cursor-pointer"
            >
              <span className="font-cinzel text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-mythic-gold to-gray-400 group-hover:from-mythic-gold transition-all duration-300">
                FRAGMENTOS DA ETERNIDADE
              </span>
            </button>

            {/* Links de Navegação */}
            <div className="flex items-center gap-1 sm:gap-4">
              <button
                onClick={() => setCurrentView('capitulo1')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-cinzel transition-all cursor-pointer ${
                  currentView === 'capitulo1' ? 'text-mythic-gold bg-mythic-gold/10' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">História</span>
              </button>

              {/* Menu Wiki Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsWikiDropdownOpen(!isWikiDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-cinzel transition-all cursor-pointer ${
                    ['personagens', 'armas', 'universo'].includes(currentView)
                      ? 'text-mythic-gold bg-mythic-gold/10'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <span>Wiki</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isWikiDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isWikiDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsWikiDropdownOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute right-0 mt-2 w-40 bg-void-black/95 border border-white/10 rounded-xl p-1.5 shadow-2xl z-20 backdrop-blur-xl"
                      >
                        <button
                          onClick={() => {
                            setCurrentView('personagens');
                            setIsWikiDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-cinzel text-gray-300 hover:text-mythic-gold hover:bg-mythic-gold/5 transition-colors text-left cursor-pointer"
                        >
                          <Users className="w-3.5 h-3.5" />
                          <span>Personagens</span>
                        </button>

                        <button
                          onClick={() => {
                            setCurrentView('armas');
                            setIsWikiDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-cinzel text-gray-300 hover:text-mythic-gold hover:bg-mythic-gold/5 transition-colors text-left cursor-pointer"
                        >
                          <Sword className="w-3.5 h-3.5" />
                          <span>Armas</span>
                        </button>

                        <button
                          onClick={() => {
                            setCurrentView('universo');
                            setIsWikiDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-cinzel text-gray-300 hover:text-mythic-gold hover:bg-mythic-gold/5 transition-colors text-left cursor-pointer"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Universo</span>
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </nav>

        {/* Renderizador de Telas */}
        <main className="relative z-10 min-h-screen pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </UniverseProvider>
  );
}