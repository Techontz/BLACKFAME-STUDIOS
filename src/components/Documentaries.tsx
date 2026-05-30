import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowRight, ArrowLeft, Eye } from 'lucide-react';
import { DOCUMENTARY_HIGHLIGHTS } from '../data';

export default function Documentaries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevDoc = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : DOCUMENTARY_HIGHLIGHTS.length - 1));
  };

  const nextDoc = () => {
    setCurrentIndex((prev) => (prev < DOCUMENTARY_HIGHLIGHTS.length - 1 ? prev + 1 : 0));
  };

  const currentHighlight = DOCUMENTARY_HIGHLIGHTS[currentIndex];

  return (
    <section className="relative w-full min-h-screen bg-[#141414] flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden border-y border-stone-900" id="documentaries">
      {/* Cinematic subtle grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.005)_1px,transparent_1px)] bg-[size:100px] pointer-events-none" />

      {/* Elegant Side Frames */}
      <div className="absolute left-8 lg:left-14 top-0 bottom-0 w-[1px] bg-stone-900/40 pointer-events-none hidden sm:block" />
      <div className="absolute right-8 lg:right-14 top-0 bottom-0 w-[1px] bg-stone-900/40 pointer-events-none hidden sm:block" />
      {/* Background Media with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8 }}
            className="absolute inset-0"
          >
            <img
              src={currentHighlight.image}
              alt={currentHighlight.title}
              className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.10] saturation-[0.7]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Vignettes */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(0,0,0,0) 10%, rgba(0,0,0,0.92) 100%) z-10 pointer-events-none" />

      {/* Main Quote and Text Block (Huge & Minimal) */}
      <div className="relative z-20 max-w-5xl mx-auto w-full flex flex-col items-center text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-3 bg-[#d4af37]/10 backdrop-blur-md rounded-full border border-[#d4af37]/20"
        >
          <Quote className="w-6 h-6 text-[#d4af37]" />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl italic text-stone-100 font-extralight leading-relaxed capitalize max-w-4xl mx-auto pr-2">
              {currentHighlight.quote}
            </blockquote>

            <div className="h-[1px] w-24 bg-[#d4af37] mx-auto mt-8" />

            <div className="pt-4 space-y-2">
              <span className="font-display text-[10px] tracking-[0.4em] uppercase text-[#d4af37] font-medium block">
                {currentHighlight.location} &nbsp;&bull;&nbsp; {currentHighlight.year}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-stone-300 font-light tracking-widest uppercase">
                {currentHighlight.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-sans tracking-wide">
                {currentHighlight.context}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators / Interactive Actions */}
        <div className="flex items-center gap-10 pt-10">
          <button
            onClick={prevDoc}
            className="group p-4 border border-stone-800 rounded-full bg-stone-950/70 hover:border-[#d4af37] text-stone-400 hover:text-white transition-all duration-500 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Clean Progress Line Indicator */}
          <div className="flex gap-3">
            {DOCUMENTARY_HIGHLIGHTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-750 ${
                  i === currentIndex ? 'w-12 bg-[#d4af37]' : 'w-4 bg-stone-800 hover:bg-stone-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextDoc}
            className="group p-4 border border-stone-800 rounded-full bg-stone-950/70 hover:border-[#d4af37] text-stone-400 hover:text-white transition-all duration-500 hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
