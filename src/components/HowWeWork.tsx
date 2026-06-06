"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Camera,
  Wand2,
  Send,
  RefreshCcw,
} from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: Search,
      description:
        "We listen first. Understanding your goals, audience and vision helps us create content with purpose.",
    },
    {
      number: "02",
      title: "Design",
      icon: PenTool,
      description:
        "We build a strategic creative direction that aligns visuals with your story.",
    },
    {
      number: "03",
      title: "Create",
      icon: Camera,
      description:
        "Photography, filmmaking and drone cinematography bring your ideas to life.",
    },
    {
      number: "04",
      title: "Refine",
      icon: Wand2,
      description:
        "Editing, color grading and sound design transform footage into cinematic experiences.",
    },
    {
      number: "05",
      title: "Deliver",
      icon: Send,
      description:
        "Final assets are optimized for campaigns, reports, websites and presentations.",
    },
    {
      number: "06",
      title: "Continue",
      icon: RefreshCcw,
      description:
        "We build long-term partnerships and continue documenting your growth and impact.",
    },
  ];

  return (
    <section className="relative bg-[#111111] overflow-hidden py-32">
      {/* Apple Style Background */}

      <div className="absolute inset-0 bg-[#111111]" />

      <div
        className="
        absolute
        inset-0
        opacity-[0.025]
        bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
      />

      {/* Soft Light */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.015] blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center mb-32"
        >
          <span className="uppercase tracking-[0.45em] text-[#d4af37] text-xs">
            HOW WE WORK
          </span>

          <div className="w-16 h-px bg-[#d4af37] mx-auto mt-5" />

          <h2 className="mt-8 text-white text-5xl md:text-7xl font-light tracking-tight">
            Our Creative Process
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-stone-400 text-lg">
            Every Great Story Begins With Understanding.
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative">
          {/* CENTER LINE */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
            <div className="h-full w-px bg-white/10" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            const textLeft = index % 2 === 0;

            const Card = (
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  overflow-hidden
                  max-w-[500px]
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.025]
                  backdrop-blur-xl
                  p-8
                "
              >
                {/* Apple Glow */}

                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

                <span className="text-[#d4af37] text-xs uppercase tracking-[0.35em]">
                  Step {step.number}
                </span>

                <h3 className="mt-4 text-white text-4xl font-light">
                  {step.title}
                </h3>

                <p className="mt-5 text-stone-400 leading-8">
                  {step.description}
                </p>
              </motion.div>
            );

            const StepIcon = (
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                }}
                className="
                  w-20
                  h-20
                  rounded-full
                  border
                  border-[#d4af37]/20
                  bg-[#161616]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_50px_rgba(212,175,55,0.05)]
                "
              >
                <Icon
                  size={28}
                  strokeWidth={1.8}
                  className="text-[#d4af37]"
                />
              </motion.div>
            );

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mb-28"
              >
                {/* MOBILE */}

                <div className="lg:hidden space-y-6">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-[#181818]
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white
                        text-sm
                      "
                    >
                      {step.number}
                    </motion.div>

                    {StepIcon}
                  </div>

                  {Card}
                </div>

                {/* DESKTOP */}

                <div className="hidden lg:grid lg:grid-cols-[1fr_120px_1fr] items-center">
                  {textLeft ? (
                    <>
                      <div className="flex justify-end pr-12">
                        {Card}
                      </div>

                      <div className="relative flex justify-center">
                        <div className="absolute -top-36 -bottom-36 w-px bg-white/10" />

                        <motion.div
                          whileHover={{
                            scale: 1.08,
                          }}
                          className="
                            relative
                            z-20
                            w-14
                            h-14
                            rounded-full
                            bg-[#181818]
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-white
                            text-sm
                            font-medium
                            backdrop-blur-xl
                          "
                        >
                          {step.number}
                        </motion.div>
                      </div>

                      <div className="flex justify-start pl-2">
                        {StepIcon}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-end pr-2">
                        {StepIcon}
                      </div>

                      <div className="relative flex justify-center">
                        <div className="absolute -top-36 -bottom-36 w-px bg-white/10" />

                        <motion.div
                          whileHover={{
                            scale: 1.08,
                          }}
                          className="
                            relative
                            z-20
                            w-14
                            h-14
                            rounded-full
                            bg-[#181818]
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-white
                            text-sm
                            font-medium
                            backdrop-blur-xl
                          "
                        >
                          {step.number}
                        </motion.div>
                      </div>

                      <div className="flex justify-start pl-12">
                        {Card}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}