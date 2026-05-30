import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Calendar, MapPin, Eye, X, Compass, ChevronLeft, ChevronRight, Layers, Sliders } from 'lucide-react';
import { PHOTOGRAPHY_GALLERY, PORTFOLIO_PROJECTS } from '../data';
import { Project } from '../types';

export default function PortfolioScreen() {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'gallery' | 'cases'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : PHOTOGRAPHY_GALLERY.length - 1));
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < PHOTOGRAPHY_GALLERY.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />
      
      {/* Warm Ambient Lights */}
      <div className="absolute top-1/4 left-[-10vw] w-[45vw] h-[35vh] gold-glow opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10vw] w-[50vw] h-[30vh] gold-glow opacity-10 pointer-events-none" />

      {/* Decorative vertical lines on sides to make it look highly curated */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-800/15 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-800/15 pointer-events-none" />

      {/* Main Luxury Title */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-800/40 pb-10">
        <div>
          <span className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block mb-3 uppercase">
            C U R A T E D &nbsp; S H O W C A S E
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-[0.1em] text-white uppercase leading-none">
            THE PORTFOLIO
          </h1>
        </div>
        <p className="font-serif italic text-stone-400 text-base md:text-lg max-w-sm font-light">
          “A sanctuary where raw brutalist form meets absolute poetic focus, capturing the immortal truth of moments.”
        </p>
      </div>

      {/* Exquisite Sub-navigation filter bar */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex justify-center">
        <div className="inline-flex rounded-full bg-stone-900/60 backdrop-blur-md border border-stone-800/40 p-1.5 shadow-2xl">
          <button
            onClick={() => setActiveSubTab('all')}
            className={`px-6 sm:px-8 py-2.5 rounded-full text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase transition-all duration-500 flex items-center gap-2 ${
              activeSubTab === 'all'
                ? 'bg-[#d4af37] text-black font-semibold shadow-lg'
                : 'text-stone-400 hover:text-white hover:bg-stone-950/40'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> ALL WORK
          </button>
          
          <button
            onClick={() => setActiveSubTab('gallery')}
            className={`px-6 sm:px-8 py-2.5 rounded-full text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase transition-all duration-500 flex items-center gap-2 ${
              activeSubTab === 'gallery'
                ? 'bg-[#d4af37] text-black font-semibold shadow-lg'
                : 'text-stone-400 hover:text-white hover:bg-stone-950/40'
            }`}
          >
            <Camera className="w-3.5 h-3.5" /> FINE GALLERY
          </button>

          <button
            onClick={() => setActiveSubTab('cases')}
            className={`px-6 sm:px-8 py-2.5 rounded-full text-[10px] sm:text-xs font-display tracking-[0.3em] uppercase transition-all duration-500 flex items-center gap-2 ${
              activeSubTab === 'cases'
                ? 'bg-[#d4af37] text-black font-semibold shadow-lg'
                : 'text-stone-400 hover:text-white hover:bg-stone-950/40'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> EDITORIAL CASES
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {/* 1. PHOTOGRAPHY GALLERY TAB */}
          {activeSubTab === 'gallery' && (
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {PHOTOGRAPHY_GALLERY.map((img, index) => {
                let gridClass = 'aspect-[3/4]';
                if (img.size === 'wide') gridClass = 'aspect-[16/10] md:col-span-2';
                else if (img.size === 'medium') gridClass = 'aspect-square';

                return (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.01 }}
                    onClick={() => setLightboxIndex(index)}
                    className={`relative overflow-hidden bg-stone-950 rounded-lg group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-stone-900/60 hover:border-[#d4af37]/40 transition-colors duration-1000 ${gridClass}`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[2000ms]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="absolute inset-6 border border-white/0 group-hover:border-white/10 rounded transition-all duration-700 pointer-events-none" />
                    
                    <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 flex justify-between items-end">
                      <div>
                        <span className="font-display text-[9px] tracking-[0.3em] uppercase text-[#d4af37]">
                          {img.subtitle}
                        </span>
                        <h3 className="font-serif text-2xl text-white font-light tracking-wider">
                          {img.title}
                        </h3>
                      </div>
                      <span className="p-3 bg-[#d4af37] text-black rounded-full scale-75 group-hover:scale-100 transition-all duration-700">
                        <Eye className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* 2. EDITORIAL CASES TAB */}
          {activeSubTab === 'cases' && (
            <motion.div
              key="cases-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-24"
            >
              {PORTFOLIO_PROJECTS.map((proj, idx) => (
                <motion.div
                  key={proj.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    onClick={() => setSelectedProject(proj)}
                    className="w-full lg:w-[60%] aspect-[16/10] overflow-hidden rounded-lg bg-stone-950 border border-stone-900 group cursor-pointer relative shadow-2xl"
                  >
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-50 group-hover:scale-102 transition-all duration-[1500ms]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-700">
                      <span className="flex items-center gap-2 px-6 py-3 border border-[#d4af37]/45 rounded-full bg-black/90 text-[10px] text-[#d4af37] tracking-[0.3em] uppercase">
                        VIEW CAMPAIGN <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <div className="w-full lg:w-[40%] space-y-6">
                    <span className="font-display text-[9px] tracking-[0.4em] uppercase text-[#d4af37] font-medium block">
                      {proj.category} &bull; {proj.year}
                    </span>
                    <h3
                      onClick={() => setSelectedProject(proj)}
                      className="font-serif text-3xl sm:text-4xl text-white font-light tracking-wide hover:text-[#d4af37] transition-colors cursor-pointer uppercase"
                    >
                      {proj.title}
                    </h3>
                    <p className="font-serif italic text-base text-stone-400 font-light">
                      “{proj.tagline}”
                    </p>
                    <p className="text-stone-300 font-sans leading-relaxed text-xs sm:text-sm font-light">
                      {proj.description}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="group flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#d4af37] hover:text-white transition-colors font-display"
                      >
                        READ PRODUCTION METADATA 
                        <span className="inline-block transform group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* 3. COMBINED INTEGRATED ALL VIEW */}
          {activeSubTab === 'all' && (
            <motion.div
              key="all-combined-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-24"
            >
              {/* Highlight Project 1 */}
              <div>
                <div className="mb-8 border-b border-stone-800/40 pb-4">
                  <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase block">SECTION I // COMPILATIONS</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PHOTOGRAPHY_GALLERY.slice(0, 3).map((img, index) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      onClick={() => setLightboxIndex(index)}
                      className="relative aspect-square overflow-hidden bg-stone-950 rounded-lg group cursor-pointer shadow-xl"
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-all duration-[1500ms]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute bottom-0 inset-x-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
                        <div className="space-y-1">
                          <span className="font-display text-[8px] tracking-[0.2em] uppercase text-[#d4af37]">{img.subtitle}</span>
                          <h4 className="font-serif text-lg text-white font-light">{img.title}</h4>
                        </div>
                        <span className="p-2 bg-[#d4af37] text-black rounded-full scale-90"><Eye className="w-3 h-3" /></span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Prime Case Study Section */}
              <div>
                <div className="mb-12 border-b border-stone-800/40 pb-4">
                  <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase block">SECTION II // FEATURED WORK</span>
                </div>
                {PORTFOLIO_PROJECTS.slice(0, 2).map((proj, idx) => (
                  <div key={proj.id} className={`flex flex-col lg:flex-row gap-12 items-center mb-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div onClick={() => setSelectedProject(proj)} className="w-full lg:w-[55%] aspect-[16/10] overflow-hidden rounded-lg group cursor-pointer relative bg-stone-950 border border-stone-900">
                      <img src={proj.coverImage} alt={proj.title} className="w-full h-full object-cover filter brightness-70 group-hover:scale-102 transition-transform duration-[1200ms]" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 flex justify-center items-center">
                        <span className="px-5 py-2.5 border border-[#d4af37]/30 bg-black/90 text-[9px] font-display uppercase tracking-widest text-[#d4af37]">OPEN ARCHIVE</span>
                      </div>
                    </div>
                    <div className="w-full lg:w-[45%] space-y-4">
                      <span className="font-display text-[9px] tracking-[0.4em] text-[#d4af37]">{proj.category}</span>
                      <h3 className="font-serif text-3xl text-white font-light uppercase">{proj.title}</h3>
                      <p className="font-serif italic text-stone-400 text-sm">“{proj.tagline}”</p>
                      <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed font-light">{proj.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Remainder photography */}
              <div>
                <div className="mb-8 border-b border-stone-800/40 pb-4 flex justify-between items-center">
                  <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase block">SECTION III // LANDSCAPES & METALS</span>
                  <button onClick={() => setActiveSubTab('gallery')} className="text-[#d4af37] text-[9px] font-display tracking-[0.2em] hover:underline uppercase">VIEW ENTIRE GALLERY &rarr;</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {PHOTOGRAPHY_GALLERY.slice(3, 6).map((img, index) => (
                    <div
                      key={img.id}
                      onClick={() => setLightboxIndex(index + 3)}
                      className="relative aspect-[4/3] overflow-hidden bg-stone-950 rounded-lg group cursor-pointer shadow-lg"
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-all duration-[1500ms]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="absolute bottom-0 inset-x-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-between items-end">
                        <div className="space-y-1">
                          <span className="font-display text-[8px] tracking-[0.2em] uppercase text-[#d4af37]">{img.subtitle}</span>
                          <h4 className="font-serif text-lg text-white font-light">{img.title}</h4>
                        </div>
                        <span className="p-2 bg-[#d4af37] text-black rounded-full scale-90"><Eye className="w-3 h-3" /></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12"
          >
            <div className="w-full flex justify-between items-center relative z-20">
              <span className="font-serif tracking-[0.3em] text-white text-xs uppercase font-medium">
                EXHIBITION PORTAL &nbsp; &bull; &nbsp; <span className="text-stone-500">{lightboxIndex + 1} / {PHOTOGRAPHY_GALLERY.length}</span>
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="group p-3 border border-stone-800 rounded-full bg-stone-950 text-[#d4af37] hover:text-white hover:border-[#d4af37] transition-all duration-500"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-all" />
              </button>
            </div>

            <div className="flex-1 w-full flex items-center justify-center relative my-6">
              <button
                onClick={prevImage}
                className="absolute left-0 z-20 p-4 border border-stone-850 hover:border-[#d4af37]/60 rounded-full bg-stone-950/60 backdrop-blur-md text-stone-300 hover:text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="max-h-[72vh] max-w-full flex justify-center items-center overflow-hidden rounded shadow-2xl"
              >
                <img
                  src={PHOTOGRAPHY_GALLERY[lightboxIndex].src}
                  alt={PHOTOGRAPHY_GALLERY[lightboxIndex].title}
                  className="max-h-[70vh] object-contain rounded brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <button
                onClick={nextImage}
                className="absolute right-0 z-20 p-4 border border-stone-850 hover:border-[#d4af37]/60 rounded-full bg-stone-950/60 backdrop-blur-md text-stone-300 hover:text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full text-center relative z-20 space-y-2">
              <span className="font-display text-[9px] tracking-[0.4em] uppercase text-[#d4af37]">
                {PHOTOGRAPHY_GALLERY[lightboxIndex].subtitle}
              </span>
              <h3 className="font-serif text-2xl text-white font-light tracking-widest uppercase">
                {PHOTOGRAPHY_GALLERY[lightboxIndex].title}
              </h3>
              <p className="text-[10px] text-stone-500 tracking-wider uppercase font-display">
                Exclusive composition for Blackfame Studios
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editor Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl overflow-y-auto no-scrollbar flex flex-col"
          >
            <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-stone-900/60 py-6 px-6 sm:px-12 flex justify-between items-center">
              <span className="font-display text-[9px] tracking-[0.5em] text-[#d4af37] font-semibold uppercase">
                EDITORIAL CASE STUDY
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="group flex items-center gap-3 py-2 px-5 border border-stone-850 rounded-full bg-stone-950 text-stone-400 hover:text-white hover:border-[#d4af37] transition-all"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase font-display">CLOSE LAYOUT</span>
                <X className="w-4 h-4 text-[#d4af37] group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </header>

            <div className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-12 py-16 space-y-16">
              <div className="space-y-6 text-center md:text-left">
                <span className="text-[#d4af37] font-display text-[11px] tracking-[0.4em] uppercase block font-semibold">
                  {selectedProject.category} // PROJECT CASE
                </span>
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-extralight tracking-widest leading-none uppercase">
                  {selectedProject.title}
                </h1>
                <p className="font-serif italic text-xl sm:text-2xl text-stone-300 max-w-2xl font-light">
                  “{selectedProject.tagline}”
                </p>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-stone-900 border border-stone-800">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-[0.7]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-stone-900">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-400 font-display text-[10px] tracking-wider uppercase">
                    <Calendar className="w-4 h-4 text-[#d4af37]" /> YEAR
                  </div>
                  <p className="font-serif text-2xl text-stone-200 font-light">{selectedProject.year}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-stone-400 font-display text-[10px] tracking-wider uppercase">
                    <MapPin className="w-4 h-4 text-[#d4af37]" /> LOCATION
                  </div>
                  <p className="font-serif text-2xl text-stone-200 font-light">
                    {selectedProject.location || 'Global production'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-stone-400 font-display text-[10px] tracking-wider uppercase font-semibold">
                    PRODUCTION TEAMS
                  </div>
                  <div className="space-y-3">
                    {selectedProject.credits?.map((cred, cIdx) => (
                      <div key={cIdx} className="text-xs">
                        <span className="text-stone-500 font-display uppercase tracking-wider block font-semibold">
                          {cred.role}
                        </span>
                        <span className="text-stone-300 font-serif font-light italic text-base">
                          {cred.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8 max-w-3xl pt-8 border-t border-stone-900">
                <h3 className="font-serif text-3xl font-extralight tracking-widest text-[#d4af37] uppercase">
                  THE ARTISTIC STORY
                </h3>
                <p className="text-stone-300 font-sans leading-relaxed text-base tracking-wide font-light">
                  {selectedProject.description} Designed as a flagship representation under Blackfame Studios supervision, this masterwork represents strict guidelines of deep sensory connection, organic atmosphere calibration, and meticulous editorial typography styling.
                </p>
                
                {selectedProject.galleryImages && (
                  <div className="grid grid-cols-2 gap-4 pt-10">
                    {selectedProject.galleryImages.map((galImg, gIdx) => (
                      <div key={gIdx} className="aspect-[4/3] rounded-md overflow-hidden bg-stone-900 border border-stone-850">
                        <img
                          src={galImg}
                          alt={`${selectedProject.title} Exhibit ${gIdx}`}
                          className="w-full h-full object-cover filter brightness-[0.75] hover:brightness-[1] transition-all duration-[1000ms]"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-16 border-t border-stone-900 flex justify-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-10 py-4 border border-stone-800 rounded-full bg-stone-950 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all text-xs tracking-[0.4em] uppercase font-display"
                >
                  CLOSE EDITORIAL
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
