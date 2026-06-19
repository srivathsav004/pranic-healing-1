'use client';

import React from 'react';
import { BookOpen } from 'lucide-react';

export const ModernLife: React.FC = () => {
  return (
    <section className="py-20 bg-ivory border-t border-primary-indigo/5 relative overflow-hidden" id="modern-life">
      {/* Decorative dynamic gold auras */}
      <div className="absolute top-1/2 right-1/4 w-[30rem] h-[30rem] rounded-full ambient-aura-gold pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual element on left (modern office setup overlaid with energy vectors) */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative border border-white/40">
              <div className="bg-gradient-to-br from-primary-indigo to-secondary-purple p-8 md:p-12 text-white relative project-card min-h-[300px] flex flex-col justify-between">
                {/* Line 864 omitted */}
                <div className="absolute top-4 right-4 w-40 h-40 rounded-full ambient-aura-gold mix-blend-screen opacity-60" />

                <div className="space-y-4 relative z-10">
                  <BookOpen className="w-8 h-8 text-gold" />
                  <h3 className="font-serif text-2xl md:text-3xl text-white font-light">
                    Wellness Reference
                  </h3>
                  <p className="text-slate-200 font-light text-sm md:text-base leading-relaxed max-w-sm">
                    Master Choa's works are the gold standard for applied energy therapeutics globally.
                  </p>
                </div>

                <div className="space-y-3 pt-6 relative z-10 border-t border-white/10">
                  <p className="text-xs text-slate-300 font-light">
                    Trusted by physicians, therapists, and wellness practitioners across 120+ countries.
                  </p>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                    Institute for Inner Studies, Manila
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content text block on right */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-widest text-accent-teal uppercase bg-teal-50 px-3 py-1 rounded-full">
              Universal Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-indigo font-normal leading-tight">
              Ancient Wisdom Redefined for the Demands of Today
            </h2>
            <div className="w-16 h-[2px] bg-gold" />

            <div className="space-y-4 text-slate-600 font-light text-sm md:text-base leading-relaxed">
              <p>
                Participants learn that energy is not a magical fairy tale, but a quantifiable physiological
                factor. In our rapid modern society, corporate professionals, public figures, physicians, and
                athletes are exposed to severe psychiatric pressure and psychological stressors daily.
              </p>
              <p>
                Pranic Healing strips away outdated superstition. By approaching stress and exhaustion
                mechanically, practitioners learn to discharge negative heavy currents and replace them with rich,
                vital solar and air prana, achieving deep emotional resilience.
              </p>
            </div>

            {/* Minimalist interactive metric grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#1E1B4B]/5 relative">
                <h4 className="font-serif font-bold text-slate-800 text-sm">Corporate Wellness</h4>
                <p className="text-xs text-slate-500 leading-normal mt-1">
                  Clear anxiety in minutes to maintain executive decision confidence.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#1E1B4B]/5 relative">
                <h4 className="font-serif font-bold text-slate-800 text-sm">Clinical Complement</h4>
                <p className="text-xs text-slate-500 leading-normal mt-1">
                  Academics believe supplementary energy therapy speeds up somatic rest cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
