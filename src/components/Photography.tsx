import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PHOTOGRAPHY_GALLERY } from '../data';

export default function Photography() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : PHOTOGRAPHY_GALLERY.length - 1));
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < PHOTOGRAPHY_GALLERY.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="relative bg-[#121212] py-28 px-6 overflow-hidden border-y border-stone-900/60" id="photography">
      {/* Structural Framing on Sides */}
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[1px] bg-stone-800/20 pointer-events-none" />
      <div className="absolute right-4 sm:right-8 top-0 bottom-0 w-[1px] bg-stone-800/20 pointer-events-none" />

      {/* Dynamic ambient spotlight */}
      <div className="absolute top-1/2 left-10 w-[600px] h-[300px] gold-glow opacity-[0.22] pointer-events-none" />
      {/* Editorial Title */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-display text-[10px] tracking-[0.5em] text-[#d4af37] block mb-3 uppercase">
            S I L E N T &nbsp; C O M P O S I T I O N S
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-extralight tracking-widest uppercase">
            THE GALLERY
          </h2>
        </div>
        <p className="font-serif italic text-stone-400 text-base md:text-lg max-w-sm font-light">
          “In photography, there is a reality so subtle that it becomes more real than reality itself.”
        </p>
      </div>

      {/* Asymmetric Mixed-Size Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PHOTOGRAPHY_GALLERY.map((img, index) => {
          // Classes for asymmetric heights
          let gridClass = 'aspect-[3/4]';
          if (img.size === 'wide') {
            gridClass = 'aspect-[16/10] md:col-span-2';
          } else if (img.size === 'medium') {
            gridClass = 'aspect-square';
          }

          return (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setLightboxIndex(index)}
              className={`relative overflow-hidden bg-stone-950 rounded-lg group cursor-pointer interactive-card shadow-2xl ${gridClass}`}
            >
              {/* Image with extreme slow zoom */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-50 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Sophisticated Glass / Amber Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Frame border highlight */}
              <div className="absolute inset-6 border border-white/0 group-hover:border-white/10 rounded transition-all duration-700 pointer-events-none" />

              {/* Caption content */}
              <div className="absolute bottom-0 inset-x-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.16, 1, 0.3, 1] flex justify-between items-end">
                <div className="space-y-1">
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
      </div>

      {/* Floating Spotlight Amber Circle */}
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] gold-glow opacity-20 pointer-events-none" />

      {/* Fullscreen Lightbox / Slideshow */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12"
          >
            {/* Header */}
            <div className="w-full flex justify-between items-center relative z-20">
              <span className="font-serif tracking-[0.3em] text-white text-sm">
                GALLERY EXHIBIT &nbsp; &bull; &nbsp; <span className="text-stone-500">{lightboxIndex + 1} / {PHOTOGRAPHY_GALLERY.length}</span>
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="group p-3 border border-stone-800 rounded-full bg-stone-950 text-[#d4af37] hover:text-white hover:border-[#d4af37] transition-all duration-500"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>

            {/* Main Interactive Slide Display */}
            <div className="flex-1 w-full flex items-center justify-center relative my-6">
              {/* Navigation Left */}
              <button
                onClick={prevImage}
                className="absolute left-0 z-20 p-4 border border-stone-800/40 hover:border-[#d4af37]/60 rounded-full bg-stone-950/40 backdrop-blur-md text-stone-300 hover:text-white transition-all duration-500"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Live Image Panel */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
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

              {/* Navigation Right */}
              <button
                onClick={nextImage}
                className="absolute right-0 z-20 p-4 border border-stone-800/40 hover:border-[#d4af37]/60 rounded-full bg-stone-950/40 backdrop-blur-md text-stone-300 hover:text-white transition-all duration-500"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Specifications Info */}
            <div className="w-full text-center relative z-20 space-y-2">
              <span className="font-display text-[9px] tracking-[0.4em] uppercase text-[#d4af37]">
                {PHOTOGRAPHY_GALLERY[lightboxIndex].subtitle}
              </span>
              <h3 className="font-serif text-3xl text-white font-light tracking-widest uppercase">
                {PHOTOGRAPHY_GALLERY[lightboxIndex].title}
              </h3>
              <p className="text-[10px] text-stone-500 tracking-wider">
                Exclusively compiled by Blackfame Studios for Editorial Presentation.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
