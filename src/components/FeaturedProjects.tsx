import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MapPin, Eye, Compass } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data';
import { Project } from '../types';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative bg-[#0f0f0f] py-28 px-6 md:px-12 overflow-hidden border-y border-stone-900" id="projects">
      {/* Dynamic Gold Glow */}
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] gold-glow opacity-25 pointer-events-none" />
      
      {/* Thin structural architectural lines on sides */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-stone-900/40 pointer-events-none hidden md:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-stone-900/40 pointer-events-none hidden md:block" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <span className="font-display text-[10px] tracking-[0.5em] text-[#d4af37] block mb-4 uppercase">
          E D I T O R I A L &nbsp; C A S E S
        </span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-extralight tracking-widest uppercase">
          FEATURED PROJECTS
        </h2>
      </div>

      {/* Projects list */}
      <div className="max-w-7xl mx-auto space-y-32">
        {PORTFOLIO_PROJECTS.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col lg:flex-row gap-12 sm:gap-16 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Widescreen Giant Image */}
            <div 
              onClick={() => setSelectedProject(proj)}
              className="w-full lg:w-[60%] aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-lg bg-stone-950 border border-stone-900 group cursor-pointer relative interactive-card shadow-2xl"
            >
              <img
                src={proj.coverImage}
                alt={proj.title}
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-50 group-hover:scale-102 transition-all duration-[1500ms] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Eye icon spot */}
              <div className="absolute inset-x-0 bottom-8 flex justify-center opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-700">
                <span className="flex items-center gap-2.5 px-6 py-3 border border-[#d4af37]/35 rounded-full bg-black/85 text-xs text-[#d4af37] tracking-[0.3em] uppercase backdrop-blur-md">
                  READ CASE <Eye className="w-3.5 h-3.5 text-[#d4af37]" />
                </span>
              </div>
            </div>

            {/* Project description list */}
            <div className="w-full lg:w-[40%] space-y-6">
              <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-medium block">
                {proj.category} &bull; {proj.year}
              </span>
              <h3 
                onClick={() => setSelectedProject(proj)}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-extralight tracking-widest leading-tight cursor-pointer hover:text-[#d4af37] transition-colors duration-500 uppercase"
              >
                {proj.title}
              </h3>
              <p className="font-serif italic text-base sm:text-md text-stone-400 font-light max-w-md">
                “{proj.tagline}”
              </p>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed tracking-wide font-light max-w-md">
                {proj.description}
              </p>
              
              {/* Minimal case link trigger */}
              <div className="pt-4">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="group flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#d4af37] hover:text-white transition-colors duration-500 font-display"
                >
                  READ MAGAZINE EDITORIAL 
                  <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-500">&rarr;</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Case Editorial Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl overflow-y-auto no-scrollbar flex flex-col"
          >
            {/* Header */}
            <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-stone-900/60 py-6 px-6 sm:px-12 flex justify-between items-center">
              <span className="font-display text-[9px] tracking-[0.5em] text-[#d4af37]">
                EDITORIAL CASE STUDY
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="group flex items-center gap-3 py-2 px-5 border border-stone-850 rounded-full bg-stone-950 text-stone-400 hover:text-white hover:border-[#d4af37] transition-all duration-500"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase font-display">CLOSE LAYOUT</span>
                <X className="w-4 h-4 text-[#d4af37] group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </header>

            {/* Full screen luxury layout */}
            <div className="flex-1 max-w-5xl mx-auto w-full px-6 sm:px-12 py-16 space-y-16">
              {/* Intro Banner */}
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

              {/* Huge Image Panel */}
              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-stone-900 border border-stone-800">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-[0.7]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Metadata Details Split */}
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
                  <div className="text-stone-400 font-display text-[10px] tracking-wider uppercase">
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

              {/* Main Narrative Article */}
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

              {/* Close button inside flow */}
              <div className="pt-16 border-t border-stone-900 flex justify-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-10 py-4 border border-stone-800 rounded-full bg-stone-950 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all duration-700 text-xs tracking-[0.4em] uppercase font-display"
                >
                  CLOSE EDITORIAL
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
