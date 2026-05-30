import { motion } from 'motion/react';
import { ArrowDown, Play } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
}

export default function Hero({ onViewWork }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Cinematic Asset with Image Fallback and Slow Zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1.0 }}
        transition={{ duration: 6.0, ease: 'easeOut' }}
      >
        {/* Soft, warm luxury wedding image close-up of a bride holding white roses - matches screenshot perfectly */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic Overlays (Vignette & Soft Gold Spotlights) */}
      <div className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50 z-10 pointer-events-none" />
      
      {/* Soft floating warm core pulse */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] gold-glow z-10 pointer-events-none opacity-[0.45]" />

      <div
        className="absolute z-[15] w-[800px] h-[400px] bg-black/30 blur-[120px] rounded-full pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Hero Core Content */}
      <div className="relative z-20 text-center px-6 flex flex-col items-center justify-center max-w-4xl mt-12 md:mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="font-display text-[11px] sm:text-xs tracking-[0.5em] text-[#d4af37] font-semibold uppercase block">
            PREMIUM FILM & PHOTOGRAPHY
          </span>
        </motion.div>

        {/* Studio Masthead in beautiful Cormorant Garamond */}
        <motion.h1 
          className="font-serif text-6xl sm:text-8xl md:text-9xl text-white font-light text-center leading-[1.05] tracking-wide drop-shadow-[0_0_40px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Stories
          <span className="block mt-4 font-serif italic text-white/95 text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-wide font-normal normal-case">
          That Last Forever
          </span>
        </motion.h1>

         {/* Bespoke Interactive Action */}
         <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.0, ease: 'easeOut' }}
        >
          <button
            onClick={onViewWork}
            className="group relative px-10 py-4 overflow-hidden rounded-full border border-stone-800 bg-stone-950/40 backdrop-blur-md text-xs tracking-[0.4em] uppercase text-white hover:text-black transition-colors duration-700 font-display"
          >
            {/* Hover background slide */}
            <span className="absolute inset-0 w-full h-full bg-[#d4af37] origin-bottom transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
            <span className="relative z-10 flex items-center gap-3">
              VIEW WORK
              <Play className="w-3 h-3 text-[#d4af37] group-hover:text-black fill-current transition-colors duration-500" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onViewWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2.8, duration: 1 }}
        whileHover={{ opacity: 1 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-stone-500 font-display">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#d4af37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
