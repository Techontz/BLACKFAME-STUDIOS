import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Calendar, Menu, X, Landmark, Compass, Sparkles } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FeaturedWork from './components/FeaturedWork';

// Custom Navigation Screens
import PortfolioScreen from './components/PortfolioScreen';
import ServicesScreen from './components/ServicesScreen';
import JournalScreen from './components/JournalScreen';
import FilmsScreen from './components/FilmsScreen';
import AboutScreen from './components/AboutScreen';
import ClientLoginScreen from './components/ClientLoginScreen';
import BookAppointmentScreen from './components/BookAppointmentScreen';

import ContactFooter from './components/ContactFooter';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeScreen, setActiveScreen] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simulate luxury pre-load sequence for images
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Track window scroll coordinates to dynamically style Appbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeScreen = (target: string) => {
    setActiveScreen(target);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const navItems = [
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'services', label: 'SERVICES' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'films', label: 'FILMS' },
    { id: 'about', label: 'ABOUT' }
  ];

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'portfolio':
        return <PortfolioScreen />;
      case 'services':
        return <ServicesScreen onGoToBooking={() => changeScreen('book')} />;
      case 'journal':
        return <JournalScreen />;
      case 'films':
        return <FilmsScreen />;
      case 'about':
        return <AboutScreen />;
      case 'login':
        return <ClientLoginScreen />;
      case 'book':
        return <BookAppointmentScreen />;
      case 'home':
      default:
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero onViewWork={() => changeScreen('portfolio')} />
            <Intro />
            <FeaturedWork onNavigate={(screen) => changeScreen(screen)} />
            <ContactFooter />
          </motion.div>
        );
    }
  };

  return (
    <>
      <CustomCursor />

      {/* Cinematic Splash Screen Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-black z-[9999] flex flex-col justify-between p-12 overflow-hidden pointer-events-auto"
          >
            {/* Minimal Grid details */}
            <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(212,175,55,0.03) 0%, transparent 80%) pointer-events-none" />

            {/* Top branding */}
            <div className="flex justify-between items-center text-stone-500 font-display text-[9px] tracking-[0.4em] uppercase">
              <span>BLACKFAME STUDIOS</span>
              <span>EST. 2018</span>
            </div>

            {/* Center Content */}
            <div className="text-center space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 0.6, 1], y: 0 }}
                className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block mb-3 uppercase font-semibold"
              >
                WE CREATE LEGACY
              </motion.span>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-serif text-4xl sm:text-6xl tracking-[0.25em] font-light text-white"
              >
                BLACKFAME
              </motion.h1>
              <p className="font-serif italic text-stone-400 font-extralight text-sm sm:text-base tracking-wide max-w-xs mx-auto">
                “Stories That Live Beyond Time”
              </p>
            </div>

            {/* Progress counter and terms */}
            <div className="space-y-4 max-w-sm mx-auto w-full">
              <div className="flex justify-between items-end font-sans text-xs tracking-[0.20em] text-stone-400 uppercase">
                <span className="font-display text-[8.5px] text-stone-500">DIGITAL DEPLOYMENT INGEST</span>
                <span className="font-semibold text-white">{Math.min(loadPercent, 100)} %</span>
              </div>
              <div className="h-[2px] bg-stone-900 w-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#d4af37]"
                  style={{ width: `${Math.min(loadPercent, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative min-h-screen bg-black text-white selection:bg-[#d4af37] selection:text-black font-sans scroll-smooth overflow-x-hidden">
        
        {/* Subtle Ambient floating sparks / micro-spotlights inside viewport */}
        <div className="absolute top-[30vh] left-[10vw] w-[45vw] h-[30vh] gold-glow opacity-30 pointer-events-none blur-[140px]" />
        
        {/* Floating Custom Branding Header */}
        <header 
          className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 flex justify-between items-center ${
            scrolled 
              ? 'bg-black/95 backdrop-blur-lg border-b border-stone-900/60 py-4 px-6 sm:px-12 shadow-2xl' 
              : 'bg-transparent py-6 px-6 sm:px-12'
          }`}
        >
          {/* Logo visual: open circle ring with top-left gold dot next to BLACKFAME STUDIOS */}
          <div
            className="flex items-center cursor-pointer pointer-events-auto group"
            onClick={() => changeScreen('home')}
          >
            <svg className="w-9 h-9 mr-3 transform group-hover:rotate-12 transition-transform duration-700 select-none" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Elegant open ring */}
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2.5" strokeDasharray="190 60" />
              {/* Pristine golden highlight dot represent camera aperture / lens focus */}
              <circle cx="28" cy="20" r="6" fill="#d4af37" />
              {/* Inner ambient ring */}
              <circle cx="50" cy="50" r="18" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="8 8" />
            </svg>

            <div className="space-y-0.5">
              <span className="font-serif tracking-[0.35em] text-white font-light text-base sm:text-lg block uppercase leading-none">
                BLACKFAME <span className="text-[#d4af37] italic font-normal">STUDIOS</span>
              </span>
              <span className="font-display text-[7.5px] tracking-[0.3em] text-stone-500 block uppercase font-medium leading-none">
                fine cinema & photography
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 items-center font-display text-[10px] tracking-[0.35em] text-stone-400 uppercase pointer-events-auto">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => changeScreen(item.id)}
                  className={`relative py-2 hover:text-[#d4af37] transition-colors ${
                    isActive ? 'text-[#d4af37] font-semibold' : 'text-stone-400'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#d4af37]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Call to actions */}
          <div className="hidden lg:flex gap-6 items-center pointer-events-auto">
            <button
              onClick={() => changeScreen('login')}
              className={`flex items-center gap-1.5 text-[9.5px] font-display tracking-[0.3em] uppercase text-stone-400 hover:text-white transition-colors duration-500 ${
                activeScreen === 'login' ? 'text-[#d4af37]' : ''
              }`}
            >
              <User className="w-4 h-4 text-[#d4af37]" /> CLIENT LOGIN
            </button>

            <button
              onClick={() => changeScreen('book')}
              className={`px-5 py-2.5 border rounded font-display font-semibold transition-all text-[8.5px] tracking-[0.35em] uppercase hover:bg-[#d4af37]/5 ${
                activeScreen === 'book'
                  ? 'border-[#d4af37] bg-[#d4af37] text-black hover:text-[#d4af37] hover:bg-transparent'
                  : 'border-[#d4af37]/65 text-white hover:border-[#d4af37]'
              }`}
            >
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Hamburger Menu Trigger for Mobile Screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#d4af37] border border-stone-900 rounded bg-stone-950 pointer-events-auto relative z-50 hover:bg-stone-900"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Navigation Drawer Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-35 bg-black/99 backdrop-blur-2xl flex flex-col justify-center px-10 pt-20 pb-10"
            >
              <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(212,175,55,0.02) 0%, transparent 80%) pointer-events-none" />
              
              {/* Menu list for Mobile */}
              <div className="flex flex-col gap-6 text-center">
                <button
                  onClick={() => changeScreen('home')}
                  className={`font-serif text-2xl tracking-widest uppercase hover:text-[#d4af37] transition-all ${
                    activeScreen === 'home' ? 'text-[#d4af37]' : 'text-stone-300'
                  }`}
                >
                  HOME
                </button>
                
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => changeScreen(item.id)}
                    className={`font-serif text-2xl tracking-widest uppercase hover:text-[#d4af37] transition-all ${
                      activeScreen === item.id ? 'text-[#d4af37]' : 'text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="h-[1px] bg-stone-900 my-4 max-w-xs mx-auto w-full" />

                <button
                  onClick={() => changeScreen('login')}
                  className={`font-display text-xs tracking-[0.3em] uppercase hover:text-[#d4af37] transition-all flex items-center justify-center gap-2 ${
                    activeScreen === 'login' ? 'text-[#d4af37]' : 'text-stone-400'
                  }`}
                >
                  <User className="w-4 h-4 text-[#d4af37]" /> CLIENT VAULT LOGIN
                </button>

                <button
                  onClick={() => changeScreen('book')}
                  className="mt-4 px-6 py-3.5 border border-[#d4af37] text-[#d4af37] font-display text-[9.5px] tracking-[0.3em] uppercase rounded bg-transparent font-bold hover:bg-[#d4af37] hover:text-black transition-all"
                >
                  BOOK APPOINTMENT
                </button>
              </div>

              <div className="mt-auto text-center">
                <span className="font-serif tracking-[0.2em] text-stone-600 text-xs block">BLACKFAME STUDIOS</span>
                <span className="text-[9px] text-stone-700 font-display tracking-widest block uppercase mt-1">est. 2018</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Orchestrated Screens View Container */}
        <main className="relative z-10 w-full min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderActiveScreen()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Dynamic global copyright footer for internal pages */}
        {activeScreen !== 'home' && (
          <footer className="bg-[#050505] py-12 px-6 sm:px-12 border-t border-stone-950 text-center relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
              <div 
                onClick={() => changeScreen('home')} 
                className="cursor-pointer font-serif tracking-[0.3em] font-light text-stone-400 hover:text-white uppercase text-base"
              >
                BLACKFAME <span className="text-[#d4af37] italic font-normal">STUDIOS</span>
              </div>
              <div className="text-[10px] text-stone-600 tracking-widest font-display">
                &copy; {new Date().getFullYear()} BLACKFAME STUDIOS. ALL RIGHTS RESERVED.
              </div>
            </div>
          </footer>
        )}

      </div>
    </>
  );
}
