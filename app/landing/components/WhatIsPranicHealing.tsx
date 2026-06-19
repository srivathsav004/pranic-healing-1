'use client';

import React from 'react';
import { Award } from 'lucide-react';

export const WhatIsPranicHealing: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-primary-indigo/5 relative" id="what-is-pranic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="what-is-title-block">
          <span className="text-xs font-semibold tracking-widest text-secondary-purple uppercase bg-violet-50 px-3 py-1 rounded-full">
            Systematic Energy Medicine
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-indigo font-normal">
            A Highly Developed, Tested Method of Healing
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-600 font-light text-base md:text-lg leading-relaxed pt-2">
            According to Pranic Healing teachings, physical and emotional discomforts often manifest in the
            energy body before ever impacting the tangible cellular structure. By cleansing first, we enable profound biological restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side text detail */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-slate-800 font-light leading-snug">
              Accelerating healing through the science of{' '}
              <span className="text-[#0F766E] font-medium font-serif italic">life force (Prana)</span>.
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed font-light text-sm md:text-base">
              <p>
                Pranic Healing is a modern, non-touch energy medicine modality researched, systemized, and
                designed by <span className="font-semibold text-slate-800">Grand Master Choa Kok Sui</span>. It
                represents a highly systematic synthesis of ancient medical observations, energetic anatomy, and
                modern quantum insights.
              </p>
              <p>
                Similar to how sunlight and clean air trigger standard cellular growth, our bodies possess
                specialized energy nodes (chakras) that absorb vital prana to fuel our organs, neurological
                systems, and mental resilience.
              </p>
              <p>
                When these chakras become congested with stress, emotional residue, or toxic substances, physical
                health suffers. Pranic Healing provides structured, repeatable manuals to diagnose these energetic
                abnormalities and safely rectify them without ever making physical contact.
              </p>
            </div>

            {/* Luxury feature item list */}
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-ivory/50 border border-primary-indigo/5">
                <h4 className="text-xl font-bold font-serif text-[#0F766E]">100%</h4>
                <p className="text-xs text-slate-500 font-medium">Non-Touch & Drugless</p>
              </div>
              <div className="p-4 rounded-xl bg-ivory/50 border border-primary-indigo/5">
                <h4 className="text-xl font-bold font-serif text-[#5B21B6]">120+</h4>
                <p className="text-xs text-slate-500 font-medium">Countries Practicing</p>
              </div>
            </div>
          </div>

          {/* Right side interactive graphic details */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden glassmorphism p-8 md:p-10 border border-primary-indigo/5 relative z-10 shadow-xl space-y-6">
              <h4 className="font-serif text-lg font-normal text-primary-indigo border-b border-[#1E1B4B]/10 pb-3 flex items-center justify-between">
                <span>How Energy Maps To Biology</span>
                <Award className="w-5 h-5 text-gold" />
              </h4>

              <div className="space-y-4">
                {[
                  {
                    label: 'The Vital Energy Field',
                    desc: 'An outer shield extending 4 to 8 inches from healthy bone structures containing health rays.',
                  },
                  {
                    label: 'The 11 Major Chakras',
                    desc: 'Specific, dedicated power gateways controlling major biological systems (e.g. cardiac, digestive, endocrine glands).',
                  },
                  {
                    label: 'Pranic Meridians',
                    desc: 'Invisible micro-conduits (nadis) carrying fresh life-breath to every nerve group and neurological center.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="pb-4 border-b border-[#1E1B4B]/5 last:border-0 last:pb-0">
                    <h5 className="font-semibold text-slate-800 text-sm mb-1">{item.label}</h5>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#1E1B4B]/10 pt-4 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>CURRICULUM: BASIC & ADVANCED</span>
                <span className="text-[#0F766E] font-semibold">VIEW PROTOCOLS →</span>
              </div>
            </div>

            {/* Overlapping back accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-[#1E1B4B]/5 to-[#5B21B6]/10 rounded-2xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
