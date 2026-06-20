'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkle, CheckCircle2, Lock, Info, ArrowRight } from 'lucide-react';
import { WORKSHOP_OPTIONS } from '../data/constants';
import type { RegistrationData } from '../data/types';

export const RegistrationPortal: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState('la-inperson');
  const [formData, setFormData] = useState<RegistrationData>({
    fullName: '',
    email: '',
    phone: '',
    experience: 'Beginner',
    seats: 1,
    agreedDisclaimer: false,
  });
  const [registrationSubmission, setRegistrationSubmission] = useState<{
    id: string;
    workshopTitle: string;
    workshopDate: string;
    workshopLocation: string;
    seats: number;
    priceTotal: string;
    name: string;
    email: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.agreedDisclaimer) {
      alert('Please specify your full name, email, and accept the medical disclaimer before registering.');
      return;
    }

    const matchedWorkshop = WORKSHOP_OPTIONS.find((w) => w.id === selectedWorkshop);
    if (!matchedWorkshop) return;

    const basePrice = parseInt(matchedWorkshop.price.replace(/[^0-9]/g, ''));
    const totalCost = basePrice * formData.seats;

    const bookingId = 'PH-' + Math.floor(100000 + Math.random() * 900000);

    setRegistrationSubmission({
      id: bookingId,
      workshopTitle: matchedWorkshop.title,
      workshopDate: matchedWorkshop.date,
      workshopLocation: matchedWorkshop.location,
      seats: formData.seats,
      priceTotal: `$${totalCost} USD`,
      name: formData.fullName,
      email: formData.email,
    });
  };

  const handleResetRegistration = () => {
    setRegistrationSubmission(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: 'Beginner',
      seats: 1,
      agreedDisclaimer: false,
    });
  };

  return (
    <section className="py-20 md:py-28 bg-[#1E1B4B] text-[#FAF8F3] relative overflow-hidden" id="registration-portal">
      {/* Intrinsic glowing vectors */}
      <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] rounded-full bg-violet-700/10 pointer-events-none blur-3xl" />
      <div className="absolute -bottom-20 right-10 w-[30rem] h-[30rem] rounded-full bg-teal-700/10 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="portal-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* CTA Copy details on left */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm">
              <Sparkle className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                RESERVE YOUR ENERGY SEAT
              </span>
            </div> */}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
              Begin Your Journey Into Accelerated Healing
            </h2>

            <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed">
              Simply select your preferred workshop date on the registration panel. Once submitted, we will
              immediately generate your official energetic curriculum confirmation syllabus and seat reservation
              details.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0" />
                <span className="text-sm text-slate-300">
                  Internationally accredited certification upon completion
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0" />
                <span className="text-sm text-slate-300">
                  Lifetime access to practitioner reference materials
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-emerald shrink-0" />
                <span className="text-sm text-slate-300">
                  Small group sizes ensuring personalized mentorship
                </span>
              </div>
            </div>

            {/* Secure Trust row */}
            <div className="pt-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Lock className="w-3.5 h-3.5 text-gold" />
              <span>SSL SECURED BOOKING PLATFORM</span>
            </div>
          </div>

          {/* Registration Form / Success Ticket Portal on Right */}
          <div className="lg:col-span-7">
            <div className="w-full glassmorphism-dark rounded-3xl p-8 md:p-10 border border-white/10 text-[#FAF8F3] relative shadow-2xl">
              <AnimatePresence mode="wait">
                {registrationSubmission ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    {/* Success Ticket Card */}
                    <div className="bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-transparent rounded-2xl border border-emerald-500/30 p-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                            Registration Confirmed
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 border-t border-emerald-500/20 pt-6">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                            Booking ID
                          </p>
                          <p className="font-mono text-lg font-bold text-gold">{registrationSubmission.id}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                              Name
                            </p>
                            <p className="text-sm font-semibold text-slate-100">
                              {registrationSubmission.name}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                              Email
                            </p>
                            <p className="text-sm font-semibold text-slate-100">
                              {registrationSubmission.email}
                            </p>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                            Workshop
                          </p>
                          <p className="text-sm font-semibold text-slate-100">
                            {registrationSubmission.workshopTitle}
                          </p>
                          <p className="text-xs text-slate-400 mt-1">
                            {registrationSubmission.workshopLocation}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                          <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                              Date
                            </p>
                            <p className="text-sm font-semibold text-slate-100">
                              {registrationSubmission.workshopDate}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                              Seats Reserved
                            </p>
                            <p className="text-sm font-semibold text-slate-100">
                              {registrationSubmission.seats} {registrationSubmission.seats === 1 ? 'Seat' : 'Seats'}
                            </p>
                          </div>
                        </div>

                        <div className="bg-[#1E1B4B]/60 rounded-xl p-4 border border-gold/20">
                          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-1">
                            Total Investment
                          </p>
                          <p className="text-2xl font-bold text-gold">{registrationSubmission.priceTotal}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={handleResetRegistration}
                        className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all duration-300 border border-white/20"
                      >
                        Make Another Reservation
                      </button>
                      <button className="flex-1 px-6 py-3 rounded-full bg-gold text-[#1E1B4B] font-medium text-sm hover:bg-[#FFD700] transition-all duration-300 flex items-center justify-center gap-2">
                        <span>Download Confirmation</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-slate-400 text-center">
                      <p>
                        A confirmation email has been sent to <span className="text-slate-200">{registrationSubmission.email}</span>
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleRegistrationSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {/* Workshop Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-3">
                        Choose Your Workshop
                      </label>
                      <div className="space-y-2">
                        {WORKSHOP_OPTIONS.map((option) => (
                          <label key={option.id} className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-white/5 transition-colors">
                            <input
                              type="radio"
                              name="workshop"
                              value={option.id}
                              checked={selectedWorkshop === option.id}
                              onChange={(e) => setSelectedWorkshop(e.target.value)}
                              className="w-4 h-4 mt-1 accent-gold"
                            />
                            <div>
                              <p className="text-sm font-semibold text-slate-100">{option.title}</p>
                              <p className="text-xs text-slate-400">{option.location}</p>
                              <div className="flex items-center gap-4 mt-1">
                                <span className="text-xs text-gold font-bold">{option.date}</span>
                                <span className="text-xs text-slate-500">{option.seatsLeft} seats left</span>
                                <span className="text-xs font-bold text-emerald-400">{option.price}</span>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold/50 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-gold/50 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">
                          Experience Level
                        </label>
                        <select
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-100 focus:outline-none focus:border-gold/50 transition-colors"
                        >
                          <option value="Beginner" className="text-slate-900">
                            Beginner
                          </option>
                          <option value="Intermediate" className="text-slate-900">
                            Intermediate
                          </option>
                          <option value="Advanced" className="text-slate-900">
                            Advanced
                          </option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-slate-300 font-semibold mb-2">
                          Number of Seats
                        </label>
                        <select
                          name="seats"
                          value={formData.seats}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-100 focus:outline-none focus:border-gold/50 transition-colors"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n} className="text-slate-900">
                              {n} {n === 1 ? 'Seat' : 'Seats'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Medical Disclaimer Checkbox */}
                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 leading-relaxed">
                          Pranic Healing is a complementary wellness practice and is not intended to replace
                          professional medical diagnosis or treatment.
                        </p>
                      </div>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="agreedDisclaimer"
                          checked={formData.agreedDisclaimer}
                          onChange={handleInputChange}
                          className="w-4 h-4 accent-gold"
                        />
                        <span className="text-xs text-slate-300">
                          I understand and accept the medical disclaimer *
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 rounded-full bg-gold text-[#1E1B4B] font-semibold text-base hover:bg-[#FFD700] transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Complete Your Registration</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      Your registration is secure and your information will not be shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
