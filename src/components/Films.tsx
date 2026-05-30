import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Volume2, ChevronLeft, ChevronRight, X, Film } from 'lucide-react';
import { FILM_PORTFOLIO } from '../data';

export default function Films() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilmUrl, setActiveFilmUrl] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden" id="films">
      {/* Title */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
        <div>
          <span className="font-display text-[10px] tracking-[0.5em] text-[#d4af37] block mb-3 uppercase">
            C I N E M A T I C &nbsp; M O T I O N &nbsp; P I C T U R E S
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-extralight tracking-widest uppercase">
            FILMS
          </h2>
        </div>
        
        {/* Scroll Buttons */}
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="p-3.5 rounded-full border border-stone-850 hover:border-[#d4af37] bg-stone-950 text-stone-400 hover:text-white transition-all duration-300 pointer-events-auto"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3.5 rounded-full border border-stone-850 hover:border-[#d4af37] bg-stone-950 text-stone-400 hover:text-white transition-all duration-300 pointer-events-auto"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontally Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-10 px-6 sm:px-12 md:px-20 -mx-6 sm:-mx-12 md:-mx-20 no-scrollbar relative z-10 scroll-smooth snap-x"
      >
        {FILM_PORTFOLIO.map((film) => (
          <motion.div
            key={film.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[35vw] aspect-[16/9] group bg-stone-950 border border-stone-900 rounded-lg overflow-hidden relative cursor-pointer snap-start interactive-card shadow-2xl"
            onMouseEnter={() => setHoveredId(film.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setActiveFilmUrl(film.videoUrl)}
          >
            {/* Conditional Video Preview on Hover vs Static Image */}
            <div className="absolute inset-0 z-0">
              {hoveredId === film.id ? (
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
                  className="w-full h-full object-cover filter brightness-[0.6] group-hover:scale-102 transition-transform duration-1000 ease-out"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Netflix overlay and play button overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
            
            {/* Play Button Spot */}
            <div className="absolute inset-0 flex items-center justify-center z-25">
              <span className="w-14 h-14 rounded-full border border-stone-600 bg-black/60 backdrop-blur-sm flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/10 transition-all duration-700">
                <Play className="w-5 h-5 fill-current" />
              </span>
            </div>

            {/* Text details at the bottom of the card */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-30 flex flex-col justify-end">
              <span className="font-display text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[#d4af37] mb-1 block">
                {film.genre} &bull; {film.duration}
              </span>
              <h3 className="font-serif text-lg sm:text-auto text-white tracking-widest font-light leading-snug">
                {film.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Spotlight Accent */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] charcoal-glow opacity-30 pointer-events-none" />

      {/* Immersive Videoplayer Modal */}
      <AnimatePresence>
        {activeFilmUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/99 flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 60%) pointer-events-none" />
            
            {/* Close Button Top Right */}
            <button
              onClick={() => setActiveFilmUrl(null)}
              className="absolute top-6 right-6 group p-3.5 border border-stone-800 rounded-full bg-stone-950 text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-500 z-110"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            </button>

            <div className="relative w-full max-w-5xl aspect-[16/9] bg-stone-950 rounded-lg border border-stone-900 overflow-hidden shadow-2xl z-100">
              <video
                src={activeFilmUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
