import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Calendar, ArrowRight, BookOpen, Share2, CornerDownRight, ThumbsUp } from 'lucide-react';

interface JournalPost {
  id: string;
  category: string;
  readTime: string;
  releasedAt: string;
  title: string;
  tagline: string;
  image: string;
  content: string;
  quote?: string;
  author: string;
}

export default function JournalScreen() {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const JOURNAL_POSTS: JournalPost[] = [
    {
      id: 'alchemia-grain',
      category: 'ANALOG THEORY',
      readTime: '6 MIN READ',
      releasedAt: 'May 12, 2026',
      title: 'THE ALCHEMIA OF GRAIN: KODAK TRI-X',
      tagline: 'Why the digital rendering of black and white will always remain a sterile imitation of chemical memory.',
      image: 'https://images.unsplash.com/photo-1542204172-e7052809a850?auto=format&fit=crop&q=90&w=1200',
      quote: '“True monochromatic depth isn’t a software code filter. It’s physical silver halide crystals reacting to photon streams.”',
      author: 'Marcus Fame, Lead Director',
      content: 'In our digital age, the instant perfection of modern sensors has inadvertently stripped away the texture of patience. Digital noise is a mathematical grid; film grain is a living organism. When we load a reel of classic Kodak Tri-X 400 into a Hasselblad or Leica system, we aren\'t just capturing light. We are initiating an organic chemical dialogue.\n\nEvery silver-halide crystal has an individual shape and weight. The highlights dissolve softly, while the deep charcoal shadows retain a heavy, muscular micro-contrast that digital pixels fail to resolve. This creates three-dimensional weight inside a flat frame. It forces the cinematographer to read shadows first, highlight second. The beauty of analog memory lies in its imperfect permanence.'
    },
    {
      id: 'directing-silence',
      category: 'NARRATIVE INTENSITIES',
      readTime: '8 MIN READ',
      releasedAt: 'April 20, 2026',
      title: 'DIRECTING SILENCE: BETWEEN SOUNDS',
      tagline: 'Tension in modern cinema is not written in dialogue, but in the carefully designed vacuum between notes.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=90&w=1200',
      quote: '“Dialogue speaks to the mind, but the absolute void of sound speaks to the nervous system.”',
      author: 'Yuki Satoru, Sound Lead',
      content: 'Most directors fill their tracks with music, background hum, and dense Foley to avoid empty voids. But the highest art of audio is isolation. When designing our short poem "Kotodama", we spent hours creating a precise acoustic silence. We reduced environmental hums to absolute zero.\n\nBy taking away sound entirely for three to five seconds, we force the audience to focus on micro-textures. The sound of a coat fabric sliding on wood, the dry intake of breath, the mechanical click of an analog shutter. Sound isolation creates immense pressure, building a sensory tension that no explosive soundtrack can mimic. When the ambient score finally enters, it hits with profound emotional authority.'
    },
    {
      id: 'subzero-mongolia',
      category: 'FIELD EXPEDITIONS',
      readTime: '11 MIN READ',
      releasedAt: 'March 14, 2026',
      title: 'SUB-ZERO MONGOLIA: COLD DECIBELS',
      tagline: 'Recording nomadic chants and steppe gales at -40°C with custom-insulated Sennheiser shocklines.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=90&w=1200',
      quote: '“When the cold is so pure that your eyelashes freeze, sound gains an almost crystalline, transparent weight.”',
      author: 'Marcus Fame, Lead Director',
      content: 'Filming "Silent Horizons" was a test of human endurance and material resilience. At -40°C, digital lithium batteries die in fifteen minutes, and copper microphone lines turn as brittle as glass spaghetti. We had to construct specialized heated thermal wraps for our RED rigs and use military-grade insulated cabling.\n\nBut the acoustic results were divine. The Mongolian high mountain steppe is so clear of industrial pollution that sound wave dispersion travels uninterrupted for miles. You can hear a wild horse herd miles away as clearly as if they were in front of you. When recording the traditional herder chants inside the felt gers, the warm reflections off sheepskin rugs created a resonant, intimate frequency profile we could never design inside a dry recording studio.'
    },
    {
      id: 'brutalist-shadowplay',
      category: 'SPATIAL GEOMETRIES',
      readTime: '7 MIN READ',
      releasedAt: 'February 22, 2026',
      title: 'BRUTALIST SHADOWPLAY IN BERLIN',
      tagline: 'How raw concrete structures, direct midday sun, and custom linen drapery compose the modern dress.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=90&w=1200',
      quote: '“An architect shapes space, but a fashion photographer shapes the temporal shadows cast by that space.”',
      author: 'Elena Korr, Associate Stylist',
      content: 'For our "Elegance in Exile" fashion editorial, we selected concrete monuments in Berlin. These vast brutalist canvases have no ornamentation. They have no soft curves. They are pure blocks of light and shadow.\n\nWe shot at exactly 12:30 PM, when the sun is overhead and shadows are shortest and sharpest. By draping our models in lightweight, fluid linen coats, we contrasted the absolute, immovable weight of the concrete with the delicate organic movement of the wind. This balance of hard static structures and fluid dynamic textures represents the core of Blackfame\'s visual photography style.'
    }
  ];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Structural side framing lines */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-900/30 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-900/30 pointer-events-none" />

      {/* Dynamic gold spotlight */}
      <div className="absolute top-[30%] left-[-5vw] w-[400px] h-[300px] bg-[#d4af37] opacity-[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-16 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-900 pb-10">
        <div>
          <span className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block mb-3 uppercase">
            C R E A T I V E &nbsp; T H O U G H T S
          </span>
          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-[0.1em] text-white uppercase leading-none">
            THE JOURNAL
          </h1>
        </div>
        <p className="font-serif italic text-stone-500 text-base md:text-lg max-w-sm font-light">
          “An exquisite archive of creative thoughts, behind-the-scenes diaries, analog theory, and film-art explorations.”
        </p>
      </div>

      {/* Editorial Posts Grid layout */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {JOURNAL_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPost(post)}
              className="bg-stone-950/65 border border-stone-900 rounded-lg overflow-hidden group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between hover:border-[#d4af37]/45 transition-colors duration-1000"
            >
              <div>
                {/* Image top with soft zoom */}
                <div className="aspect-[16/10] overflow-hidden relative border-b border-stone-900 bg-stone-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-102 transition-all duration-[1500ms] group-hover:brightness-[0.5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-5 left-5 bg-black/85 border border-stone-850 font-display text-[8px] tracking-[0.2em] uppercase text-[#d4af37] px-3.5 py-1.5 rounded">
                    {post.category}
                  </div>
                </div>

                {/* Content text */}
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-stone-500 font-display text-[8.5px] tracking-wider uppercase font-semibold">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#d4af37]" /> {post.readTime}</span>
                    <span>&bull;</span>
                    <span>{post.releasedAt}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide group-hover:text-[#d4af37] transition-all duration-500 uppercase">
                    {post.title}
                  </h3>

                  <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed tracking-wide font-light line-clamp-3">
                    {post.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className="px-8 pb-8 flex justify-between items-center border-t border-stone-900/50 pt-5 mt-4">
                <span className="group-hover:text-white text-[#d4af37] font-display text-[9px] tracking-[0.3em] uppercase flex items-center gap-1.5 duration-500">
                  OPEN ARTICLE <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                </span>

                <button
                  onClick={(e) => handleLike(post.id, e)}
                  className="flex items-center gap-1.5 py-1.5 px-3 border border-stone-900 rounded bg-stone-950 text-[9px] font-display text-stone-400 font-light tracking-wider hover:border-[#d4af37]/30 hover:text-[#d4af37] transition-all"
                >
                  <ThumbsUp className="w-3 h-3 text-[#d4af37]" /> LIKES ({likes[post.id] || 0})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Studio dispatch newsletter */}
      <div className="max-w-3xl mx-auto border border-stone-900 bg-stone-950/80 rounded-lg p-10 text-center mt-24 relative z-10">
        <span className="font-display text-[9px] tracking-[0.5em] text-[#d4af37] block mb-3 uppercase">STUDIO DISPATCH</span>
        <h3 className="font-serif text-3xl font-light text-white uppercase tracking-wider mb-2">JOIN THE CIRCLE</h3>
        <p className="font-serif italic text-stone-400 text-sm max-w-sm mx-auto mb-8 font-light">
          “Receive highly-crafted notes on analog development, future expeditions, and private workshop registers.”
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert('Address successfully registered into the Blackfame Circle.'); }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="ENTER EXQUISITE EMAIL"
            className="flex-1 px-5 py-3 border border-stone-850 rounded bg-stone-900 text-stone-300 font-display text-[9.5px] tracking-widest placeholder-stone-600 focus:outline-none focus:border-[#d4af37] transition-all"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#d4af37] text-black font-display text-[9px] tracking-[0.3em] uppercase font-bold rounded hover:bg-white transition-colors duration-500"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      {/* Article Detail Overlay Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-2xl overflow-y-auto no-scrollbar flex flex-col"
          >
            <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-stone-900/60 py-6 px-6 sm:px-12 flex justify-between items-center">
              <span className="font-display text-[9px] tracking-[0.5em] text-[#d4af37] font-semibold uppercase">
                STUDIO JOURNAL ENTRY
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="group flex items-center gap-3 py-2 px-5 border border-stone-850 rounded-full bg-stone-950 text-stone-400 hover:text-white hover:border-[#d4af37] transition-all"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase font-display">CLOSE JOURNAL</span>
                <X className="w-4 h-4 text-[#d4af37] group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </header>

            <div className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-12 py-16 space-y-12">
              <div className="space-y-6 text-center md:text-left">
                <span className="text-[#d4af37] font-display text-[10.5px] tracking-[0.4em] uppercase block font-medium">
                  {selectedPost.category} &bull; {selectedPost.releasedAt}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-extralight tracking-widest leading-tight uppercase">
                  {selectedPost.title}
                </h1>
                <p className="font-serif italic text-lg sm:text-xl text-stone-400 max-w-xl font-light">
                  “{selectedPost.tagline}”
                </p>
                <div className="text-stone-500 font-display text-[9px] tracking-widest uppercase flex items-center justify-center md:justify-start gap-1">
                  <CornerDownRight className="w-3.5 h-3.5 text-[#d4af37]" /> Written by {selectedPost.author}
                </div>
              </div>

              <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-stone-900 border border-stone-800">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover filter brightness-[0.7]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {selectedPost.quote && (
                <div className="border-l-2 border-[#d4af37]/60 pl-8 py-4 my-10 bg-stone-950/40 pr-6">
                  <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl italic text-stone-200 leading-relaxed font-light">
                    {selectedPost.quote}
                  </blockquote>
                </div>
              )}

              <div className="space-y-6 max-w-2xl mx-auto pt-4 text-stone-300 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide">
                {selectedPost.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Share box links */}
              <div className="max-w-2xl mx-auto pt-12 border-t border-stone-900 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => { alert('Shared to exquisite channels.'); }}
                    className="flex items-center gap-2 text-[9.5px] font-display tracking-[0.3em] uppercase border border-stone-850 px-5 py-2.5 rounded bg-stone-950 text-stone-400 hover:text-white hover:border-[#d4af37] transition-all"
                  >
                    <Share2 className="w-3.5 h-3.5 text-[#d4af37]" /> SHARE ARCHIVE
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => handleLike(selectedPost.id, e)}
                    className="flex items-center gap-2 bg-[#d4af37] text-black font-display text-[9px] tracking-[0.2em] font-bold uppercase px-6 py-2.5 rounded hover:bg-white transition-all shadow-md"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" /> REVER VERDICT ({likes[selectedPost.id] || 0})
                  </button>
                </div>
              </div>

              <div className="pt-16 flex justify-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-10 py-4 border border-stone-800 rounded-full bg-stone-950 hover:bg-[#d4af37] hover:border-[#d4af37] hover:text-black transition-all text-xs tracking-[0.4em] uppercase font-display"
                >
                  CLOSE JOURNAL
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
