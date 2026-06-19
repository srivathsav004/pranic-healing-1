'use client';

import React from 'react';
import { Bookmark, ChevronRight } from 'lucide-react';
import { ESSENTIAL_BOOKS } from '../data/constants';

export const ReadingList: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory relative" id="reading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="reading-title">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase bg-amber-50 px-3 py-1 rounded-full">
            Syllabus Textbooks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-indigo font-normal">
            Seminal Books for Your Wellness Library
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
            These reference guides are included in classroom studies and utilized by certified practitioners
            globally for exact formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ESSENTIAL_BOOKS.map((book, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-white px-8 py-10 rounded-2xl shadow-sm border border-slate-150 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${book.color}`}
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gold uppercase tracking-widest">
                    {book.badge}
                  </span>
                  <Bookmark className="w-4.5 h-4.5 text-gold shrink-0" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg md:text-xl font-light text-primary-indigo">
                    {book.title}
                  </h3>
                  <p className="text-xs text-slate-500 uppercase font-mono tracking-wider font-semibold">
                    {book.originalTitle}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed">
                  {book.subtitle}
                </p>

                <div className="p-4 bg-slate-50/50 rounded-xl relative">
                  <p className="text-xs md:text-sm font-serif italic text-slate-700 leading-relaxed">
                    {book.quote}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                    Key Chapters:
                  </p>
                  {book.chapters.map((chapter, chIdx) => (
                    <div key={chIdx} className="flex items-start gap-2">
                      <span className="text-gold text-sm">•</span>
                      <span className="text-xs text-slate-600 font-light">{chapter}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 mt-6 font-mono font-medium">
                <span>GMKS PUBLISHING</span>
                <span className="text-primary-indigo hover:text-[#5B21B6] flex items-center gap-1 cursor-pointer">
                  Book details <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
