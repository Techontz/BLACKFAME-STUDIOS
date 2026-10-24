import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Check } from 'lucide-react';
import {
  CONTACT_EMAIL,
  CONTACT_REQUEST_EVENT,
  type ContactRequest,
} from '../lib/navigation';

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  projectType: 'Photography',
  message: '',
  company: '', // honeypot, hidden from real visitors
};

// Opens the visitor's email app with the enquiry pre-filled.
function openMailDraft(form: typeof emptyForm) {
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || '—'}`,
    `Project type: ${form.projectType}`,
    '',
    form.message,
  ].join('\n');

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `New ${form.projectType} enquiry — ${form.name}`
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactFooter() {
  const [formData, setFormData] = useState(emptyForm);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<'sent' | 'mail-app' | null>(null);
  const [error, setError] = useState('');

  // Pre-fill the form when another section asks to start a conversation
  useEffect(() => {
    const onRequest = (e: Event) => {
      const { projectType, message } = (e as CustomEvent<ContactRequest>).detail;
      setResult(null);
      setFormData((prev) => ({
        ...prev,
        projectType: projectType ?? prev.projectType,
        message: message ?? prev.message,
      }));
    };

    window.addEventListener(CONTACT_REQUEST_EVENT, onRequest);
    return () => window.removeEventListener(CONTACT_REQUEST_EVENT, onRequest);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResult('sent');
        setFormData(emptyForm);
      } else if (response.status === 400) {
        const data = await response.json().catch(() => ({}));
        setError(data.error || 'Please check your details and try again.');
      } else {
        // Email service unavailable: hand off to the visitor's mail app
        openMailDraft(formData);
        setResult('mail-app');
      }
    } catch {
      openMailDraft(formData);
      setResult('mail-app');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <footer className="relative bg-[#101010] w-full border-t border-stone-900" id="contact">
      {/* Contact Form Section */}
      <section className="relative min-h-screen py-32 px-6 md:px-12 flex items-center justify-center overflow-hidden">

        {/* Luxury Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e] via-[#101010] to-[#0d0d0d]" />
        <div className="max-w-4xl mx-auto w-full space-y-14 relative z-10">
          
          {/* Header Block */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 text-[#d4af37] text-[10px] tracking-[0.4em] uppercase">
              <Sparkles className="w-3 h-3" />
              Start Your Project
            </span>
          </motion.div>

          <h2 className="font-serif text-5xl sm:text-7xl lg:text-[110px] text-white font-light leading-none tracking-[-0.05em]">
            Let's Build
            <br />
            <span className="text-[#d4af37]">
              Something Extraordinary
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-stone-400 text-base sm:text-lg leading-relaxed">
            From cinematic documentaries and brand storytelling to commercial productions,
            every project begins with a conversation.
          </p>
        </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="
                  relative
                  overflow-hidden
                  space-y-8
                  bg-white/[0.02]
                  p-8
                  sm:p-14
                  rounded-lg
                  border border-white/[0.06]
                  backdrop-blur-xl
                  "
                >
                {/* Honeypot: hidden from people, filled in by spam bots */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-px h-px opacity-0"
                />

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
                      className="w-full bg-white/[0.03]
                      border border-white/10
                      rounded-xl
                      px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide"
                      autoComplete="name"
                      maxLength={120}
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
                      className="w-full bg-white/[0.03]
                      border border-white/10
                      rounded-xl
                      px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide"
                      autoComplete="email"
                      maxLength={200}
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
                      className="w-full bg-white/[0.03]
                      border border-white/10
                      rounded-xl
                      px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide"
                      autoComplete="tel"
                      maxLength={40}
                      placeholder="e.g. +255 712 345 678"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-3">
                    <label
                      htmlFor="projectType"
                      className="text-[10px] tracking-[0.35em] font-display text-[#d4af37] uppercase font-semibold"
                    >
                      PROJECT TYPE
                    </label>

                    <div className="relative group">
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="
                          w-full
                          appearance-none
                          rounded-md
                          bg-white/[0.025]
                          border
                          border-white/10
                          px-5
                          py-4
                          pr-14
                          text-sm
                          text-white
                          backdrop-blur-xl
                          focus:outline-none
                          focus:border-[#d4af37]
                          focus:ring-2
                          focus:ring-[#d4af37]/20
                          transition-all
                          duration-300
                          cursor-pointer
                          hover:border-[#d4af37]/40
                        "
                      >
                        <option className="bg-black text-white" value="Photography">
                          Photography Production
                        </option>

                        <option className="bg-black text-white" value="Films">
                          Motion Films & Script
                        </option>

                        <option className="bg-black text-white" value="Documentaries">
                          Documentary Production
                        </option>

                        <option className="bg-black text-white" value="Commercial">
                          Commercial Campaign
                        </option>

                        <option className="bg-black text-white" value="Podcast">
                          Podcast Production
                        </option>

                        <option className="bg-black text-white" value="Brand">
                          Brand Storytelling
                        </option>

                        <option className="bg-black text-white" value="Event">
                          Event Coverage
                        </option>

                        <option className="bg-black text-white" value="Other">
                          Other Creative Project
                        </option>
                      </select>

                      {/* Custom Arrow */}
                      <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                        <svg
                          className="w-4 h-4 text-[#d4af37] transition-transform duration-300 group-hover:translate-y-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>

                      {/* Premium Glow */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>

                    <p className="text-[11px] text-stone-500 tracking-wide">
                    Select the service that best matches your creative vision.
                  </p>
                  </div>

                  </div> {/* END OF grid grid-cols-1 sm:grid-cols-2 gap-8 */}

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
                    className="w-full bg-white/[0.03]
                    border border-white/10
                    rounded-xl
                    px-4 py-3.5 text-sm text-stone-200 focus:outline-none focus:border-[#d4af37] transition-all duration-300 font-sans tracking-wide resize-none"
                    maxLength={5000}
                    placeholder="Describe the mood, target medium, and visual message you want to cement forever..."
                  />
                </div>

                {error && (
                  <p role="alert" className="text-center text-sm text-red-400">
                    {error}
                  </p>
                )}

                {/* Button Action */}
                <div className="pt-6 text-center">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="group relative px-12 py-4 rounded-full border border-stone-800 bg-stone-950 hover:bg-[#d4af37] text-white hover:text-black hover:border-[#d4af37] transition-all duration-700 text-xs tracking-[0.4em] uppercase font-display select-none disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? 'SENDING...' : 'BOOK PROJECT'}
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
                className="bg-stone-950/80 border border-stone-800 p-12 rounded-xl text-center flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto backdrop-blur-xl outline outline-offset-4 outline-[#d4af37]/20"
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
                    {result === 'sent' ? 'MESSAGE RECEIVED' : 'ALMOST THERE'}
                  </span>
                  <h3 className="font-serif text-3xl text-white font-light tracking-widest uppercase">
                    {result === 'sent' ? 'Thank You' : 'Send From Your Email'}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-sans max-w-md mx-auto leading-relaxed tracking-wide font-light">
                    {result === 'sent' ? (
                      'Your enquiry is with our team. We will get back to you within 24 hours.'
                    ) : (
                      <>
                        We've opened your email app with your message ready to go — just press send.
                        If nothing opened, email us directly at{' '}
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#d4af37] underline underline-offset-4">
                          {CONTACT_EMAIL}
                        </a>.
                      </>
                    )}
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setResult(null)}
                    className="text-[10px] tracking-[0.3em] font-display text-[#d4af37] hover:text-white uppercase border-b border-[#d4af37]/20 hover:border-white transition-colors duration-500 pb-1"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      <section className="bg-black border-t border-stone-900 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}
          <div>

            <span className="text-[10px] tracking-[0.5em] text-stone-500 uppercase block mb-8">
              Get In Touch
            </span>
            <h2 className="font-serif leading-none tracking-[-0.05em]">

            <span
              className="
                block
                text-white
                text-5xl
                sm:text-7xl
                lg:text-8xl
                font-light
              "
            >
              Let's
            </span>

            <span
              className="
                block
                italic
                text-[#d4af37]
                text-5xl
                sm:text-7xl
                lg:text-8xl
                font-light
              "
            >
              Create
            </span>

            </h2>

            <p className="
              max-w-lg
              mt-12
              text-stone-400
              leading-[1.9]
              text-lg
              font-serif
            ">
              Looking for a creative partner to bring your story to life?
              Let's create cinematic work that leaves a lasting impression.
            </p>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="
              inline-flex
              items-center
              gap-3
              mt-12
              font-display
              text-[11px]
              tracking-[0.35em]
              uppercase
              text-white
              border-b
              border-stone-800
              pb-4
              hover:text-[#d4af37]
              transition-all
              duration-500
              "
            >
              {CONTACT_EMAIL}
              <span>→</span>
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div>

          <span
            className="
              block
              mb-8
              text-[10px]
              tracking-[0.45em]
              uppercase
              text-stone-600
            "
          >
            FIND US ON
          </span>

          {[
            {
              name: "Instagram",
              username: "@BLACKFAMESTUDIOS",
              link: "https://instagram.com/blackfamestudios",
            },
            {
              name: "TikTok",
              username: "@BLACKFAMESTUDIOS",
              link: "https://tiktok.com/@blackfamestudios",
            },
            {
              name: "X (Twitter)",
              username: "@BLACKFAMESTUDIOS",
              link: "https://twitter.com/blackfamestudios",
            },
            {
              name: "LinkedIn",
              username: "@BLACKFAMESTUDIOS",
              link: "https://www.linkedin.com/company/blackfamestudios",
            },
            {
              name: "YouTube",
              username: "@BLACKFAMESTUDIOS",
              link: "https://youtube.com/@blackfamestudios",
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-7
                transition-all
                duration-500
              "
            >
              <span
                className="
                  font-serif
                  text-[20px]
                  md:text-[24px]
                  font-light
                  text-white
                  leading-none
                  tracking-[-0.02em]
                  transition-all
                  duration-500
                  group-hover:text-[#d4af37]
                "
              >
                {item.name}
              </span>

              <div className="flex items-center gap-8">

                <span
                  className="
                    uppercase
                    text-[8px]
                    tracking-[0.42em]
                    text-stone-500
                    transition-all
                    duration-500
                    group-hover:text-stone-300
                  "
                >
                  {item.username}
                </span>

                <div
                  className="
                    opacity-0
                    translate-x-[-8px]
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:translate-x-0
                  "
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M8 7H17V16" />
                  </svg>
                </div>

              </div>
            </a>
          ))}

          </div>
          </div>
        {/* Bottom Bar */}

        <div className="border-t border-stone-900 mt-24 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <img
          src="/logo.png"
          alt="BlackFame Studios"
          className="
            h-6
            md:h-8
            w-auto
            object-contain
            select-none
          "
        />

          <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600">
            © {new Date().getFullYear()} BLACKFAME STUDIOS. ALL RIGHTS RESERVED.
          </span>

        </div>

      </div>

    </section>
    </footer>
  );
}
