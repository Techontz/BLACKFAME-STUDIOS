import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Film, Camera, Music, Compass, CheckCircle, Shield, Award, HardDrive, Cpu, HelpCircle, ArrowRight } from 'lucide-react';

interface ServicePackage {
  title: string;
  tagline: string;
  description: string;
  price: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export default function ServicesScreen({ onGoToBooking }: { onGoToBooking: () => void }) {
  const [activeTier, setActiveTier] = useState<'cinema' | 'photography' | 'sound'>('cinema');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const serviceCategories = [
    {
      id: 'cinema',
      title: 'MOTION PICTURES',
      icon: Film,
      description: 'Cinema-heritage narrative capture, custom soundscapes, and color grading suites using industry-highest digital sensors.',
      packages: [
        {
          title: 'NOIR EDITION',
          tagline: 'Brand Anthems & Commercial Shorts',
          description: 'A complete custom-sculpted motion film package aimed at high-end luxury products, boutiques, and brand statements.',
          price: 'Starting from $8,500',
          features: [
            '2 Production shooting days with RED V-Raptor 8K cameras',
            'Sleek bespoke ambient sound design and licensing',
            'Full director editing, pacing, and HDR grade',
            'Delivery in cinematic 4K ProRes + standard social crops'
          ],
          specs: [
            { label: 'FLEET', value: 'RED V-Raptor 8K + Vintage Primes' },
            { label: 'CREW', value: 'Director, DP, Sound Op, Gaffer' },
            { label: 'DELIVERABLE', value: 'Cinema Master + Social Deliverables' }
          ]
        },
        {
          title: 'IMPERIAL FEAST',
          tagline: 'Feature Documentaries & Art Films',
          description: 'Immersive atmospheric storytelling in remote environments, or large-scale legacy heritage productions designed for film festivals.',
          price: 'Starting from $18,000',
          features: [
            '5 Production days across global selected destinations',
            'Custom music composition written by master composers',
            'Complete narrative development, scripting, and voice casting',
            'Exquisite festival packaging, credits, and premier files'
          ],
          specs: [
            { label: 'FLEET', value: 'ARRI Alexa Mini LF + anamorphic sets' },
            { label: 'CREW', value: 'A-list Director, Gaffer, sound designers' },
            { label: 'DELIVERABLE', value: '12K master file + Behind pages' }
          ]
        }
      ] as ServicePackage[]
    },
    {
      id: 'photography',
      title: 'FINE ART STILLS',
      icon: Camera,
      description: 'High-contrast monochromatic photography, minimalist fashion editor spreads, and architectural shape compositions.',
      packages: [
        {
          title: 'HERITAGE ARCHIVE',
          tagline: 'Fashion Spreads & Studio Portraits',
          description: 'Editorial-grade cataloging using dynamic natural lighting and brutalist concrete layouts. Ideal for catalog labels and portfolios.',
          price: 'Starting from $4,200',
          features: [
            '6 Hours in-studio or architectural on-location shoot',
            'Shot exclusively on Leica SL3 or analog medium format cameras',
            'Art director composition analysis and styling advice',
            '35 Master retouched final exhibition prints'
          ],
          specs: [
            { label: 'FLEET', value: 'Leica SL3 / Hasselblad H6D' },
            { label: 'FILM TYPE', value: 'Kodak Portra, Monochromatic Tri-X' },
            { label: 'DELIVERABLE', value: 'Medium format analog catalog + TIF archive' }
          ]
        },
        {
          title: 'BLACK label WEDDINGS',
          tagline: 'Immortal Cinema & Portraiture for Lovers',
          description: 'A completely bespoke premium wedding register. We capture high-contrast moments, raw emotion, and family lines like high art.',
          price: 'Starting from $12,500',
          features: [
            'Full day unlimited shooting with two lead artists',
            'A parallel cinematic 16mm celluloid film summary (3-minute)',
            'Timeless portrait layout and handmade linen linen books',
            'Encrypted online private gallery for client secure login'
          ],
          specs: [
            { label: 'FLEET', value: 'Leica SL3 + Hasselblad medium formats' },
            { label: 'CREW', value: 'Lead photographer, lead cinematographer' },
            { label: 'DELIVERABLE', value: '250+ Master edits, 3-min film + Linen books' }
          ]
        }
      ] as ServicePackage[]
    },
    {
      id: 'sound',
      title: 'ACOUSTICS & MASTERING',
      icon: Music,
      description: 'Atmospheric synth soundscapes, pristine talk show audio designs, and acoustic field archives.',
      packages: [
        {
          title: 'SONIC ARCHIVAL',
          tagline: 'Studio Podcasts & Spatial Tracks',
          description: 'Tailored specifically for elite podcasts, talk shows and audio experiences seeking absolute clarity and acoustic luxury.',
          price: 'Starting from $2,800',
          features: [
            'Full studio acoustics setup and multitrack tracking',
            'Vocal sound cleanup, noise-gate crafting and voice balancing',
            'Bespoke ambient synthesizer bumpers and transitions',
            'Multiplatform distribution support (Spotify, Apple, YouTube)'
          ],
          specs: [
            { label: 'STUDIO', value: 'Acoustic-calibrated London Stage' },
            { label: 'EQUIPMENT', value: 'Shure SM7B + Universal Audio Apollo converters' },
            { label: 'DELIVERABLE', value: 'Master WAV + Podcast RSS Setup' }
          ]
        }
      ] as ServicePackage[]
    }
  ];

  const currentCategory = serviceCategories.find(cat => cat.id === activeTier) || serviceCategories[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Structural side border framing lines */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-900/30 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-900/30 pointer-events-none" />

      {/* Dynamic Amber spotlight glow */}
      <div className="absolute top-[10%] right-[-10vw] w-[450px] h-[450px] bg-[#d4af37] opacity-[0.05] rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] left-[-10vw] w-[500px] h-[500px] bg-stone-950 opacity-[0.25] pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-900 pb-10">
        <div>
          <span className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block mb-3 uppercase">
            A R T I S T I C &nbsp; O F F E R I N G S
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-[0.1em] text-white uppercase leading-none">
            OUR SERVICES
          </h1>
        </div>
        <p className="font-serif italic text-stone-500 text-base md:text-lg max-w-sm font-light">
          “We offer bespoke creative direction, elite digital cinematography, and custom sound design to immortalize your vision.”
        </p>
      </div>

      {/* Category selector switches */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-stone-900 pb-8">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTier === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTier(cat.id as any)}
                className={`flex flex-col items-start gap-4 p-8 rounded-lg border text-left transition-all duration-700 relative overflow-hidden group ${
                  isActive
                    ? 'border-[#d4af37]/40 bg-stone-950/80 shadow-2xl shadow-stone-950'
                    : 'border-stone-900/40 bg-transparent hover:border-stone-800 hover:bg-stone-950/20'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
                )}
                <div className={`p-4 rounded-full border transition-all duration-500 ${
                  isActive 
                    ? 'bg-[#d4af37] text-black border-[#d4af37]' 
                    : 'bg-stone-950 text-[#d4af37] border-stone-800 group-hover:bg-[#d4af37]/10'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-serif text-xl tracking-wider transition-colors duration-500 ${
                    isActive ? 'text-white' : 'text-stone-400 group-hover:text-white'
                  }`}>
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-stone-500 leading-relaxed font-light mt-2 line-clamp-2">
                    {cat.description}
                  </p>
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="activeCategoryBorder" 
                    className="absolute bottom-0 inset-x-0 h-[2px] bg-[#d4af37]" 
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Pricing Tiers */}
      <div className="max-w-7xl mx-auto relative z-10 mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTier}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {currentCategory.packages.map((pkg, idx) => (
              <motion.div 
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.01 }}
                className="bg-stone-950/60 border border-stone-900 hover:border-[#d4af37]/40 rounded-lg p-10 flex flex-col justify-between transition-colors duration-1000 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative group"
              >
                {idx === 0 && (
                  <div className="absolute top-6 right-6 font-display text-[8px] tracking-[0.2em] uppercase border border-stone-800 text-[#d4af37] px-3.5 py-1.5 rounded-full pointer-events-none bg-stone-950/80">
                    POPULAR RATING
                  </div>
                )}
                <div className="space-y-8">
                  <div className="space-y-2 border-b border-stone-900 pb-6">
                    <span className="font-display text-[#d4af37] tracking-[0.3em] text-[9px] uppercase font-bold block">
                      PACKAGE // EDITION {idx + 1}
                    </span>
                    <h4 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-white uppercase group-hover:text-[#d4af37] transition-colors duration-500">
                      {pkg.title}
                    </h4>
                    <p className="font-serif italic text-stone-400 text-sm max-w-sm">
                      “{pkg.tagline}”
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-stone-300 leading-relaxed tracking-wide font-light">
                    {pkg.description}
                  </p>

                  {/* Core deliverable list */}
                  <div className="space-y-3 pt-2">
                    <span className="font-display text-[9px] tracking-[0.3em] text-stone-500 uppercase block font-semibold">
                      INCLUDED IN REGISTER
                    </span>
                    <ul className="space-y-2 font-sans text-xs text-stone-300 font-light">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech specs layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-900">
                    {pkg.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <span className="font-display text-[8px] tracking-[0.2em] text-stone-500 block font-semibold uppercase">
                          {spec.label}
                        </span>
                        <span className="font-serif text-stone-300 text-xs italic">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-stone-900 mt-10">
                  <div>
                    <span className="font-display text-[8px] tracking-[0.2em] text-stone-500 block uppercase">INVESTMENT COST</span>
                    <p className="font-serif text-2xl text-[#d4af37] font-semibold">{pkg.price}</p>
                  </div>
                  <button
                    onClick={onGoToBooking}
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-stone-800 hover:border-[#d4af37] text-white hover:bg-[#d4af37]/5 transition-all text-[9px] font-display font-semibold tracking-[0.4em] uppercase rounded flex items-center justify-center gap-2 "
                  >
                    RESERVE NOW <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Technical Fleet / Heritage Equipment Showroom */}
      <div className="max-w-7xl mx-auto border-t border-stone-900 pt-16 relative z-10">
        <div className="mb-12">
          <span className="font-display text-[9px] tracking-[0.5em] text-[#d4af37] uppercase block">THE TECHNICAL FLEET</span>
          <h3 className="font-serif text-3xl text-white font-extralight tracking-widest uppercase">OUR HARDWARE</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'CAMERAS', main: 'ARRI Alexa Mini LF', desc: 'Large format cinema sensor generating legendary cinematic skin tones.' },
            { label: 'STILLS', main: 'Leica SL3 Trio', desc: 'Ultra-purity 60 Megapixel glass optics providing uncompromised textures.' },
            { label: 'ANALOG', main: 'Hasselblad 503CW', desc: 'Raw vintage medium format chemical-grain celluloid for pure analog weight.' },
            { label: 'ACOUSTICS', main: 'Sennheiser MKH8060', desc: 'Pristine directional audio capturing extreme remote organic detail.' }
          ].map((item, index) => (
            <div key={index} className="p-6 border border-stone-900 bg-stone-950/40 rounded flex flex-col justify-between h-[180px]">
              <div>
                <span className="font-display text-[8px] tracking-[0.2em] text-stone-500 block uppercase font-semibold">{item.label}</span>
                <h4 className="font-serif text-lg text-white font-light tracking-wide mt-1 uppercase">{item.main}</h4>
              </div>
              <p className="text-stone-400 font-sans text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
