import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeyRound, Lock, Eye, CheckCircle, Download, FileAudio, ExternalLink, RefreshCw, Layers } from 'lucide-react';

interface VaultData {
  title: string;
  client: string;
  date: string;
  location: string;
  status: string;
  progress: number;
  description: string;
  downloads: { name: string; size: string; format: string }[];
  feedbackList: { task: string; completed: boolean }[];
}

export default function ClientLoginScreen() {
  const [passcode, setPasscode] = useState('');
  const [isLocked, setIsLocked] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [vaultData, setVaultData] = useState<VaultData | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  const portals: Record<string, VaultData> = {
    vogue2026: {
      title: 'VOGUE BERLIN - BRUTALIST FORMS',
      client: 'Vogue Editorial Berlin',
      date: 'May 05, 2026',
      location: 'Berlin, Germany',
      status: 'Ready for Archival Export',
      progress: 100,
      description: 'The Berlin brutalist photography sessions are compiled. Retouches are completed on medium-format scans.',
      downloads: [
        { name: 'exhibition_prints_mag_12k.zip', size: '2.4 GB', format: 'TIF Lossless' },
        { name: 'vogue_berlin_socials_master.mov', size: '480 MB', format: 'ProRes 422' },
        { name: 'leica_grade_luts_berlin.cube', size: '12 MB', format: '3D LUT' }
      ],
      feedbackList: [
        { task: 'Medium-Format chemical film scanning', completed: true },
        { task: 'Chromatic aberration neutral filter adjustments', completed: true },
        { task: 'Vogue lead stylist final layout review', completed: true },
        { task: 'Physical archival linen print binder export', completed: true }
      ]
    },
    porsche911: {
      title: 'PORSCHE CHRONUM - CONNOTATIONS OF SPEED',
      client: 'Porsche AG Stuttgart',
      date: 'April 28, 2026',
      location: 'Stuttgart / Alps',
      status: 'Color grading and mastering finalization',
      progress: 85,
      description: 'Cinema commercial loop files. Soundtrack synthesizer score overlays are synced at 120dB reference level.',
      downloads: [
        { name: 'porsche_speed_master_alpha_4k.mov', size: '4.8 GB', format: 'PR 4444 XQ' },
        { name: 'ambient_synths_pcm_audio.wav', size: '210 MB', format: 'PCM Stereo 24bit' }
      ],
      feedbackList: [
        { task: '8K RED V-Raptor horizontal footage logging', completed: true },
        { task: 'Anamorphic flare correction rendering', completed: true },
        { task: 'Porsche heritage engine acoustics overlay', completed: true },
        { task: 'Release final TV broadcast level master', completed: false }
      ]
    },
    leica7: {
      title: 'LEICA EUROPE EXHIBIT - LANDSCAPES OF MONOCHROME',
      client: 'Leica Curator, Frankfurt Office',
      date: 'March 18, 2026',
      location: 'Geneva / Berlin',
      status: 'Archival Vault Locked',
      progress: 100,
      description: 'The master exhibition portfolio catalog and sound isolation waves of the Switzerland herder projects.',
      downloads: [
        { name: 'leica_exhibition_monochrome_masters.zip', size: '8.4 GB', format: 'RAW DNG Archive' },
        { name: 'geneva_watchmaker_interview_24bit.wav', size: '180 MB', format: 'WAV Stereo' }
      ],
      feedbackList: [
        { task: 'Leica SL3 raw files grade calibration', completed: true },
        { task: 'Watchmaker voice sound gate isolation', completed: true },
        { task: 'Curator preview physical invite print checklist', completed: true }
      ]
    }
  };

  const attemptLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = passcode.trim().toLowerCase();
    
    if (portals[cleanKey]) {
      setVaultData(portals[cleanKey]);
      setIsLocked(false);
      setErrorMessage('');
    } else {
      setErrorMessage('Unrecognized access passkey. Please check code structure.');
    }
  };

  const handleExitVault = () => {
    setIsLocked(true);
    setVaultData(null);
    setPasscode('');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 px-6 sm:px-12 relative overflow-hidden flex flex-col justify-center">
      {/* Structural lines */}
      <div className="absolute left-6 md:left-14 top-0 bottom-0 w-[1px] bg-stone-900/40 pointer-events-none" />
      <div className="absolute right-6 md:right-14 top-0 bottom-0 w-[1px] bg-stone-900/40 pointer-events-none" />

      {/* Dynamic spot glow */}
      <div className="absolute top-[40%] left-[30%] w-[35vw] h-[35vh] gold-glow opacity-10 pointer-events-none blur-[150px]" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <AnimatePresence mode="wait">
          {isLocked ? (
            /* locked STATE screen */
            <motion.div
              key="login-form-panel"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="max-w-md mx-auto bg-stone-950 border border-stone-900 rounded-lg p-8 sm:p-12 shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 w-24 h-[1px] bg-gradient-to-r from-[#d4af37] to-transparent" />
              
              <div className="text-center space-y-4 mb-8">
                <div className="w-12 h-12 rounded-full border border-stone-800 bg-stone-900/40 flex items-center justify-center mx-auto text-[#d4af37]">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="font-display text-[8.5px] tracking-[0.4em] text-[#d4af37] block uppercase font-bold">CLIENT VAULT</span>
                  <h1 className="font-serif text-2xl tracking-widest text-white uppercase font-light">SECURED PORTAL</h1>
                </div>
                <div className="text-[10px] text-stone-500 font-sans tracking-wide leading-relaxed">
                  Enter your private production passkey below to view real-time feedback, download deliverables, and inspect audio/video tracks.
                </div>
              </div>

              <form onSubmit={attemptLogin} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="font-display text-[8px] tracking-[0.2em] text-stone-400 uppercase font-semibold">ENTER PASSKEY</label>
                  <div className="relative">
                    <KeyRound className="absolute left-4 top-3.5 w-4 h-4 text-stone-600" />
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="e.g., vogue2026, porsche911, leica7"
                      className="w-full pl-11 pr-5 py-3 border border-stone-850 rounded bg-stone-900/40 text-stone-200 font-mono text-xs tracking-[0.3em] placeholder-stone-700/80 focus:outline-none focus:border-[#d4af37] transition-all"
                      required
                    />
                  </div>
                </div>

                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 font-sans text-[10px] text-center tracking-wide"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#d4af37] text-black font-display text-[9px] tracking-[0.4em] uppercase font-bold rounded hover:bg-white transition-all shadow-lg shadow-stone-950 pointer-events-auto cursor-pointer"
                >
                  DECRYPT & AUTHENTICATE
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-stone-900/60 text-center">
                <span className="text-[8px] font-display text-stone-600 tracking-widest uppercase block">BLACKFAME CLIENT METRIC GATE</span>
                <p className="text-[9px] text-stone-700 font-sans mt-1">
                  Try typing <span className="text-stone-400 font-mono">vogue2026</span> or <span className="text-stone-400 font-mono">porsche911</span>
                </p>
              </div>
            </motion.div>
          ) : (
            /* unlocked STATE screen - VAULT DATA */
            <motion.div
              key="client-vault-panel"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              {/* Header inside vault details */}
              <div className="bg-stone-950 border border-stone-900 rounded-lg p-8 sm:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#d4af37]/5 rounded-bl-full pointer-events-none" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse pointer-events-none" />
                    <span className="font-display text-[8.5px] tracking-[0.3em] text-emerald-400 uppercase font-bold">authenticated live channel</span>
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-widest uppercase font-light text-white">
                    {vaultData?.title}
                  </h2>
                  <p className="text-stone-500 font-display text-[9px] tracking-widest uppercase">
                    CLIENT SECURE LAYOUT &bull; {vaultData?.client}
                  </p>
                </div>

                <button
                  onClick={handleExitVault}
                  className="px-6 py-2.5 border border-stone-850 hover:border-[#d4af37] rounded bg-stone-900 text-stone-400 hover:text-white transition-all text-[9px] font-display uppercase tracking-[0.2em] font-semibold"
                >
                  DISCONNECT VAULT
                </button>
              </div>

              {/* Progress status splits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Meta list */}
                <div className="bg-stone-950 border border-stone-900 rounded-lg p-6 space-y-4 shadow-xl">
                  <span className="font-display text-[8px] tracking-[0.2em] text-stone-500 uppercase block font-semibold">PRODUCTION DATA</span>
                  <div className="space-y-3 font-sans text-xs">
                    <div>
                      <span className="text-stone-500 uppercase block tracking-wider text-[9px]">LAUNCHED AT</span>
                      <span className="text-stone-300 font-serif font-light text-base">{vaultData?.date}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 uppercase block tracking-wider text-[9px]">COORDINATES</span>
                      <span className="text-stone-300 font-serif font-light text-base">{vaultData?.location}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 uppercase block tracking-wider text-[9px]">TRACT PORT STATUS</span>
                      <span className="text-[#d4af37] font-serif font-light text-base">{vaultData?.status}</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar info */}
                <div className="bg-stone-950 border border-stone-900 rounded-lg p-6 space-y-4 shadow-xl md:col-span-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-display text-[8px] tracking-[0.2em] text-stone-500 uppercase block font-semibold">EXCLUSIVITY TIMELINE</span>
                    <p className="text-stone-300 font-sans text-xs leading-relaxed font-light">
                      {vaultData?.description} All deliverables meet studio master standards and are hosted on highly-redundant storage vaults.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-[10px] font-display text-stone-400">
                      <span>COMPILING COMPLETION</span>
                      <span className="font-mono text-[#d4af37]">{vaultData?.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-stone-900 rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-[#d4af37]"
                        initial={{ width: 0 }}
                        animate={{ width: `${vaultData?.progress}%` }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Downloads and checkers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Checkers */}
                <div className="bg-stone-950 border border-stone-900 rounded-lg p-8 space-y-6 shadow-xl">
                  <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] uppercase block font-semibold">TASK CHECKLISTS</span>
                  <div className="space-y-4">
                    {vaultData?.feedbackList.map((feedback, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3.5">
                        <CheckCircle className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          feedback.completed ? 'text-emerald-500' : 'text-stone-700'
                        }`} />
                        <span className={`text-xs font-sans font-light tracking-wide ${
                          feedback.completed ? 'text-stone-300 line-through' : 'text-stone-100'
                        }`}>
                          {feedback.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Downloads */}
                <div className="bg-stone-950 border border-stone-900 rounded-lg p-8 space-y-6 shadow-xl">
                  <span className="font-display text-[9px] tracking-[0.3em] text-[#d4af37] uppercase block font-semibold">EXPORTS AVAILABLE</span>
                  <div className="space-y-3">
                    {vaultData?.downloads.map((dl, dIdx) => (
                      <div 
                        key={dIdx}
                        className="flex items-center justify-between p-3.5 border border-stone-900 bg-stone-950 rounded hover:border-stone-850 hover:bg-black transition-all group"
                      >
                        <div className="space-y-1">
                          <span className="text-stone-200 font-sans text-xs tracking-wide block font-light truncate max-w-[200px] sm:max-w-[280px]">
                            {dl.name}
                          </span>
                          <span className="font-display text-[8.5px] text-stone-500 uppercase block font-semibold">
                            {dl.format} &bull; {dl.size}
                          </span>
                        </div>
                        <button
                          onClick={() => { alert(`Simulating highly secure master download of ${dl.name}`); }}
                          className="p-3 border border-stone-850 group-hover:border-[#d4af37] group-hover:text-black group-hover:bg-[#d4af37] rounded transition-all text-stone-400"
                        >
                          <Download className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Emergency client support */}
              <div className="p-6 border border-stone-900 bg-stone-950/40 rounded-lg text-center max-w-md mx-auto">
                <span className="text-stone-600 font-display text-[8.5px] uppercase tracking-wider block">secure crypt session</span>
                <p className="text-[10px] text-stone-500 font-sans mt-1">
                  For secure offline deliveries or key revocations, contact Yuki Satoru directly in the London Studio Room via secure hotline lines.
                </p>
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
