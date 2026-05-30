import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Check, Send, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Photography',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate luxury API submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Clean form state
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Photography',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer className="relative bg-[#0c0c0c] w-full border-t border-stone-900" id="contact">
      {/* Contact Form Section */}
      <section className="relative min-h-screen py-24 px-6 md:px-12 flex items-center justify-center border-b border-stone-950">
        
        {/* Soft Golden Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[50vh] gold-glow opacity-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto w-full space-y-14 relative z-10">
          
          {/* Header Block */}
          <div className="text-center space-y-4">
            <span className="font-display text-[10px] tracking-[0.5em] text-[#d4af37] block uppercase">
              C O N N E C T &nbsp; W I T H &nbsp; U S
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-white font-extralight tracking-widest leading-tight uppercase">
              Let’s Create <br/>
              <span className="font-light italic tracking-normal text-stone-200">Something Timeless.</span>
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 bg-stone-950/60 p-8 sm:p-12 rounded-xl border border-stone-900 backdrop-blur-xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] tracking-[0.3em] font-display text-stone-400 uppercase font-medium">
                      FULL NAME *
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/60 border border-stone-850 rounded px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide"
                      placeholder="e.g. Sterling Hunt"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] tracking-[0.3em] font-display text-stone-400 uppercase font-medium">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/60 border border-stone-850 rounded px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide"
                      placeholder="e.g. sterling@luxury.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[10px] tracking-[0.3em] font-display text-stone-400 uppercase font-medium">
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/60 border border-stone-850 rounded px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide"
                      placeholder="e.g. +1 415 888 9999"
                    />
                  </div>

                  {/* Project Type dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-[10px] tracking-[0.3em] font-display text-stone-400 uppercase font-medium">
                      PROJECT TYPE
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-stone-950 border border-stone-850 rounded px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide cursor-pointer"
                    >
                      <option value="Photography">Photography Production</option>
                      <option value="Films">Motion Films & Script</option>
                      <option value="Documentaries">Festival Documentary</option>
                      <option value="Podcasts">Creative Studio Podcast</option>
                      <option value="Commercial Productions">Commercial Production</option>
                      <option value="Brand Storytelling">Brand Storytelling</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] tracking-[0.3em] font-display text-stone-400 uppercase font-medium">
                    YOUR VISION
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/60 border border-stone-850 rounded px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide resize-none"
                    placeholder="Describe the mood, target medium, and visual message you want to cement forever..."
                  />
                </div>

                {/* Button Action */}
                <div className="pt-6 text-center">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group relative px-12 py-4 rounded-full border border-stone-800 bg-stone-950 hover:bg-[#d4af37] text-white hover:text-black hover:border-[#d4af37] transition-all duration-700 text-xs tracking-[0.4em] uppercase font-display select-none disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? 'SECURED INGEST...' : 'BOOK PROJECT'}
                      <Calendar className="w-4 h-4 text-[#d4af37] group-hover:text-black transition-colors" />
                    </span>
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Animation Panel */
              <motion.div
                key="submit-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                className="bg-stone-950/80 border border-stone-850 p-12 rounded-xl text-center flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto backdrop-blur-xl outline outline-offset-4 outline-[#d4af37]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-[#d4af37]/10 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37]"
                >
                  <Check className="w-8 h-8 stroke-[3px]" />
                </motion.div>

                <div className="space-y-2">
                  <span className="text-[#d4af37] font-display text-[9px] tracking-[0.5em] uppercase font-bold">
                    TRANSMISSION SECURED
                  </span>
                  <h3 className="font-serif text-3xl text-white font-light tracking-widest uppercase">
                    Our Curators Await
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-sans max-w-md mx-auto leading-relaxed tracking-wide font-light">
                    Your artistic vision has been transmitted directly into our legacy vaults. We will contact you on your personal channel within 24 standard hours.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[10px] tracking-[0.3em] font-display text-[#d4af37] hover:text-white uppercase border-b border-[#d4af37]/20 hover:border-white transition-colors duration-500 pb-1"
                  >
                    SEND ANOTHER VISION
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Main Clean Footer Section */}
      <section className="bg-black py-12 px-6 sm:px-12 border-t border-stone-900/50 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          {/* Logo Name */}
          <div className="space-y-1">
            <span className="font-serif tracking-[0.35em] text-white font-light text-xl block uppercase">
              BLACKFAME <span className="text-[#d4af37] italic font-normal">STUDIOS</span>
            </span>
            <span className="font-display text-[8px] tracking-[0.4em] text-stone-600 block uppercase">
              Stories That Live Beyond Time
            </span>
          </div>

          {/* Social icons */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-500 hover:text-[#d4af37] transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-500 hover:text-[#d4af37] transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-stone-500 hover:text-[#d4af37] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-[10px] tracking-widest text-stone-600 font-display">
            &copy; {new Date().getFullYear()} BLACKFAME STUDIOS. ALL RIGHTS RESERVED.
          </div>

        </div>
      </section>
    </footer>
  );
}
