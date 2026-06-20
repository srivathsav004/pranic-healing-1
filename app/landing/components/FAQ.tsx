'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/constants';

export const FAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="faq-title">
          {/* <span className="text-xs font-semibold tracking-widest text-accent-teal uppercase bg-teal-50 px-3 py-1 rounded-full">
            Common Inquiries
          </span> */}
          <h2 className="text-3xl md:text-4xl font-serif text-primary-indigo font-normal">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-500 font-light text-xs md:text-sm">
            Clear up any doubts about the curriculum, international accreditations, and medical alignments.
          </p>
        </div>

        <div className="space-y-4" id="faq-accordion-rows">
          {FAQS.map((faq, index) => {
            const isExpanded = expandedFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 bg-slate-50/50 hover:bg-white"
              >
                <button
                  onClick={() => setExpandedFaq(isExpanded ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-semibold text-slate-800 text-sm md:text-base pr-4">{faq.q}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-6 py-4 border-t border-slate-200 bg-white">
                    <p className="text-slate-600 font-light text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
