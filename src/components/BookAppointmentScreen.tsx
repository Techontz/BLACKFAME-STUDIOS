import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Mail, FileText, Check, ChevronRight, UserCheck, Settings, ArrowLeftRight, Clock } from 'lucide-react';

export default function BookAppointmentScreen() {
  const [selectedService, setSelectedService] = useState('FINE ART PHOTOGRAPHY');
  const [selectedArtist, setSelectedArtist] = useState('MARCUS FAME');
  const [selectedDay, setSelectedDay] = useState<number | null>(15);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const SERVICES = [
    { name: 'FINE ART PHOTOGRAPHY', desc: 'Leica still photography sessions, fashion edit campaigns.' },
    { name: 'BRAND CINEMA & MOTION', desc: '8K RED V-Raptor commercials, brand documentaries.' },
    { name: 'ACOUSTICS & MASTERING', desc: 'Bespoke soundtracks, podcast studio tracking.' },
    { name: 'CREATIVE DIRECTION', desc: 'Atmosphere mapping, luxury brand design consultation.' }
  ];

  const ARTISTS = [
    { name: 'MARCUS FAME', role: 'Artistic Partner' },
    { name: 'ELENA KORR', role: 'Cinematic Specialist' },
    { name: 'YUKI SATORU', role: 'Sound Archival Lead' }
  ];

  const DAYS_OF_MONTH = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden">
      {/* Structural side lines */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-900/35 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-900/35 pointer-events-none" />

      {/* Atmospheric lighting filter */}
      <div className="absolute top-[30%] left-[-10vw] w-[40vw] h-[40vh] gold-glow opacity-[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            /* ACTIVE FORM STATE */
            <motion.div
              key="booking-form"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Heading */}
              <div className="text-center md:text-left border-b border-stone-850 pb-8 space-y-3">
                <span className="font-display text-[10px] tracking-[0.6em] text-[#d4af37] block uppercase font-bold">
                  B E S P O K E &nbsp; C A L E N D A R S
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-widest text-white uppercase">
                  RESERVE A SESSION
                </h1>
                <p className="font-serif italic text-stone-500 text-sm md:text-base font-light max-w-xl">
                  “Our calendar is strictly limited to 12 legacy productions per quarter to ensure absolute curation focus.”
                </p>
              </div>

              <form onSubmit={handleBooking} className="space-y-10">
                {/* 1. SELECT SERVICE TABS */}
                <div className="space-y-4">
                  <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] font-bold block uppercase">
                    I. DESIGNATE CORE SERVICE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES.map((srv) => (
                      <button
                        type="button"
                        key={srv.name}
                        onClick={() => setSelectedService(srv.name)}
                        className={`p-6 rounded border text-left transition-all duration-500 relative ${
                          selectedService === srv.name
                            ? 'border-[#d4af37] bg-stone-950/60 shadow-lg'
                            : 'border-stone-900 bg-stone-950/20 hover:border-stone-800'
                        }`}
                      >
                        <h3 className="font-serif text-sm tracking-widest text-[#d4af37] uppercase mb-1">
                          {srv.name}
                        </h3>
                        <p className="text-stone-400 font-sans text-[11px] font-light leading-relaxed">
                          {srv.desc}
                        </p>
                        {selectedService === srv.name && (
                          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#d4af37] pointer-events-none" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. SELECT DESIGNATED LEAD PARTNER */}
                <div className="space-y-4 pt-4 border-t border-stone-900">
                  <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] font-bold block uppercase">
                    II. SELECT DESIGNATED LEAD ARTIST
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ARTISTS.map((art) => (
                      <button
                        type="button"
                        key={art.name}
                        onClick={() => setSelectedArtist(art.name)}
                        className={`p-5 rounded border text-left transition-all duration-500 flex items-center justify-between ${
                          selectedArtist === art.name
                            ? 'border-[#d4af37] bg-stone-950/60'
                            : 'border-stone-900 bg-stone-950/20 hover:border-stone-800'
                        }`}
                      >
                        <div>
                          <h4 className="font-serif text-xs text-white uppercase tracking-wider">{art.name}</h4>
                          <p className="text-[10px] text-stone-500 font-sans font-light">{art.role}</p>
                        </div>
                        {selectedArtist === art.name && (
                          <Check className="w-4 h-4 text-[#d4af37]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. CALENDAR PICKER */}
                <div className="space-y-4 pt-4 border-t border-stone-900">
                  <div className="flex justify-between items-center">
                    <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] font-bold block uppercase">
                      III. CHOOSE JUNE 2026 DATE
                    </span>
                    <span className="font-mono text-stone-500 text-[10px]">SELECTED: JUNE {selectedDay || 'NONE'}</span>
                  </div>

                  <div className="bg-stone-950/70 border border-stone-900 rounded-lg p-6">
                    <div className="text-center border-b border-stone-900 pb-4 mb-4">
                      <span className="font-serif text-sm tracking-widest text-[#d4af37] uppercase">J U N E &nbsp; 2 0 2 6</span>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-stone-600 font-display text-[9px] font-semibold mb-2">
                      <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                    </div>

                    <div className="grid grid-cols-7 gap-2">
                      {DAYS_OF_MONTH.map((day) => {
                        // Some days random reserved status to look authentic
                        const isBooked = day === 3 || day === 8 || day === 14 || day === 21 || day === 25;
                        const isSelected = selectedDay === day;

                        return (
                          <button
                            type="button"
                            key={day}
                            disabled={isBooked}
                            onClick={() => setSelectedDay(day)}
                            className={`p-3 text-[11px] rounded transition-all flex flex-col items-center justify-center font-mono ${
                              isBooked 
                                ? 'bg-stone-950 text-stone-800 border border-stone-950 cursor-not-allowed line-through'
                                : isSelected
                                  ? 'bg-[#d4af37] text-black font-semibold border border-[#d4af37]'
                                  : 'bg-stone-900/40 text-stone-300 border border-stone-900 hover:border-stone-800 hover:text-white'
                            }`}
                          >
                            <span>{day}</span>
                            {isBooked && <span className="text-[7.5px] scale-75 opacity-40 font-sans tracking-tight font-light font-semibold uppercase">Locked</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 4. CLIENT COORDINATES INPUTS */}
                <div className="space-y-5 pt-4 border-t border-stone-900">
                  <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] font-bold block uppercase">
                    IV. BESPOKE CLIENT DETAILS
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="font-display text-[8px] tracking-[0.15em] text-stone-400 uppercase font-semibold flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#d4af37]" /> FULL GUEST NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="ENTER EXQUISITE NAME"
                        className="w-full px-5 py-3 border border-stone-850 rounded bg-stone-900 text-stone-200 font-display text-[9.5px] tracking-widest focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-display text-[8px] tracking-[0.15em] text-stone-400 uppercase font-semibold flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#d4af37]" /> GUEST MAIL COORDINATE
                      </label>
                      <input
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="ENTER SECURE EMAIL"
                        className="w-full px-5 py-3 border border-stone-850 rounded bg-stone-900 text-stone-200 font-display text-[9.5px] tracking-widest focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-display text-[8px] tracking-[0.15em] text-stone-400 uppercase font-semibold flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-[#d4af37]" /> THE ARTISTIC PROJECT BRIEF & SCOPE DESCRIPTION
                    </label>
                    <textarea
                      required
                      value={projectBrief}
                      rows={4}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="DESCRIBE CONNOTATIONS, SPATIAL FOCUSES, ATMOSPHERE THEMES AND ESTIMATED HOUR COUNTS..."
                      className="w-full px-5 py-3.5 border border-stone-850 rounded bg-stone-900 text-stone-200 font-sans text-xs tracking-wide placeholder-stone-600 focus:outline-none focus:border-[#d4af37] resize-none"
                    />
                  </div>
                </div>

                {/* Trigger */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#d4af37] text-black font-display text-[10px] tracking-[0.4em] uppercase font-bold rounded hover:bg-white transition-all shadow-xl font-semibold cursor-pointer"
                  >
                    DISPATCH RESERVATION REGISTER
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* SUCCESS RESPONSE STATE */
            <motion.div
              key="booking-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto border border-stone-850 bg-stone-950 p-10 sm:p-14 rounded-lg text-center shadow-2xl relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full border border-stone-800 bg-[#d4af37]/10 flex items-center justify-center mx-auto text-[#d4af37] mb-8 animate-pulse">
                <Check className="w-7 h-7" />
              </div>

              <span className="font-display text-[9px] tracking-[0.4em] text-[#d4af37] uppercase block font-bold mb-3">RESERVATION LOGGED</span>
              <h2 className="font-serif text-3xl text-white font-light uppercase tracking-wider mb-4">
                THE DISPATCH LIST COMPLETED
              </h2>
              
              <div className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed tracking-wide space-y-4 mb-10 max-w-sm mx-auto font-light">
                <p>
                  Salutations, <span className="text-[#d4af37] font-semibold">{clientName}</span>. Your request for <span className="text-stone-200 font-semibold">{selectedService}</span> with lead artist <span className="text-stone-200 font-semibold">{selectedArtist}</span> on June {selectedDay} is written into the secure archive.
                </p>
                <p className="italic">
                  “Marcus Fame will dispatch a private studio messenger, or email notification within 48 business hours to establish direct, customized communications.”
                </p>
              </div>

              <div className="pt-6 border-t border-stone-900 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setClientName('');
                    setClientEmail('');
                    setProjectBrief('');
                    setSelectedDay(15);
                  }}
                  className="px-8 py-3 border border-stone-800 hover:border-[#d4af37] rounded font-display text-[9px] tracking-[0.3em] uppercase text-stone-400 hover:text-white bg-transparent transition-all font-semibold"
                >
                  SCHEDULE ANOTHER SESSION
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
