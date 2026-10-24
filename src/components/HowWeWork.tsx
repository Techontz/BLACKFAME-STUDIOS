import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";
import {
  Search,
  PenTool,
  Camera,
  Wand2,
  Send,
  RefreshCcw,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const STEP_DURATION = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    description:
      "We listen first. Understanding your goals, audience and vision helps us create content with purpose.",
    highlights: ["Goals", "Audience", "Vision"],
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    description:
      "We build a strategic creative direction that aligns visuals with your story.",
    highlights: ["Creative Direction", "Visual Strategy", "Story"],
  },
  {
    number: "03",
    title: "Create",
    icon: Camera,
    description:
      "Photography, filmmaking and drone cinematography bring your ideas to life.",
    highlights: ["Photography", "Filmmaking", "Drone"],
  },
  {
    number: "04",
    title: "Refine",
    icon: Wand2,
    description:
      "Editing, color grading and sound design transform footage into cinematic experiences.",
    highlights: ["Editing", "Color Grading", "Sound Design"],
  },
  {
    number: "05",
    title: "Deliver",
    icon: Send,
    description:
      "Final assets are optimized for campaigns, reports, websites and presentations.",
    highlights: ["Campaigns", "Reports", "Websites", "Presentations"],
  },
  {
    number: "06",
    title: "Continue",
    icon: RefreshCcw,
    description:
      "We build long-term partnerships and continue documenting your growth and impact.",
    highlights: ["Partnership", "Growth", "Impact"],
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const reduceMotion = useReducedMotion();

  const autoplay = inView && !paused && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % steps.length),
      STEP_DURATION
    );
    return () => clearTimeout(timer);
  }, [active, autoplay]);

  const go = (dir: 1 | -1) =>
    setActive((i) => (i + dir + steps.length) % steps.length);

  const step = steps[active];
  const Icon = step.icon;

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0c0c0c] overflow-hidden py-20 md:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#d4af37]/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-center">
          {/* LEFT — header + step list */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: EASE }}
            >
              <div className="flex items-center gap-4">
                <span className="w-10 h-px bg-[#d4af37]" />
                <span className="uppercase tracking-[0.45em] text-[#d4af37] text-[11px]">
                  How We Work
                </span>
              </div>

              <h2 className="mt-6 text-white text-4xl md:text-5xl font-light tracking-tight leading-[1.1]">
                Our{" "}
                <span className="font-serif italic text-[#e8cf7a]">
                  Creative
                </span>{" "}
                Process
              </h2>

              <p className="mt-4 text-stone-400 text-base md:text-lg">
                Every Great Story Begins With Understanding.
              </p>
            </motion.div>

            {/* Step list (desktop) */}
            <ol
              className="hidden lg:block mt-10 border-l border-white/10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {steps.map((s, i) => {
                const isActive = i === active;
                return (
                  <li key={s.number} className="relative">
                    {isActive && (
                      <motion.span
                        layoutId="process-indicator"
                        className="absolute -left-px top-0 bottom-0 w-px bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? "step" : undefined}
                      className="group w-full flex items-center gap-5 pl-6 pr-2 py-3 text-left"
                    >
                      <span
                        className={`font-display text-xs tabular-nums transition-colors duration-500 ${
                          isActive
                            ? "text-[#d4af37]"
                            : "text-stone-600 group-hover:text-stone-400"
                        }`}
                      >
                        {s.number}
                      </span>
                      <span
                        className={`text-lg tracking-wide transition-all duration-500 ${
                          isActive
                            ? "text-white translate-x-1"
                            : "text-stone-500 group-hover:text-stone-300"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="ml-auto h-px flex-1 max-w-[120px] bg-white/5 overflow-hidden">
                        {isActive && (
                          <motion.span
                            key={`${active}-${autoplay}`}
                            className="block h-full bg-[#d4af37]/70 origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: autoplay ? 1 : 0 }}
                            transition={{
                              duration: autoplay ? STEP_DURATION / 1000 : 0.3,
                              ease: "linear",
                            }}
                          />
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* Step tabs (mobile) */}
            <div className="lg:hidden mt-8 -mx-6 px-6 flex gap-2 overflow-x-auto no-scrollbar">
              {steps.map((s, i) => (
                <button
                  key={s.number}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                    i === active
                      ? "border-[#d4af37]/60 bg-[#d4af37]/10 text-white"
                      : "border-white/10 text-stone-500"
                  }`}
                >
                  <span className="text-[#d4af37] mr-2 text-xs">
                    {s.number}
                  </span>
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — detail panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative"
          >
            {/* Gold edge glow */}
            <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-[#d4af37]/40 via-white/5 to-transparent pointer-events-none" />

            <div className="relative rounded-[28px] bg-[#121212]/95 backdrop-blur-xl overflow-hidden p-8 md:p-10 min-h-[360px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative flex-1"
                >
                  {/* Ghost number */}
                  <span className="absolute -top-6 -right-2 font-display text-[140px] md:text-[180px] leading-none font-light text-transparent bg-clip-text bg-gradient-to-b from-white/[0.07] to-transparent select-none pointer-events-none">
                    {step.number}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-2xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/15 to-transparent flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.12)]">
                      <Icon
                        size={24}
                        strokeWidth={1.6}
                        className="text-[#d4af37]"
                      />
                    </div>
                    <span className="text-[#d4af37] text-[11px] uppercase tracking-[0.4em]">
                      Step {step.number}
                      <span className="text-stone-600">
                        {" "}
                        / {String(steps.length).padStart(2, "0")}
                      </span>
                    </span>
                  </div>

                  <h3 className="mt-8 text-white text-3xl md:text-4xl font-light tracking-tight">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-md text-stone-400 leading-7">
                    {step.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {step.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-stone-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer: progress + controls */}
              <div className="relative mt-10 flex items-center gap-6">
                <div className="flex-1 flex gap-1.5">
                  {steps.map((s, i) => (
                    <button
                      key={s.number}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Go to step ${s.number}: ${s.title}`}
                      className="group flex-1 py-2"
                    >
                      <span
                        className={`block h-[2px] rounded-full transition-colors duration-500 ${
                          i <= active
                            ? "bg-[#d4af37]"
                            : "bg-white/10 group-hover:bg-white/25"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous step"
                    className="w-10 h-10 rounded-full border border-white/10 text-stone-400 flex items-center justify-center transition-colors hover:border-[#d4af37]/50 hover:text-[#d4af37]"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next step"
                    className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center transition-colors hover:bg-[#d4af37] hover:text-black"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
