'use client';

import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { handleScrollToId } from '../utils/scroll';

export const Header: React.FC = () => {
  return (
    <>
      {/* GLOBAL HEADER BANNER: Disclaimer focus & integrity */}
      <div
        id="top-disclaimer-bar"
        className="bg-primary-indigo text-slate-200 py-2.5 px-4 text-center text-xs tracking-wide border-b border-white/10 z-50 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="inline-flex items-center text-gold gap-1 px-1.5 py-0.5 rounded bg-white/5 font-semibold text-[10px] uppercase tracking-wider">
            Medical Disclaimer
          </span>
          <p className="inline text-slate-200 max-w-4xl text-center sm:text-left leading-relaxed">
            Pranic Healing is a complementary wellness practice and is not intended to
            replace professional medical diagnosis or treatment.
          </p>
        </div>
      </div>

      {/* PREMIUM HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-primary-indigo/5 shadow-sm transitioning-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleScrollToId('top')}
          >
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-accent-teal via-secondary-purple to-gold flex items-center justify-center shadow-lg p-[1.5px]">
              <div className="w-full h-full bg-ivory rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent-teal" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-wider text-primary-indigo">
                PRANA INSTITUTE
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#5B21B6] font-medium">
                Professional Energetics
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleScrollToId('what-is-pranic')}
              className="text-sm font-medium text-slate-600 hover:text-primary-indigo transition-colors cursor-pointer"
            >
              What Is It
            </button>
            <button
              onClick={() => handleScrollToId('principles')}
              className="text-sm font-medium text-slate-600 hover:text-primary-indigo transition-colors cursor-pointer"
            >
              Core Principles
            </button>
            <button
              onClick={() => handleScrollToId('curriculum')}
              className="text-sm font-medium text-slate-600 hover:text-primary-indigo transition-colors cursor-pointer"
            >
              The Curriculum
            </button>
            <button
              onClick={() => handleScrollToId('choa-kok-sui')}
              className="text-sm font-medium text-slate-600 hover:text-primary-indigo transition-colors cursor-pointer"
            >
              Grand Master
            </button>
            <button
              onClick={() => handleScrollToId('reading')}
              className="text-sm font-medium text-slate-600 hover:text-primary-indigo transition-colors cursor-pointer"
            >
              Required Books
            </button>
            <button
              onClick={() => handleScrollToId('faq')}
              className="text-sm font-medium text-slate-600 hover:text-primary-indigo transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Golden CTA Button Header */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScrollToId('registration-portal')}
              className="px-5 py-2.5 rounded-full bg-primary-indigo text-white font-medium text-sm hover:bg-[#5B21B6] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-white/10 flex items-center gap-1.5 cursor-pointer"
              id="header-cta-button"
            >
              <span>Join Workshop</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
