import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Compass, Heart, Users, MapPin, Milestone, Quote } from 'lucide-react';
import { TESTIMONIALS, BRANDS } from '../data';

export default function AboutScreen() {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const teamMembers = [
    {
      name: 'MARCUS FAME',
      role: 'FOUNDER & ARTISTIC DIRECTOR',
      bio: 'Equipped with a native Leica catalog, Marcus spent two decades shooting runway fashion and high-altitude documentary campaigns across the globe.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=90&w=800'
    },
    {
      name: 'ELENA KORR',
      role: 'LEAD CINEMATOGRAPHER',
      bio: 'Elena directs the absolute fluid mechanics of cinematics. Trained under fine art directors, she maps rich atmospheres and pristine landscapes in organic light.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=800'
    },
    {
      name: 'YUKI SATORU',
      role: 'HEAD OF ARCHITECTURAL ACOUSTICS',
      bio: 'Yuki designs the physical silence at the core of human observation. He constructs custom soundtracks and acoustic filters for immersive documentary films.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=90&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Structural border lines */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-900/35 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-900/35 pointer-events-none" />

      {/* Warm Ambient Lights */}
      <div className="absolute top-[40%] right-[-10vw] w-[40vw] h-[40vh] gold-glow opacity-[0.05] pointer-events-none" />

      {/* Main title layout */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-850 pb-10">
        <div>
          <span className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block mb-3 uppercase">
            H E R I T A G E &nbsp; & &nbsp; V I S I O N
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-[0.1em] text-white uppercase leading-none">
            THE STUDIO
          </h1>
        </div>
        <p className="font-serif italic text-stone-500 text-base md:text-lg max-w-sm font-light">
          “An elite atelier of directors, cinematographers, and audio sculptors who compose legacy work that endures decades.”
        </p>
      </div>

      {/* Core manifesto block */}
      <div className="max-w-5xl mx-auto mb-28 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="font-display text-[#d4af37] tracking-[0.3em] text-[9px] uppercase font-bold">OUR MANIFESTO</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-widest text-white uppercase font-light">
            WE CAPTURE SILENCE.
          </h2>
          <p className="font-serif italic text-stone-400 text-base font-light">
            “True luxury takes time. We do not manufacture rapid digital files—we mold permanent visual and sonic memory.”
          </p>
        </div>
        <div className="text-stone-300 font-sans font-light text-xs sm:text-sm leading-relaxed tracking-wide space-y-4">
          <p>
            Established under strict principles of artistic discipline, Blackfame Studios rejects current trends of low-effort digital formats. We treat digital frames like physical negative prints—incorporating light, deep shade, rich contrast, and raw human emotions to build heavy sensory depth.
          </p>
          <p>
            Collaborating alongside beautiful souls, local artisans, and international publications, we map deep narratives and preserve family and brand legacy on authentic archival assets.
          </p>
        </div>
      </div>

      {/* Team gallery Section */}
      <div className="max-w-7xl mx-auto mb-28 relative z-10">
        <div className="mb-12 border-b border-stone-850 pb-5">
          <span className="font-display text-[9.5px] tracking-[0.4em] text-stone-500 uppercase block">SECTION I // COMPOSERS</span>
          <h3 className="font-serif text-2xl tracking-widest text-white uppercase font-light mt-1">THE LEAD ARTISTS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group bg-stone-950 border border-stone-900/80 hover:border-[#d4af37]/45 rounded-lg p-6 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            >
              <div className="aspect-[4/3] rounded overflow-hidden mb-6 bg-stone-900 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-[1500ms] group-hover:brightness-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="space-y-3">
                <span className="font-display text-[#d4af37] tracking-[0.2em] text-[8.5px] uppercase font-bold block">
                  {member.role}
                </span>
                <h4 className="font-serif text-xl text-white tracking-widest font-light transition-colors group-hover:text-[#d4af37] duration-500">
                  {member.name}
                </h4>
                <p className="text-stone-400 font-sans text-xs leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brands logo strip */}
      <div className="max-w-7xl mx-auto mb-28 relative z-10 border-y border-stone-900 py-12">
        <div className="text-center mb-10">
          <span className="font-display text-[9px] tracking-[0.4em] text-stone-500 uppercase">SELECTED STEWARDSHIPS</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {BRANDS.map((b) => (
            <div key={b.name} className="font-serif text-stone-500 font-light text-xl tracking-[0.4em] uppercase hover:text-[#d4af37] transition-colors duration-500 cursor-default">
              {b.logoText}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive testimonials slider */}
      <div className="max-w-4xl mx-auto mb-28 relative z-10 bg-stone-950/60 border border-stone-900 rounded-lg p-8 sm:p-14 text-center shadow-2xl">
        <span className="font-display text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-semibold block mb-6">CLIENT VERDICTS</span>
        
        <div className="relative h-[220px] sm:h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonialIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <Quote className="w-8 h-8 text-[#d4af37]/35 mx-auto" />
              <p className="font-serif text-stone-300 italic text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                {TESTIMONIALS[activeTestimonialIdx].quote}
              </p>
              <div>
                <h4 className="font-serif text-white tracking-wider text-sm font-semibold uppercase">
                  {TESTIMONIALS[activeTestimonialIdx].author}
                </h4>
                <p className="text-stone-500 font-display text-[8px] tracking-[0.15em] uppercase">
                  {TESTIMONIALS[activeTestimonialIdx].role} &bull; {TESTIMONIALS[activeTestimonialIdx].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Toggles indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonialIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                activeTestimonialIdx === idx ? 'bg-[#d4af37] w-6' : 'bg-stone-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Global production offices footer */}
      <div className="max-w-7xl mx-auto pt-16 border-t border-stone-900 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {[
            { city: 'LONDON STUDIO', street: 'Commercial Yard block 8', phone: '+44 207 433 119' },
            { city: 'PARIS ATELIER', street: 'Avenue de la Concorde', phone: '+33 1 4543 908' },
            { city: 'TOKYO SOUND ROOM', street: 'Chiyoda-ku, Marunouchi 1', phone: '+81 3 5556 701' }
          ].map((loc) => (
            <div key={loc.city} className="space-y-2">
              <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] font-semibold uppercase block">{loc.city}</span>
              <p className="font-serif italic text-stone-300 text-sm font-light">{loc.street}</p>
              <p className="font-mono text-stone-500 text-[10px]">{loc.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
