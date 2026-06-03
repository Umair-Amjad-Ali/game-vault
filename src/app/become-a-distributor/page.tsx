'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Check, 
  MessageCircle, 
  Send, 
  DollarSign, 
  Users, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { GAME_PLATFORMS, CONTACT_INFO } from '@/lib/constants';

export default function BecomeDistributorPage() {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    communication: 'WhatsApp',
    phone: '',
    email: '',
    tier: 'Store',
    gameId: 'orion-stars', // Defaults to Orion Stars
    points: '',
    message: ''
  });

  const [activeGame, setActiveGame] = useState(() => GAME_PLATFORMS.find(g => g.id === 'orion-stars'));
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize point rates whenever game selection changes
  useEffect(() => {
    const newGame = GAME_PLATFORMS.find(g => g.id === formData.gameId);
    if (newGame) {
      setActiveGame(newGame);
      setFormData(prev => ({
        ...prev,
        points: newGame.rates[0] ? `${newGame.rates[0].points} points = $${newGame.rates[0].price}` : 'Custom points inquiry'
      }));
    }
  }, [formData.gameId]);

  // Compute dynamic minimum start price based on active selected game rates
  const getMinPrice = () => {
    if (activeGame && activeGame.rates.length > 0) {
      // Find the lowest rate price for this game
      return activeGame.rates[0].price;
    }
    return 90; // Default fallback to absolute lowest package price in database
  };

  // Submit trigger - compiles lead values and starts WhatsApp chat
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    const whatsappMessage = `Hello SDC! I am interested in becoming a partner:
- *Name:* ${formData.fullName}
- *Contact Method:* ${formData.communication}
- *Phone:* ${formData.phone}
- *Email:* ${formData.email}
- *Account Level:* ${formData.tier}
- *Platform of Interest:* ${activeGame?.name || 'All'}
- *Starting Package:* ${formData.points}
- *Message:* ${formData.message || 'None'}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/14706385664?text=${encodedMessage}`;
    
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white bg-grid-pattern pt-24 pb-16">
      
      {/* Backing decorative lights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-pink-50/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-rose-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col items-start gap-1 text-left mb-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-pink-650 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return Home</span>
          </Link>
          <div className="flex items-center gap-1 text-xs text-gray-400 font-bold mt-2 select-none">
            <Link href="/" className="hover:text-pink-650 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-650">Agents and Distributors</span>
          </div>
        </div>

        {/* 1. Main Title & Description */}
        <div className="text-left w-full mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Agents and Distributors
          </h1>
          
          <p className="text-xs sm:text-sm text-gray-700 mt-4 leading-relaxed font-semibold">
            Interested in the online gaming business, especially sweepstakes games? If you're keen to start your own internet distributors games business, we're here to guide you through the process. We're seeking driven individuals to join our network of gaming professionals. We offer opportunities for online store setups and distributors across most U.S. states.
          </p>
          
          <p className="text-xs sm:text-sm text-gray-800 mt-3 leading-relaxed font-black border-b border-gray-100 pb-4">
            Our business provides software to both large and small distributors, catering to various gaming platforms including:
          </p>

          {/* 31 Games Checklist with direct links to Rates - redesigned as beautiful capsules */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-6 border-b border-gray-150 w-full">
            {GAME_PLATFORMS.map((g) => (
              <Link 
                key={g.id} 
                href={`/game/${g.id}`}
                className="flex items-center gap-2.5 p-2.5 rounded-xl border border-pink-100/50 bg-pink-50/10 hover:bg-pink-50/30 hover:border-pink-300 hover:shadow-xs transition-all duration-300 group cursor-pointer"
              >
                <div className="w-5 h-5 rounded-md bg-pink-500/10 flex items-center justify-center shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <Check className="w-3.5 h-3.5 text-pink-650 shrink-0 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[11px] font-black text-gray-800 group-hover:text-pink-700 truncate transition-colors">{g.name}</span>
              </Link>
            ))}
          </div>

          <p className="text-[10px] text-gray-400 mt-4 leading-relaxed italic font-semibold">
            Those sweepstakes distributor or distributors sell to smaller distributors that sell to individual stores. We have no affiliation with these stores and are not responsible for how they run their business. While we facilitate the distribution of software, our role does not extend to the direct management of individual stores or their operational practices.
          </p>
        </div>

        {/* 2. New Distributor/Store Application Form Heading */}
        <div className="text-left w-full mt-12 border-t border-gray-100 pt-10">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            New Distributor/Store Application Form
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-700 mt-4 leading-relaxed font-semibold text-left">
            Thank you for your interest in becoming a partner. Whether you're aiming to become a distributor or interested in offering Juwa or other software in your store, we're excited about the possibility of working together. Please follow the instructions below to ensure we can assist you effectively:
          </p>

          {/* Instant Contact Messaging Area */}
          <div className="relative overflow-hidden bg-gradient-to-tr from-pink-50/40 via-purple-50/20 to-transparent border border-pink-100/60 rounded-2xl p-6 sm:p-8 mt-8 w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm shadow-pink-500/2">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-pink-100/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col items-start gap-2 max-w-xl">
              <span className="text-[9px] font-black uppercase text-pink-650 tracking-widest leading-none">Instant Contact via Messaging</span>
              <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight mt-1">Need a quick conversation?</h3>
              <p className="text-xs text-gray-500 font-semibold leading-relaxed">
                If you prefer instant messaging or have custom rate queries, reach out directly. Click a channel below to connect with us immediately:
              </p>
            </div>
            
            {/* Direct Contact Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-emerald-500/10 cursor-pointer transition-all hover:scale-[1.02] active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white/10" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CONTACT_INFO.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-sky-500/10 cursor-pointer transition-all hover:scale-[1.02] active:scale-98"
              >
                <Send className="w-4 h-4 translate-x-[-1px] fill-white/10" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3. Pricing Cards & Form Section */}
        <div className="mt-12 w-full flex flex-col gap-8">
          
          {/* Dynamic Price Display Cards (Top Side, 2 Cards side-by-side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            
            {/* Card 1: Dynamic starting price */}
            <div className="relative overflow-hidden bg-gradient-to-tr from-pink-500 to-pink-650 rounded-2xl p-6 text-white shadow-lg shadow-pink-500/10 border border-pink-400/20 flex flex-col items-center justify-center text-center gap-3">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-pink-300/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center border border-white/20 backdrop-blur-md shadow-inner">
                <DollarSign className="w-5.5 h-5.5 text-white animate-pulse-slow" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-pink-100 font-extrabold uppercase tracking-widest leading-none">Low Minimum Deposit</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-none mt-1">
                  Start with ${getMinPrice()}
                </h3>
              </div>
              <span className="text-[10px] text-pink-100 font-semibold leading-normal mt-1 max-w-xs">
                Activate your agent/distributor portal and request custom point packages.
              </span>
            </div>

            {/* Card 2: Team Pitch */}
            <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-6 text-white shadow-lg border border-slate-800 flex flex-col items-center justify-center text-center gap-3">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 shadow-inner">
                <Users className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] text-pink-500 font-extrabold uppercase tracking-widest leading-none">Instant Support 24/7</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase leading-none mt-1">
                  Be Your Own Boss
                </h3>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold leading-normal mt-1 max-w-xs">
                Receive the best distributor margin rates and set up your store today.
              </p>
            </div>

          </div>

          {/* Form Side (Full Width) */}
          <div className="w-full">
            <div className="bg-white rounded-2xl border border-pink-100/60 p-6 sm:p-8 shadow-md shadow-pink-500/2 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 w-full">
              
              {isSubmitted ? (
                /* Success state */
                <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-200">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-black text-gray-900">Application Submitted!</h4>
                  <p className="text-xs text-gray-700 font-semibold max-w-sm leading-relaxed">
                    We have compiled your agent registration details. If the WhatsApp portal did not open, please use the manually launch button below.
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    href={CONTACT_INFO.whatsapp.url}
                    className="mt-2 text-xs font-black uppercase px-6 py-2.5"
                  >
                    <span>Open Live Chat</span>
                  </Button>
                </div>
              ) : (
                /* Interactive General Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Row 1: Full Name & Communication Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Full Name <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Your Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Preferred method of communication <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.communication}
                        onChange={(e) => setFormData({ ...formData, communication: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Telegram">Telegram</option>
                        <option value="Phone Number">Phone Number</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Phone Number <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter Your Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Email <span className="text-pink-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Account Level & Game Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Store or Distributer <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Store">Store</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Sub-Distributor">Sub-Distributor</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-extrabold text-gray-800">
                        Games Interested In <span className="text-pink-600">*</span>
                      </label>
                      <select
                        value={formData.gameId}
                        onChange={(e) => setFormData({ ...formData, gameId: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all cursor-pointer"
                      >
                        {GAME_PLATFORMS.map((g) => (
                          <option key={g.id} value={g.id}>
                            {g.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Point packages Dropdown - DYNAMICALLY RESOLVED based on Game Select */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-800">
                      How many points do you want to get? <span className="text-pink-600">*</span>
                    </label>
                    <select
                      value={formData.points}
                      onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all cursor-pointer"
                    >
                      {activeGame && activeGame.rates.map((rate, index) => (
                        <option key={index} value={`${rate.points} points = $${rate.price}`}>
                          {rate.points} points = ${rate.price} USD
                        </option>
                      ))}
                      <option value="Custom points inquiry">Custom / Other Point Inquiry</option>
                    </select>
                  </div>

                  {/* Row 5: Your Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-extrabold text-gray-800">
                      Your Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Type Your Message Here"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {/* Submit Trigger */}
                  <button
                    type="submit"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md shadow-pink-500/10 cursor-pointer hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Become a Distributor / Agent</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* SDC Official Disclaimer - Exactly as screenshot */}
                  <div className="pt-2 border-t border-gray-100 mt-4 text-[10px] text-amber-600 font-extrabold leading-relaxed text-center">
                    Disclaimer: SDC is not an employer. We are not seeking employees. SDC is an account/credit supplier.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
