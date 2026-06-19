'use client';

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsPranicHealing } from './components/WhatIsPranicHealing';
import { CorePrinciples } from './components/CorePrinciples';
import { Curriculum } from './components/Curriculum';
import { ModernLife } from './components/ModernLife';
import { FounderBio } from './components/FounderBio';
import { ReadingList } from './components/ReadingList';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { RegistrationPortal } from './components/RegistrationPortal';
import { Footer } from './components/Footer';

export const PranicHealingLandingPage: React.FC = () => {
  return (
    <div
      className="min-h-screen text-slate-800 bg-ivory selection:bg-gold selection:text-primary-indigo font-sans relative overflow-x-hidden"
      id="top"
    >
      <Header />
      <Hero />
      <WhatIsPranicHealing />
      <CorePrinciples />
      <Curriculum />
      <ModernLife />
      <FounderBio />
      <ReadingList />
      <Benefits />
      <Testimonials />
      <FAQ />
      <RegistrationPortal />
      <Footer />
    </div>
  );
};
