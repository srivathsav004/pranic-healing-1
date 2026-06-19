'use client';

import React from 'react';
import { Sparkles, Info, Globe } from 'lucide-react';
import { handleScrollToId } from '../utils/scroll';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-white/5 text-[#FAF8F3] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand details col */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#10B981] via-[#5B21B6] to-gold flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-accent-teal" />
                </div>
              </div>
              <span className="font-serif font-bold text-lg tracking-wider text-[#FAF8F3]">
                PRANA INSTITUTE
              </span>
            </div>
            <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Dedicated to demystifying the ancient science of vitality and systemic healing through the strict
              manuals of Grand Master Choa Kok Sui.
            </p>
            <div className="text-xs text-gold/80 font-mono">
              <span>© {currentYear} Prana Institute of Energetic Medicine. All Rights Reserved.</span>
            </div>
          </div>

          {/* Menu Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-bold">
              Workshop Study
            </h4>
            <ul className="text-xs md:text-sm text-slate-400 space-y-2.5 font-light">
              <li>
                <button
                  onClick={() => handleScrollToId('what-is-pranic')}
                  className="hover:text-slate-200 transition-colors"
                >
                  What is Pranic Healing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToId('curriculum')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Curriculum Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToId('reading')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Required Reading
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToId('registration-portal')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Register Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase font-semibold">
              Sanctuary Admissions
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Admissions desk open Monday–Friday, 9:00 AM – 5:00 PM EST. Contact us at{' '}
              <span className="text-slate-200">admissions@pranainstitute.org</span> or call our campus registrar.
            </p>

            {/* Micro-badge */}
            <div className="inline-flex gap-2 items-center text-[10px] font-mono tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded text-slate-400">
              <Globe className="w-3.5 h-3.5 text-accent-teal" />
              <span>GLOBALLY ACCREDITED IIS CODE</span>
            </div>
          </div>
        </div>

        {/* CRITICAL STRENGTHENED FOOTER TECHNICAL DISCLAIMER BANNER */}
        <div className="border-t border-white/10 pt-10 text-xs md:text-sm text-slate-500 font-light space-y-3 leading-relaxed">
          <h5 className="font-semibold text-slate-300 flex items-center gap-1.5 font-serif uppercase tracking-wider text-xs">
            <Info className="w-4 h-4 text-gold shrink-0" /> Important Legal Declaration & Disclaimer
          </h5>
          <p>
            Pranic Healing acts strictly as a complementary wellness support system designed to assist the physical
            organism in accelerating natural healing reactions. It does NOT claim to cure diseases, replace
            high-quality orthodox medicine, or bypass licensed physicians of any category.
          </p>
          <p>
            Certified Pranic Healers are not medical doctors, surgeons, or clinical psychiatrists unless they have
            external, separately accredited physical medical qualifications. In case of serious physical illness,
            emergency, psychiatric trauma, or persistent health discomfort, always prioritize standard professional
            medical diagnosis and immediate hospital consultation.
          </p>
        </div>
      </div>
    </footer>
  );
};
