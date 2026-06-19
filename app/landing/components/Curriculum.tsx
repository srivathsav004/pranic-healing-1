'use client';

import React from 'react';
import { Calendar, BookOpen } from 'lucide-react';
import { WORKSHOP_CURRICULUM } from '../data/constants';
import { handleScrollToId } from '../utils/scroll';

export const Curriculum: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative" id="curriculum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="curriculum-header">
          <span className="text-xs font-semibold tracking-widest text-[#5B21B6] uppercase bg-violet-50 px-3 py-1 rounded-full">
            Syllabus Breakdown
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-indigo font-normal">
            Two Days of Mastery: Learn Step-by-Step
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
            The level-1 training program is a completely hands-on, highly interactive weekend. You will leave
            equipped to treat major physiological blocks safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {WORKSHOP_CURRICULUM.map((dayPlan, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-3xl bg-ivory border border-primary-indigo/5 shadow-sm space-y-6 relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Visual day ribbon */}
              <div className="flex justify-between items-center pb-4 border-b border-[#1E1B4B]/10">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-light text-primary-indigo">{dayPlan.day}</h3>
                  <p className="text-xs text-slate-500 font-light">{dayPlan.time}</p>
                </div>
                <span className="text-xs font-semibold text-[#0F766E] px-3 py-1.5 rounded-full bg-white border border-[#0F766E]/10 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent-teal inline-block" /> Full Day
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-800 italic">{dayPlan.title}</p>

              {/* Day topics vertical timeline */}
              <div className="space-y-6 pt-2">
                {dayPlan.topics.map((t, tIdx) => (
                  <div key={tIdx} className="relative">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-gold relative z-10" />
                        {tIdx < dayPlan.topics.length - 1 && (
                          <div className="w-0.5 h-12 bg-slate-200 mt-3" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h4 className="font-semibold text-slate-800 text-sm">{t.title}</h4>
                        <p className="text-xs text-slate-500 font-light leading-relaxed mt-1">{t.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#1E1B4B]/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>LEVEL 1 SYLLABUS: THEORY & PRACTICALS</span>
                <span>16 TOTAL CREDITS</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => handleScrollToId('registration-portal')}
            className="px-8 py-3.5 rounded-full bg-primary-indigo text-white font-medium text-sm hover:bg-[#5B21B6] transition-all duration-300 inline-flex items-center gap-2 cursor-pointer border border-white/10"
          >
            <span>Download Complete Syllabus PDF</span>
            <BookOpen className="w-4 h-4 text-gold" />
          </button>
        </div>
      </div>
    </section>
  );
};
