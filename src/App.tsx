import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ServicesPreview from './components/ServicesPreview';
import HowWeWork from './components/HowWeWork';
import TeamSection from "./components/TeamSection";
import ContactFooter from './components/ContactFooter';
import { scrollToSection as scrollTo } from './lib/navigation';

const navItems = [
  { id: "about", label: "ABOUT US" },
  { id: "projects", label: "PROJECTS" },
  { id: "services", label: "SERVICES" },
  { id: "team", label: "OUR TEAM" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeScreen, setActiveScreen] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track window scroll coordinates to dynamically style Appbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    // 'contact' has no nav item; observing it clears the highlight there
    const sections = [...navItems.map((item) => item.id), 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveScreen(entry.target.id);
        }
        if (window.scrollY < window.innerHeight * 0.5) setActiveScreen('home');
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    // Wait a frame so the body scroll lock is released before scrolling
    requestAnimationFrame(() => scrollTo(sectionId));
  };

  return (
    <>
      <CustomCursor />
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
          <button
            type="button"
            aria-label="BlackFame Studios — back to top"
            className="cursor-pointer pointer-events-auto"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="/logo.png"
              alt="BlackFame Studios"
              className="h-6 sm:h-10 w-auto object-contain"
            />
          </button>
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-8 items-center font-display text-[10px] tracking-[0.35em] text-stone-400 uppercase pointer-events-auto">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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
            onClick={() => scrollToSection('contact')}
            className="
              px-5
              py-2.5
              border
              border-[#d4af37]/65
              rounded
              font-display
              font-semibold
              text-[8.5px]
              tracking-[0.35em]
              uppercase
              text-white
              hover:border-[#d4af37]
              hover:bg-[#d4af37]
              hover:text-black
              transition-all
              duration-500
            "
          >
            BOOK APPOINTMENT
          </button>
          </div>

          {/* Hamburger Menu Trigger for Mobile Screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
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
              className="fixed inset-0 z-[35] bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-10 pt-20 pb-10"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
              
              {/* Menu list for Mobile */}
              <div className="flex flex-col gap-6 text-center">
                <button
                  onClick={() => scrollToSection('home')}
                  className={`font-serif text-2xl tracking-widest uppercase hover:text-[#d4af37] transition-all ${
                    activeScreen === 'home' ? 'text-[#d4af37]' : 'text-stone-300'
                  }`}
                >
                  HOME
                </button>
                
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-serif text-2xl tracking-widest uppercase hover:text-[#d4af37] transition-all ${
                      activeScreen === item.id ? 'text-[#d4af37]' : 'text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="h-[1px] bg-stone-900 my-4 max-w-xs mx-auto w-full" />

                <button
                  onClick={() => scrollToSection('contact')}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero onViewWork={() => scrollToSection('projects')} />
            <Intro />
            <ServicesPreview />
            <HowWeWork />
            <TeamSection />
            <ContactFooter />
          </motion.div>
        </main>
      </div>
    </>
  );
}
