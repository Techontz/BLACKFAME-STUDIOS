import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS, BRANDS } from '../data';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevQuote = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const nextQuote = () => {
    setActiveIdx((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[activeIdx];

  return (
    <section className="relative bg-[#030303] py-24 px-6 md:px-12 overflow-hidden" id="testimonials">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[300px] gold-glow opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        
        {/* Testimonials Quote Section */}
        <div className="space-y-12">
          <div className="flex justify-center">
            <span className="p-3 bg-stone-950 border border-stone-850 rounded-full text-[#d4af37]">
              <Quote className="w-5 h-5 fill-current" />
            </span>
          </div>

          <div className="relative min-h-[220px] sm:min-h-[180px] flex items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.02, y: -15 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="space-y-6"
              >
                <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-stone-200 font-extralight leading-relaxed max-w-4xl mx-auto">
                  {t.quote}
                </blockquote>

                <div className="pt-2">
                  <cite className="not-italic font-serif text-lg tracking-widest text-[#d4af37] block uppercase font-light">
                    {t.author}
                  </cite>
                  <span className="font-display text-[9px] tracking-[0.3em] text-stone-500 uppercase mt-1 block">
                    {t.role} &bull; <span className="text-stone-400">{t.company}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 pt-4">
            <button
              onClick={prevQuote}
              className="p-3 border border-stone-850 rounded-full bg-stone-950 text-stone-400 hover:text-white hover:border-[#d4af37] transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    i === activeIdx ? 'bg-[#d4af37]' : 'bg-stone-850 hover:bg-stone-700'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextQuote}
              className="p-3 border border-stone-850 rounded-full bg-stone-950 text-stone-400 hover:text-white hover:border-[#d4af37] transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Separator line */}
        <div className="h-[1px] bg-stone-900 border-none w-1/3 mx-auto" />

        {/* Brand Logowall */}
        <div className="space-y-10">
          <div className="text-center">
            <span className="font-display text-[9px] tracking-[0.5em] text-stone-500 uppercase">
              SECTOR CHRONICLERS & COLLABORATORS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {BRANDS.map((brand, bIdx) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.35 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0 }}
                className="flex justify-center cursor-pointer py-4"
              >
                <span className="font-display text-xs sm:text-sm tracking-[0.6em] text-white hover:text-[#d4af37] font-medium transition-colors duration-500 text-center uppercase whitespace-nowrap">
                  {brand.logoText}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
