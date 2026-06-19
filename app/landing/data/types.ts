import React from 'react';

export interface CorePrinciple {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: string;
  bgLight: string;
  aura: string;
}

export interface WorkshopTopic {
  title: string;
  desc: string;
}

export interface WorkshopDay {
  day: string;
  title: string;
  time: string;
  topics: WorkshopTopic[];
}

export interface EssentialBook {
  title: string;
  originalTitle: string;
  subtitle: string;
  quote: string;
  chapters: string[];
  badge: string;
  color: string;
}

export interface Benefit {
  title: string;
  desc: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface WorkshopOption {
  id: string;
  title: string;
  location: string;
  date: string;
  hours: string;
  seatsLeft: number;
  price: string;
}

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  seats: number;
  agreedDisclaimer: boolean;
}

export interface RegistrationSubmission {
  id: string;
  workshopTitle: string;
  workshopDate: string;
  workshopLocation: string;
  seats: number;
  priceTotal: string;
  name: string;
  email: string;
}
