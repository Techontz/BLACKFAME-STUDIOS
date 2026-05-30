import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, ExternalLink, Headphones, Disc } from 'lucide-react';
import { PODCAST_EPISODES } from '../data';

export default function Podcasts() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlayback = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative bg-black py-24 px-6 md:px-12 overflow-hidden" id="podcasts">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[350px] charcoal-glow opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-display text-[10px] tracking-[0.5em] text-[#d4af37] block mb-3 uppercase">
            A U D I O &nbsp; C H R O N I C L E S
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-extralight tracking-widest uppercase">
            PODCASTS
          </h2>
        </div>
        <p className="font-serif italic text-stone-400 text-base md:text-lg max-w-sm font-light">
          “Audio archives containing discussions on architectural, design, and cinematic permanence.”
        </p>
      </div>

      {/* Grid of Podcast Covers */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PODCAST_EPISODES.map((ep, idx) => (
          <motion.div
            key={ep.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col justify-between bg-stone-950 border border-stone-900 rounded-xl p-6 hover:border-stone-800 transition-all duration-700 shadow-xl"
          >
            {/* Cover Art and Waveform Action */}
            <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-stone-900 border border-stone-850 mb-6">
              <img
                src={ep.coverImage}
                alt={ep.title}
                className="w-full h-full object-cover filter brightness-[0.65] group-hover:scale-[1.03] transition-transform duration-[1500ms]"
                referrerPolicy="no-referrer"
              />

              {/* Episode Number Badge */}
              <div className="absolute top-4 left-4 min-w-[36px] h-9 rounded-full bg-black/90 border border-stone-800 flex items-center justify-center font-display text-[11px] font-bold text-white tracking-widest px-2.5 shadow-md">
                EP {ep.episodeNumber}
              </div>

              {/* Glass Player Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/55 transition-colors duration-500 flex justify-center items-center">
                <button
                  onClick={() => togglePlayback(ep.id)}
                  className="w-16 h-16 rounded-full border border-stone-600/60 bg-black/80 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-500 shadow-xl relative"
                >
                  {playingId === ep.id ? (
                    <Pause className="w-6 h-6 fill-current animate-pulse" />
                  ) : (
                    <Play className="w-6 h-6 fill-current ml-1" />
                  )}

                  {/* Vinyl rotating indicator if active */}
                  {playingId === ep.id && (
                    <motion.div 
                      className="absolute -inset-1 border border-dashed border-[#d4af37]/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                    />
                  )}
                </button>
              </div>

              {/* Floating Equalizer Wave if playing inside card cover */}
              {playingId === ep.id && (
                <div className="absolute bottom-4 left-1/2 -ml-16 w-32 h-6 flex items-end gap-[3px] bg-black/80 backdrop-blur-md py-1.5 px-3 border border-stone-800 rounded-full justify-center">
                  {[0.7, 0.4, 0.9, 0.5, 0.8, 0.3, 0.6, 0.2, 0.8, 0.5].map((val, i) => (
                    <motion.span
                      key={i}
                      className="w-[2px] bg-[#d4af37] rounded-all block"
                      style={{ height: '3px' }}
                      animate={{ height: ['4px', '16px', '4px'] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8 + (i % 3) * 0.2,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content & Descriptions */}
            <div className="space-y-3 flex-grow flex flex-col justify-between">
              <div>
                <span className="font-display text-[9px] tracking-[0.3em] uppercase text-stone-500">
                  {ep.releasedAt} &bull; {ep.duration}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-light tracking-wide mt-1.5 leading-snug hover:text-[#d4af37] transition-colors duration-300">
                  {ep.title}
                </h3>
                <p className="text-xs text-stone-400 font-sans leading-relaxed tracking-wide font-light mt-4 line-clamp-3">
                  {ep.description}
                </p>
              </div>

              {/* Premium Podcast platforms buttons */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-stone-900 mt-6 md:mt-2">
                <a
                  href={ep.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 border border-stone-900 rounded bg-stone-950 text-[9px] font-medium tracking-[0.2em] text-center uppercase text-zinc-400 hover:text-white hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5 transition-all duration-500 font-display flex items-center justify-center gap-1.5"
                >
                  SPOTIFY
                </a>
                <a
                  href={ep.appleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 border border-stone-900 rounded bg-stone-950 text-[9px] font-medium tracking-[0.2em] text-center uppercase text-zinc-400 hover:text-white hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5 transition-all duration-500 font-display flex items-center justify-center gap-1.5"
                >
                  APPLE
                </a>
                <a
                  href={ep.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 border border-stone-900 rounded bg-stone-950 text-[9px] font-medium tracking-[0.2em] text-center uppercase text-zinc-400 hover:text-white hover:border-[#d4af37]/60 hover:bg-[#d4af37]/5 transition-all duration-500 font-display flex items-center justify-center gap-1.5"
                >
                  YOUTUBE
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
