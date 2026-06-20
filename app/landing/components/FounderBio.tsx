'use client';

import React from 'react';
import Image from 'next/image';
import { Award, BookOpen } from 'lucide-react';

import founderImage from '../data/founder.png';

export const FounderBio: React.FC = () => {
  return (
    <section
      className="py-20 md:py-28 bg-white border-y border-primary-indigo/5 relative"
      id="choa-kok-sui"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Bio text */}
          <div className="lg:col-span-7 space-y-6" id="founder-biography">
            <div className="inline-flex items-center gap-1 text-[11px] font-mono tracking-widest text-[#5B21B6] uppercase font-bold">
              <Award className="w-4 h-4 text-gold inline shrink-0" />
              <span>The Visionary Founder</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-primary-indigo font-normal">
              Grand Master Choa Kok Sui
            </h2>

            <h3 className="text-lg font-mono tracking-wider text-slate-500 uppercase -mt-2">
              Chemical Engineer, Spiritual Master, Catalyst of Modern Energetics
            </h3>

            <div className="w-16 h-[2px] bg-gold" />

            <div className="space-y-4 text-slate-600 font-light text-sm md:text-base leading-relaxed">
              <p>
                As an astute chemical engineer, successful businessman, and
                revered spiritual teacher,{' '}
                <span className="font-semibold text-slate-800">
                  Grand Master Choa Kok Sui
                </span>{' '}
                spent more than three decades research testing the exact physics
                of energy healing alongside renowned medical doctors and
                alternative masters.
              </p>

              <p>
                His distinct scientific mindset allowed him to strip energy
                modalities of empty mysticism and complex dogma. What remained
                is <span className="italic font-serif">Pranic Healing</span> — a
                highly direct, non-touch mechanical framework consisting of
                clear instructions that anyone can follow to attain repeatable
                outcomes.
              </p>

              <p>
                He authored over 20 revolutionary textbooks translated into 40+
                languages and established charity groups alongside the
                Institute for Inner Studies globally, ensuring energetic
                techniques are taught on the highest level of moral integrity.
              </p>
            </div>

            {/* Famous Quote from Founder */}
            <div className="p-6 rounded-2xl bg-ivory border-l-4 border-l-gold space-y-2">
              <p className="text-sm font-serif italic text-slate-700 leading-relaxed">
                &ldquo;Pranic Healing is not intended to replace orthodox
                medicine, but rather to complement it. If the ailments are
                severe or persist, please consult a medical doctor
                immediately.&rdquo;
              </p>

              <span className="text-xs uppercase font-mono tracking-widest text-slate-500 block text-right font-semibold">
                — Grand Master Choa Kok Sui
              </span>
            </div>
          </div>

          {/* Founder Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden glassmorphism p-6 border border-primary-indigo/10 shadow-2xl flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-indigo/10 via-transparent to-transparent pointer-events-none" />

              {/* Header */}
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-widest text-slate-400">
                  MCKS LEGACY PLATFORM
                </span>
                <BookOpen className="w-5 h-5 text-gold" />
              </div>

              {/* Center Content */}
              <div className="my-auto py-8 text-center space-y-6">
                {/* Portrait */}
                <div className="relative w-36 h-36 mx-auto">
                  {/* Large Halo Ring */}
                  <div className="absolute -inset-12 rounded-full border border-gold/20" />

                  {/* Image Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-indigo via-[#5B21B6] to-gold p-[2px] shadow-xl">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                      <Image
                        src={founderImage}
                        alt="Grand Master Choa Kok Sui"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Animated Ring */}
                  <span
                    className="absolute -inset-3 rounded-full border border-gold/25 animate-ping"
                    style={{ animationDuration: '4s' }}
                  />
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-light text-slate-800">
                    Master Choa
                  </h3>

                  <p className="text-xs text-slate-500 uppercase font-mono tracking-wider font-semibold">
                    Founder of Modern Pranic Healing
                  </p>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 font-light max-w-xs mx-auto italic">
                  &ldquo;His books remain the world gold standard in non-touch
                  clinical energy therapeutics.&rdquo;
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-[#1E1B4B]/10 pt-4 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <span>SYSTEMIZED IN MANILA</span>

                <span className="text-accent-teal font-bold uppercase tracking-wider">
                  Accredited Classrooms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};