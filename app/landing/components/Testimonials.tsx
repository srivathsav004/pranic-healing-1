'use client';

import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-ivory border-y border-primary-indigo/5 relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16" id="testimonial-title">
          {/* <span className="text-xs font-semibold tracking-widest text-[#5B21B6] uppercase bg-violet-50 px-3 py-1 rounded-full">
            Globally Verified Practitioner Reviews
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-indigo font-normal">
            Words From Our Accredited Community
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
          <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
            Discover how medical professionals and corporate leaders utilize energy physics in their secular,
            daily practices.
          </p>
        </div>

        {/* Testimonial cards grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm relative flex flex-col justify-between space-y-6">
            <p className="text-slate-600 font-serif italic text-sm md:text-base leading-relaxed">
              &ldquo;As an orthopedic surgeon, I initially approached Pranic Healing with severe academic
              doubt. However, after employing Grand Master Choa&apos;s sweeping protocols on chronic swelling
              post-operation, I noted significant cellular recovery acceleration. It is a remarkable,
              non-contact biological companion therapy.&rdquo;
            </p>

            <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-serif text-slate-700 font-bold border border-gold">
                Dr
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-800 text-sm md:text-base">
                  Dr. Elizabeth Vance, MD
                </h4>
                <p className="text-xs text-slate-500 uppercase font-mono tracking-wider font-semibold">
                  Accredited Surgeon & Medical Consultant
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-100 shadow-sm relative flex flex-col justify-between space-y-6">
            <p className="text-slate-600 font-serif italic text-sm md:text-base leading-relaxed">
              &ldquo;Executive burnout is a chronic plague in modern startups. Taught under the simple chemical
              engineer system of MCKS, I started sweeping my solar plexus chakra before major investment rounds.
              The mental stability and stress resistance were so distinct that we now require all VP managers to
              attend the Level 1 module.&rdquo;
            </p>

            <div className="flex items-center gap-4 border-t border-slate-100 pt-5">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-serif text-slate-700 font-bold border border-gold">
                JR
              </div>
              <div>
                <h4 className="font-serif font-bold text-slate-800 text-sm md:text-base">
                  James Rothschild, Esq.
                </h4>
                <p className="text-xs text-slate-500 uppercase font-mono tracking-wider font-semibold">
                  CEO & Co-Founder, Venture Capital Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
