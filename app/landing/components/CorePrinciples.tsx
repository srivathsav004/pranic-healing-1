'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CORE_PRINCIPLES } from '../data/constants';

export const CorePrinciples: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory relative" id="principles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="principles-title">
          <span className="text-xs font-semibold tracking-widest text-accent-teal uppercase bg-teal-50 px-3 py-1 rounded-full">
            Foundational Science
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-indigo font-normal">
            The Laws That Govern Energetic Restoration
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
            Pranic Healing operates under proven natural laws, making energy medicine predictable, systematic,
            and completely learnable for any human being.
          </p>
        </div>

        {/* Three-column Parallel Cards Grid following Clean Minimalism */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto" id="principles-cards-grid">
          {CORE_PRINCIPLES.map((principle, index) => {
            const IconComp = principle.icon;
            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glassmorphism p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Subtle individual aura background to elevate aesthetics */}
                <div
                  className={`absolute -right-20 -top-20 w-60 h-60 rounded-full ${principle.aura} opacity-70 pointer-events-none group-hover:scale-110 transition-transform duration-500`}
                />

                <div className="space-y-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full ${principle.bgLight} flex items-center justify-center`}>
                    <IconComp className={`w-6 h-6 ${principle.accent}`} />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-light text-primary-indigo mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-xs md:text-sm uppercase tracking-widest font-mono text-slate-500 font-semibold mb-3">
                      {principle.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 font-light text-sm leading-relaxed">{principle.description}</p>
                </div>

                {/* Card footer details */}
                <div className="mt-8 pt-4 border-t border-[#1E1B4B]/5 flex items-center justify-between text-[11px] font-mono text-slate-400 relative z-10">
                  <span>PRINCIPLE {index + 1}</span>
                  <span className={`font-bold uppercase tracking-wider ${principle.accent}`}>
                    {principle.id.replace(/-/g, ' ')}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
