'use client';

import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { handleScrollToId } from '../utils/scroll';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-20 md:py-28 lg:py-36 bg-ivory overflow-hidden">
      {/* Soft glowing auras in background */}
      <div className="absolute top-10 left-1/4 w-[35rem] h-[35rem] rounded-full ambient-aura-indigo -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] rounded-full ambient-aura-teal pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[25rem] h-[25rem] rounded-full ambient-aura-gold -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Text Copy */}
          <div className="lg:col-span-7 space-y-8" id="hero-headlines">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 shadow-sm border border-primary-indigo/5 backdrop-blur">
              <Sparkles className="w-4 h-4 text-gold shrink-0" />
              <span className="text-xs uppercase tracking-widest text-[#1E1B4B] font-semibold">
                Internationally Accredited Professional Training
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary-indigo font-normal leading-tight tracking-tight">
              Discover the <span className="font-serif italic text-secondary-purple">Science</span> and{' '}
              <span className="font-serif italic text-accent-teal">Art</span> of Pranic Healing
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              Learn to understand, balance, and strengthen your energy system through a structured,
              globally recognized two-day curriculum taught by expert certified mentors.
            </p>

            {/* Core features bullet row in Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center border border-teal-200 mt-1">
                  <Check className="w-3.5 h-3.5 text-accent-teal shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Non-Touch Energy Healing</h4>
                  <p className="text-xs text-slate-600">No physical contact needed.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200 mt-1">
                  <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Scientifically Structured</h4>
                  <p className="text-xs text-slate-600">Step-by-step mechanical protocols.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 shrink-0" id="hero-button-group">
              <button
                onClick={() => handleScrollToId('registration-portal')}
                className="px-8 py-4 rounded-full bg-primary-indigo text-white font-medium text-base hover:bg-[#5B21B6] hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center cursor-pointer flex items-center justify-center gap-2 group border border-white/10"
              >
                <span>Join Upcoming Workshop</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScrollToId('what-is-pranic')}
                className="px-8 py-4 rounded-full bg-white text-slate-700 font-medium text-base hover:text-primary-indigo hover:shadow-md transition-all duration-300 text-center cursor-pointer border border-[#1E1B4B]/10 hover:border-[#1E1B4B]/20"
              >
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-3 pt-4 text-xs text-slate-500">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Next workshop begins: <span className="font-semibold text-slate-700">July 11–12, 2026</span> - In Santa Monica &
                NYC
              </span>
            </div>
          </div>

          {/* Hero Visual: Elegant silhouette surrounded by subtle energy grid fields */}
          <div className="lg:col-span-5 flex justify-center relative cursor-default" id="hero-visual-container">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-visible flex items-center justify-center">
              {/* Outer Breathing rings */}
              <motion.div
                className="absolute w-[110%] h-[110%] rounded-full border border-[#0F766E]/10"
                animate={{ scale: [1, 1.05, 1], rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-[95%] h-[95%] rounded-full border border-[#D4AF37]/15"
                animate={{ scale: [1, 1.08, 1], rotate: -360 }}
                transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
              />

              {/* Aura glowing background circle */}
              <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-accent-teal/10 via-[#5B21B6]/15 to-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />

              {/* Main Vector SVG depicting pristine energetic flow (Prana field) */}
              <svg viewBox="0 0 400 400" className="w-full h-full relative z-20 overflow-visible select-none drop-shadow-2xl">
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="url(#goldTealGrad)"
                  strokeWidth="1"
                  strokeDasharray="3, 3"
                  className="opacity-40"
                />

                <circle cx="200" cy="200" r="115" fill="none" stroke="#0F766E" strokeWidth="0.5" className="opacity-20" />
                <circle cx="200" cy="200" r="90" fill="none" stroke="#FAF8F3" strokeWidth="3" className="opacity-30" />

                <motion.circle
                  cx="200"
                  cy="120"
                  r="30"
                  fill="none"
                  stroke="url(#purpleCore)"
                  strokeWidth="1.5"
                  className="opacity-40"
                  animate={{ scale: [0.95, 1.12, 0.95], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                />

                <motion.circle
                  cx="200"
                  cy="230"
                  r="65"
                  fill="none"
                  stroke="url(#emeraldCore)"
                  strokeWidth="1"
                  className="opacity-30"
                  animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                />

                {[
                  { cx: 120, cy: 120, delay: 0 },
                  { cx: 280, cy: 120, delay: 1 },
                  { cx: 100, cy: 220, delay: 2 },
                  { cx: 300, cy: 220, delay: 1.5 },
                  { cx: 200, cy: 50, delay: 0.5 },
                  { cx: 200, cy: 350, delay: 2.5 },
                ].map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={p.cx}
                    cy={p.cy}
                    r="4"
                    fill="#D4AF37"
                    animate={{ y: [0, -15, 0], opacity: [0.2, 0.9, 0.2], scale: [0.8, 1.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: 3.5, delay: p.delay, ease: 'easeInOut' }}
                  />
                ))}

                <path
                  d="M 200 40 L 200 360"
                  stroke="url(#meridianGrad)"
                  strokeWidth="1.5"
                  className="opacity-50"
                  strokeDasharray="1, 2"
                />

                <g id="human-silhouette" className="opacity-95">
                  <circle cx="200" cy="100" r="16" fill="#1E1B4B" />
                  <circle cx="200" cy="84" r="5" fill="#D4AF37" className="animate-pulse" />
                  <circle cx="200" cy="84" r="9" fill="none" stroke="#D4AF37" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: '3s' }} />

                  <circle cx="200" cy="120" r="3.5" fill="#10B981" />
                  <path d="M 200 116 Q 200 140 200 160" stroke="#1E1B4B" strokeWidth="8" strokeLinecap="round" />

                  <path d="M 200 160 Q 200 210 200 240" stroke="#1E1B4B" strokeWidth="22" strokeLinecap="round" />

                  <circle cx="200" cy="165" r="4.5" fill="#D4AF37" />

                  <circle cx="200" cy="195" r="4" fill="#0F766E" />

                  <path d="M 189 135 Q 150 160 145 200 Q 140 240 160 252" fill="none" stroke="#1E1B4B" strokeWidth="7" strokeLinecap="round" />
                  <path d="M 211 135 Q 250 160 255 200 Q 260 240 240 252" fill="none" stroke="#1E1B4B" strokeWidth="7" strokeLinecap="round" />

                  <path d="M 160 252 Q 130 260 115 280 Q 110 295 140 295 Q 200 295 200 280" fill="none" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />
                  <path d="M 240 252 Q 270 260 285 280 Q 290 295 260 295 Q 200 295 200 280" fill="none" stroke="#1E1B4B" strokeWidth="12" strokeLinecap="round" />

                  <circle cx="200" cy="285" r="4.5" fill="#5B21B6" />
                </g>

                <defs>
                  <linearGradient id="goldTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#0F766E" />
                  </linearGradient>
                  <radialGradient id="purpleCore">
                    <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#5B21B6" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="emeraldCore">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="meridianGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#5B21B6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#0F766E" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Fine visual tag below the graphics */}
              <div className="absolute bottom-1 bg-white/95 px-4 py-1.5 rounded-full border border-primary-indigo/5 text-[11px] font-mono tracking-widest text-slate-500 shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold inline-block" />
                <span>CRITICAL ENERGY ALIGNMENT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
