import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, ChevronLeft, ChevronRight, X, Film, Compass, Mic, Sparkles, ChevronRightSquare } from 'lucide-react';
import { FILM_PORTFOLIO, DOCUMENTARY_HIGHLIGHTS, PODCAST_EPISODES } from '../data';

export default function FilmsScreen() {
  const [activeSubTab, setActiveSubTab] = useState<'all' | 'films' | 'docs' | 'podcasts'>('all');
  const [activeFilmUrl, setActiveFilmUrl] = useState<string | null>(null);
  const [hoveredFilmId, setHoveredFilmId] = useState<string | null>(null);
  
  // Doc slider index
  const [docIndex, setDocIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const nextDoc = () => {
    setDocIndex((prev) => (prev + 1) % DOCUMENTARY_HIGHLIGHTS.length);
  };

  const prevDoc = () => {
    setDocIndex((prev) => (prev - 1 + DOCUMENTARY_HIGHLIGHTS.length) % DOCUMENTARY_HIGHLIGHTS.length);
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Structural side border lines */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-900/35 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-900/35 pointer-events-none" />

      {/* Dynamic atmospheric spotlight glow */}
      <div className="absolute top-[20%] left-[-10vw] w-[500px] h-[400px] bg-sky-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10vw] w-[450px] h-[450px] gold-glow opacity-[0.08] pointer-events-none" />

      {/* Title */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-900 pb-10">
        <div>
          <span className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block mb-3 uppercase">
            C I N E M A T I C &nbsp; M E D I A
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-[0.1em] text-white uppercase leading-none">
            FILMS & AUDIO
          </h1>
        </div>
        <p className="font-serif italic text-stone-500 text-base md:text-lg max-w-sm font-light">
          “Immersive acoustic recordings, fine digital cinema, and National Geographic scale documentaries that endure.”
        </p>
      </div>

      {/* Sub tabs filtering menu */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex justify-center">
        <div className="inline-flex flex-wrap justify-center rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-900 p-1.5 shadow-2xl">
          {[
            { id: 'all', label: 'ALL MEDIA', icon: Film },
            { id: 'films', label: 'CINEMA FILMS', icon: Film },
            { id: 'docs', label: 'DOCS', icon: Compass },
            { id: 'podcasts', label: 'PODCAST TALKS', icon: Volume2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`px-5 sm:px-7 py-2 rounded-full text-[9px] sm:text-xs font-display tracking-[0.25em] h-10 uppercase transition-all duration-500 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#d4af37] text-black font-semibold'
                    : 'text-stone-400 hover:text-white hover:bg-stone-900/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Display Content depending on Filter Selection */}
      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        <AnimatePresence mode="wait">
          
          {/* 1. CINEMA FILMS FILTER SCREEN */}
          {(activeSubTab === 'all' || activeSubTab === 'films') && (
            <motion.div
              key="films-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              <div className="flex justify-between items-center border-b border-stone-900 pb-5">
                <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase">SECTION I // DIRECTED FILMS</span>
                <span className="font-serif italic text-stone-500 text-xs text-right">“Atmospheric Narrative Mastery”</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FILM_PORTFOLIO.map((film, fIdx) => (
                  <motion.div
                    key={film.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: fIdx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.01 }}
                    className="group bg-stone-950 border border-stone-900 hover:border-[#d4af37]/40 rounded-lg overflow-hidden relative cursor-pointer shadow-[0_25px_60px_rgba(0,0,0,0.85)] aspect-[16/9] transition-all duration-[1000ms]"
                    onMouseEnter={() => setHoveredFilmId(film.id)}
                    onMouseLeave={() => setHoveredFilmId(null)}
                    onClick={() => setActiveFilmUrl(film.videoUrl)}
                  >
                    <div className="absolute inset-0 z-0">
                      {hoveredFilmId === film.id ? (
                        <video
                          src={film.videoUrl}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.05]"
                        />
                      ) : (
                        <img
                          src={film.coverImage}
                          alt={film.title}
                          className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-102 transition-transform duration-[1200ms]"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <span className="w-16 h-16 rounded-full border border-stone-600 bg-black/75 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all duration-700">
                        <Play className="w-6 h-6 fill-current" />
                      </span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 p-8 z-30">
                      <span className="font-display text-[8.5px] tracking-[0.3em] uppercase text-[#d4af37] mb-1 block">
                        {film.genre} &bull; {film.duration}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-white tracking-widest font-light">
                        {film.title}
                      </h3>
                      <p className="font-sans text-[10px] text-stone-500 mt-2 uppercase tracking-widest">
                        DIRECTED BY {film.director}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 2. DOCUMENTARIES SECTION */}
          {(activeSubTab === 'all' || activeSubTab === 'docs') && (
            <motion.div
              key="docs-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div className="flex justify-between items-center border-b border-stone-900 pb-5">
                <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase">SECTION II // HISTORICAL DOCS</span>
                <span className="font-serif italic text-stone-500 text-xs text-right">“Raw Human Realism”</span>
              </div>

              {/* Outstanding slider view */}
              <div className="relative bg-stone-950/40 border border-stone-900 rounded-lg p-8 sm:p-12 overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
                
                {/* Visual */}
                <div className="w-full lg:w-[45%] aspect-[16/10] overflow-hidden rounded relative border border-stone-900 shadow-xl bg-stone-900">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={docIndex}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 0.7, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      src={DOCUMENTARY_HIGHLIGHTS[docIndex].image}
                      alt={DOCUMENTARY_HIGHLIGHTS[docIndex].title}
                      className="w-full h-full object-cover filter contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                  </AnimatePresence>
                  <div className="absolute top-4 left-4 bg-black/90 px-3.5 py-1.5 text-[#d4af37] font-display text-[8.5px] tracking-[0.2em] uppercase border border-stone-800">
                    {DOCUMENTARY_HIGHLIGHTS[docIndex].location} &bull; {DOCUMENTARY_HIGHLIGHTS[docIndex].year}
                  </div>
                </div>

                {/* Narrative Quote and selectors */}
                <div className="w-full lg:w-[55%] space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="font-display text-[8px] tracking-[0.3em] text-[#d4af37] uppercase font-bold">FEATURING AWARD-WINNER</span>
                    <AnimatePresence mode="wait">
                      <motion.blockquote
                        key={docIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="font-serif text-xl sm:text-2xl italic leading-relaxed text-stone-200 font-light"
                      >
                        {DOCUMENTARY_HIGHLIGHTS[docIndex].quote}
                      </motion.blockquote>
                    </AnimatePresence>

                    <div className="space-y-1 pt-2">
                      <AnimatePresence mode="wait">
                        <motion.h4
                          key={docIndex}
                          className="font-serif text-lg tracking-widest text-[#d4af37] uppercase font-light"
                        >
                          {DOCUMENTARY_HIGHLIGHTS[docIndex].title}
                        </motion.h4>
                      </AnimatePresence>
                      <p className="text-xs text-stone-400 font-sans italic font-light">
                        {DOCUMENTARY_HIGHLIGHTS[docIndex].context}
                      </p>
                    </div>
                  </div>

                  {/* Nav */}
                  <div className="flex gap-4 pt-6 border-t border-stone-900">
                    <button
                      onClick={prevDoc}
                      className="p-3 border border-stone-850 hover:border-[#d4af37] rounded-full bg-stone-950 text-stone-400 hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextDoc}
                      className="p-3 border border-stone-850 hover:border-[#d4af37] rounded-full bg-stone-950 text-stone-400 hover:text-white transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. PODCAST SOUND STATIONS */}
          {(activeSubTab === 'all' || activeSubTab === 'podcasts') && (
            <motion.div
              key="podcasts-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div className="flex justify-between items-center border-b border-stone-900 pb-5">
                <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase">SECTION III // AUDIO TRANSMISSIONS</span>
                <span className="font-serif italic text-stone-500 text-xs text-right">“Acoustic Design Chronicles”</span>
              </div>

              <div className="space-y-8">
                {PODCAST_EPISODES.map((ep, idx) => (
                  <motion.div
                    key={ep.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.1 }}
                    className="bg-stone-950/70 border border-stone-900 rounded-lg p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center justify-between shadow-xl"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 items-center flex-1">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 border border-stone-850 bg-stone-900">
                        <img
                          src={ep.coverImage}
                          alt={ep.title}
                          className="w-full h-full object-cover filter brightness-[0.7]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-black border border-stone-800 flex items-center justify-center font-display text-[9px] tracking-wide text-white font-semibold">
                          {ep.episodeNumber}
                        </div>
                      </div>
                      
                      <div className="text-center sm:text-left space-y-2">
                        <span className="text-[#d4af37] font-display text-[8.5px] tracking-[0.3em] uppercase block font-semibold">
                          EPISODE &nbsp; {ep.episodeNumber} &bull; {ep.duration}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-light hover:text-[#d4af37] transition-all">
                          {ep.title}
                        </h3>
                        <p className="text-stone-400 font-sans text-xs max-w-lg leading-relaxed font-light">
                          {ep.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-end gap-5">
                      {/* Premium animated waveform soundwaves */}
                      <div className="flex items-end gap-1 h-8 px-4 opacity-75">
                        {[0.2, 0.4, 0.8, 0.5, 0.9, 0.3, 0.7, 0.4, 0.8, 0.5, 0.6, 0.3, 0.7, 0.2].map((val, i) => (
                          <motion.div
                            key={i}
                            className="w-[3px] bg-[#d4af37] rounded-full"
                            style={{ height: `${val * 100}%` }}
                            animate={{ height: [`${val * 30}%`, `${val * 100}%`, `${val * 30}%`] }}
                            transition={{
                              repeat: Infinity,
                              duration: 1 + (i % 4) * 0.2,
                              ease: 'easeInOut'
                            }}
                          />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <a href={ep.spotifyUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-stone-850 hover:border-emerald-600/50 rounded bg-stone-900 text-[9px] font-display uppercase tracking-[0.2em] text-stone-400 hover:text-emerald-400 transition-all font-semibold">
                          Spotify
                        </a>
                        <a href={ep.appleUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-stone-850 hover:border-violet-600/50 rounded bg-stone-900 text-[9px] font-display uppercase tracking-[0.2em] text-stone-400 hover:text-violet-400 transition-all font-semibold">
                          Apple
                        </a>
                        <a href={ep.youtubeUrl} target="_blank" rel="noreferrer" className="px-4 py-2 border border-stone-850 hover:border-red-600/50 rounded bg-stone-900 text-[9px] font-display uppercase tracking-[0.2em] text-stone-400 hover:text-red-400 transition-all font-semibold">
                          YouTube
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Immersive Audio/Videoplayer Modal */}
      <AnimatePresence>
        {activeFilmUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/99 flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 60%) pointer-events-none" />
            <button
              onClick={() => setActiveFilmUrl(null)}
              className="absolute top-6 right-6 group p-3 border border-stone-800 rounded-full bg-stone-950 text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all z-[110]"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>

            <div className="relative w-full max-w-5xl aspect-[16/9] bg-stone-950 rounded-lg border border-stone-900 overflow-hidden shadow-2xl z-100">
              <video
                src={activeFilmUrl}
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
