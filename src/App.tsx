import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Users, Sword, Globe, HelpCircle, RefreshCw, ChevronDown } from 'lucide-react';

// Importação do Provedor do Motor Global
import { UniverseProvider } from './context/UniverseContext';

// Importação dos seus componentes e placeholders estruturais
import HomeView from './components/HomeView';
import ChapterOneView from './components/ChapterOneView';
import CharactersView from './components/CharactersView';
import WeaponsView from './components/WeaponsView';
import LoreUniverseView from './components/LoreUniverseView';

import { CHAPTERS, CHARACTERS, ARSENAL, LORE_ENTRIES } from './data';

export default function App() {
  // Controle de estados de navegação focados no seu escopo atual
  const [currentView, setCurrentView] = useState<string>('home');
  const [isWikiDropdownOpen, setIsWikiDropdownOpen] = useState<boolean>(false);

  // Sistema reativo de renderização com tratamento místico de Erro 404
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onNavigate={(view) => {
          if (view === 'capitulo1') setCurrentView('capitulo1');
          else if (view === 'wiki-personagens') setCurrentView('personagens');
        }} />;
        
      case 'capitulo1':
        // Renderiza diretamente a página focada no início da sua jornada
        return <ChapterOneView chapter={CHAPTERS[0]} />;
        
      case 'personagens':
        // Focado no Caleb e nos personagens iniciais deste arco
        return <CharactersView characters={CHARACTERS} />;
        
      case 'armas':
        // Renderizador estrutural do Arsenal de Artefatos
        return <WeaponsView arsenal={ARSENAL} />;
        
      case 'universo':
        // Base de conhecimento conceitual da primeira era da história
        return <LoreUniverseView lore={LORE_ENTRIES} />;
        
      default:
        // Tela 404 Integrada - Protege o usuário caso ele caia em links futuros ou rotas rompidas
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center text-center px-6 max-w-lg mx-auto space-y-6"
          >
            <div className="p-4 bg-crimson-blood/5 border border-crimson-blood/30 rounded-full text-crimson-blood crimson-glow animate-pulse">
              <HelpCircle className="w-12 h-12" />
            </div>
            
            <h1 className="text-3xl font-cinzel font-black tracking-widest text-white">
              FRAGMENTO <span className="text-crimson-blood crimson-glow">RESTRITO</span>
            </h1>
            
            <p className="text-xs text-gray-400 font-mono tracking-wide leading-relaxed">
              [CONEXÃO_BLOQUEADA]<br />
              Este fragmento da história ainda não se manifestou. As crônicas e bases subsequentes serão reveladas conforme o avanço dos acontecimentos futuros do mundo.
            </p>

            <button
              onClick={() => setCurrentView('home')}
              className="mt-4 flex items-center gap-2 px-5 py-2.5 bg-mythic-gold/5 border border-mythic-gold/30 rounded-lg font-cinzel text-xs text-mythic-gold tracking-widest hover:bg-mythic-gold/10 hover:border-mythic-gold/60 transition-all cursor-pointer group"
            >
              <RefreshCw className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-500" />
              Retornar ao Início
            </button>
          </motion.div>
        );
    }
  };

  return (
    <UniverseProvider>
      <div className="min-h-screen bg-void-black text-gray-100 font-sans selection:bg-mythic-gold/20 selection:text-mythic-gold-light relative overflow-x-hidden">
        
        {/* Moldura Mística Superior Global */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mythic-gold/40 to-transparent z-50 pointer-events-none" />

        {/* Menu de Navegação Superior Purificado */}
        <nav className="fixed top-0 left-0 right-0 h-16 bg-void-black/80 backdrop-blur-md border-b border-mythic-gold/10 z-40 px-6 md:px-12">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
            
            {/* Logo Tipográfica Baseada no seu Universo */}
            <button 
              onClick={() => {
                setCurrentView('home');
                setIsWikiDropdownOpen(false);
              }} 
              className="font-cinzel text-sm font-bold tracking-widest text-white hover:text-mythic-gold transition-colors cursor-pointer"
            >
              F.<span className="text-mythic-gold">ETERNIDADE</span>
            </button>

            {/* Links de Acesso Direto e Menu Wiki Compactado */}
            <div className="flex items-center gap-2 md:gap-4">
              
              {/* Botão Direto para Ler o Capítulo Atual da Jornada */}
              <button
                onClick={() => {
                  setCurrentView('capitulo1');
                  setIsWikiDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-cinzel tracking-wider transition-all cursor-pointer ${
                  currentView === 'capitulo1' 
                    ? 'text-mythic-gold bg-mythic-gold/5 border border-mythic-gold/20' 
                    : 'text-gray-400 hover:text-white border border-transparent'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Capítulo 1</span>
              </button>

              {/* Dropdown Estruturado: Menu Wiki */}
              <div className="relative">
                <button
                  onClick={() => setIsWikiDropdownOpen(!isWikiDropdownOpen)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-cinzel tracking-wider transition-all cursor-pointer ${
                    ['personagens', 'armas', 'universo'].includes(currentView)
                      ? 'text-mythic-gold bg-mythic-gold/5 border border-mythic-gold/20'
                      : 'text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  <span>Menu Wiki</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isWikiDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Sub-itens do Menu Wiki baseados exclusivamente no seu escopo atual */}
                <AnimatePresence>
                  {isWikiDropdownOpen && (
                    <>
                      {/* Overlay invisível para fechar o dropdown ao clicar fora */}
                      <div className="fixed inset-0 z-10" onClick={() => setIsWikiDropdownOpen(false)} />
                      
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-44 rounded-xl glass-card border border-mythic-gold/15 p-1.5 z-20 shadow-2xl"
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

        {/* Renderizador de Telas com Transições Suaves */}
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