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
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/85 shadow-sm border border-primary-indigo/5 backdrop-blur">
              <Sparkles className="w-4 h-4 text-gold shrink-0" />
              <span className="text-xs uppercase tracking-widest text-[#1E1B4B] font-semibold">
                Internationally Accredited Professional Training
              </span>
            </div> */}

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
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[95%] h-[95%] rounded-full border border-[#D4AF37]/15" 
                  animate={{ scale: [1, 1.08, 1], rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                />
                
                {/* Aura glowing background circle */}
                <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-accent-teal/10 via-[#5B21B6]/15 to-[#D4AF37]/10 rounded-full blur-3xl animate-pulse" />

                {/* Main Vector SVG depicting pristine energetic flow (Prana field) */}
                <svg viewBox="0 0 400 400" className="w-full h-full relative z-20 overflow-visible select-none drop-shadow-xl">
                  <defs>
                    <linearGradient id="goldTealGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#1E1B4B" />
                    </linearGradient>
                    <linearGradient id="centralPranaGlow" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#10B981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="meridianGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#5B21B6" />
                    </linearGradient>
                  </defs>

                  {/* Outer delicate coordinate rings (Modern minimal instrumentation feel) */}
                  <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(30, 27, 75, 0.04)" strokeWidth="1" />
                  <circle cx="200" cy="200" r="140" fill="none" stroke="url(#goldTealGrad)" strokeWidth="0.75" strokeDasharray="4, 6" className="opacity-40" />
                  <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(15, 118, 110, 0.08)" strokeWidth="1" />
                  
                  {/* Fine crosshairs for that balanced measurement/alignment feel */}
                  <line x1="200" y1="30" x2="200" y2="370" stroke="rgba(30, 27, 75, 0.03)" strokeWidth="1" strokeDasharray="2, 4" />
                  <line x1="30" y1="200" x2="370" y2="200" stroke="rgba(30, 27, 75, 0.03)" strokeWidth="1" strokeDasharray="2, 4" />

                  {/* Sacred Geometry: Masterfully aligned intersecting golden & teal vector circles */}
                  {/* Twelve-axis precision layout */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
                    const radians = (angle * Math.PI) / 180;
                    const r = 85; 
                    const cx = 200 + r * Math.cos(radians);
                    const cy = 200 + r * Math.sin(radians);
                    return (
                      <circle
                        key={angle}
                        cx={cx}
                        cy={cy}
                        r="75"
                        fill="none"
                        stroke={angle % 60 === 0 ? "#D4AF37" : "#0F766E"}
                        strokeWidth="0.5"
                        className="opacity-[0.14]"
                      />
                    );
                  })}

                  {/* Central glowing energy core (Prana reservoir) */}
                  <circle cx="200" cy="200" r="48" fill="url(#centralPranaGlow)" className="opacity-90" />
                  <circle cx="200" cy="200" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.75" />
                  <circle cx="200" cy="200" r="12" fill="none" stroke="#10B981" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="4" fill="#1E1B4B" />

                  {/* Elegant central vertical alignment column */}
                  <line x1="200" y1="70" x2="200" y2="330" stroke="url(#meridianGrad)" strokeWidth="1.25" className="opacity-60" />

                  {/* Pulsing focal nodes on the central column */}
                  <circle cx="200" cy="110" r="4.5" fill="#D4AF37" className="animate-pulse" />
                  <circle cx="200" cy="110" r="9" fill="none" stroke="#D4AF37" strokeWidth="0.5" className="animate-ping" style={{ animationDuration: '4s' }} />
                  
                  <circle cx="200" cy="155" r="3.5" fill="#10B981" />
                  <circle cx="200" cy="245" r="3.5" fill="#5B21B6" />
                  <circle cx="200" cy="290" r="4.5" fill="#0F766E" />

                  {/* Floating prana particles traveling upwards */}
                  {[
                    { cx: 110, cy: 140, r: 3, delay: 0, speed: 4 },
                    { cx: 290, cy: 140, r: 3, delay: 1, speed: 5 },
                    { cx: 130, cy: 260, r: 3.5, delay: 2, speed: 6 },
                    { cx: 270, cy: 260, r: 3.5, delay: 1.5, speed: 4.5 },
                    { cx: 160, cy: 80, r: 2.5, delay: 0.5, speed: 3.5 },
                    { cx: 240, cy: 320, r: 2.5, delay: 2.5, speed: 5.5 }
                  ].map((p, i) => (
                    <motion.circle
                      key={i}
                      cx={p.cx}
                      cy={p.cy}
                      r={p.r}
                      fill={i % 2 === 0 ? "#D4AF37" : "#10B981"}
                      animate={{ 
                        y: [-25, 25, -25], 
                        opacity: [0.15, 0.75, 0.15],
                        scale: [0.8, 1.25, 0.8] 
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: p.speed, 
                        delay: p.delay, 
                        ease: "easeInOut" 
                      }}
                    />
                  ))}
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
