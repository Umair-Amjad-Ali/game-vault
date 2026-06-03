'use client';

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-pink-50/60 via-white to-white"
    >
      {/* Decorative background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      {/* Elegant, soft glowing spotlights using simple standard CSS blur */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-6">
        
        {/* Soft, premium header badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50/80 border border-pink-100/60 text-pink-700 font-extrabold text-[10px] uppercase tracking-widest shadow-xs select-none backdrop-blur-xs animate-fade-in-up">
          <Zap className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse-slow" />
          <span>Official Sweepstakes Distributor & Supplier</span>
        </div>

        {/* Dynamic, massive Headline - High-contrast dark gray */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] max-w-3xl animate-fade-in-up">
          The Ultimate <span className="text-gradient-pink">Sweepstakes</span> <br />
          <span className="text-gradient-pink">Agent & Distributor Portal</span>
        </h1>

        {/* Clean, high-readability dark gray subtitle copy */}
        <p className="text-xs sm:text-sm text-gray-700 max-w-2xl leading-relaxed font-semibold mt-2 px-2 animate-fade-in-up">
          We supply authorized game credits for Game Vault, Juwa, Vblink, Fire Kirin, Orion Stars, and more. Set up your master distributor portal, secure the best industry rates, and launch your business with 24/7 instant support.
        </p>

        {/* Dynamic CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4 animate-fade-in-up">
          <Button
            variant="primary"
            size="lg"
            href="/become-a-distributor"
            className="group gap-2 shadow-lg shadow-pink-500/20 py-3.5 px-8 text-xs font-black uppercase tracking-wider w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Become a Distributor</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="#game-platforms"
            className="py-3.5 px-8 text-xs font-black uppercase tracking-wider w-full sm:w-auto bg-white/50 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-pink-200 text-pink-600 hover:bg-pink-50/80 hover:border-pink-300"
          >
            <span>Explore Platforms</span>
          </Button>
        </div>

        {/* Clean horizontal trust badging strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-8 mt-6 border-t border-pink-100 w-full max-w-3xl text-[10px] text-gray-550 font-extrabold uppercase tracking-wider select-none animate-fade-in-up">
          <span className="flex items-center gap-1.5 text-pink-650 hover:text-pink-700 transition-colors">
            <ShieldCheck className="w-4.5 h-4.5 text-pink-600 fill-pink-50" />
            100% Authorized Supplier
          </span>
          <span className="hidden sm:inline text-pink-200">•</span>
          <span className="flex items-center gap-1.5 text-pink-650 hover:text-pink-700 transition-colors">
            <TrendingUp className="w-4.5 h-4.5 text-pink-600" />
            Unbeatable Rates & Tiers
          </span>
          <span className="hidden sm:inline text-pink-200">•</span>
          <span className="flex items-center gap-1.5 text-pink-650 hover:text-pink-700 transition-colors">
            <Clock className="w-4.5 h-4.5 text-pink-600" />
            24/7 Instant Reloads
          </span>
        </div>

      </div>
    </section>
  );
};
