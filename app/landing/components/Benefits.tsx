'use client';

import React from 'react';
import { BENEFITS_LIST } from '../data/constants';

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="benefits-header">
          {/* <span className="text-xs font-semibold tracking-widest text-[#0F766E] uppercase bg-teal-50 px-3 py-1 rounded-full">
            Somatic & Mental Transformation
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-indigo font-normal">
            Life-Changing Physical and Emotional Benefits
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
            Regular Pranic Healing helps clear heavy stress scripts, unlocking massive internal reserves of
            stamina and emotional stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_LIST.map((b, idx) => {
            const IconComp = b.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-ivory/50 border border-[#1E1B4B]/5 hover:bg-white hover:shadow-md transition-all duration-300 relative group"
              >
                {/* <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-secondary-purple mb-5 group-hover:bg-gold/20 transition-colors">
                  <IconComp className="w-5 h-5" />
                </div> */}
                <h3 className="font-serif font-bold text-lg text-primary-indigo mb-2">{b.title}</h3>
                <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
