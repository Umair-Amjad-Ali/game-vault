"use client";

import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, Send, Gem } from "lucide-react";
import { CONTACT_INFO, NAVIGATION_LINKS } from "@/lib/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative w-full mt-0 overflow-hidden bg-white border-t border-pink-100/60">
      {/* Top glowing border accent */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-pink-500 to-transparent opacity-65" />

      {/* Decorative background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      {/* Glowing backdrop spotlights */}
      <div className="absolute -top-12 left-1/4 w-80 h-80 bg-pink-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-100/10 rounded-full blur-3xl pointer-events-none" />

      <footer className="relative">
        {/* Main content wrapper - width increased to max-w-7xl to match the navbar spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-10 pb-12">
          {/* Main 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 relative z-20">
            {/* Column 1: Brand presentation (4/12) */}
            <div className="col-span-1 lg:col-span-4 flex flex-col items-start gap-3">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-none bg-linear-to-tr from-pink-500 to-pink-650 flex items-center justify-center text-white shadow-sm shadow-pink-500/20 relative">
                  {/* Unique L-shaped Crop Marks */}
                  <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <Gem className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-black tracking-tight text-gradient-pink leading-none">
                    SDC
                  </span>
                  <span className="text-[8px] text-gray-500 uppercase tracking-widest font-semibold mt-0.5">
                    Sweepstakes
                  </span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed text-left">
                Your official, premier sweepstakes distributor and credit
                supplier. Powering distributors and sub-agents worldwide with
                unbeatable rates and round-the-clock service.
              </p>
            </div>

            {/* Column 2: Navigation Links (3/12) */}
            <div className="col-span-1 lg:col-span-3 flex flex-col gap-3 lg:pl-8 text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                Navigation
              </h4>
              <ul className="flex flex-col gap-2.5">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-650 hover:text-pink-600 transition-colors font-semibold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Support cards (5/12) */}
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-3 text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                Direct Support Channels
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-0.5">
                {/* WhatsApp */}
                <a
                  href={CONTACT_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-none border border-zinc-200 bg-white hover:border-pink-400 hover:shadow-xs transition-all duration-300 relative group"
                >
                  {/* Unique L-shaped Crop Marks */}
                  <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>

                  <div className="w-8 h-8 rounded-none bg-green-500 flex items-center justify-center text-white shrink-0 shadow-sm shadow-green-500/10">
                    <MessageCircle className="w-4 h-4 fill-white/10" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">
                      WhatsApp
                    </span>
                    <span className="text-xs text-gray-700 font-bold truncate group-hover:text-pink-650 transition-colors">
                      {CONTACT_INFO.whatsapp.value}
                    </span>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href={CONTACT_INFO.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-none border border-zinc-200 bg-white hover:border-pink-400 hover:shadow-xs transition-all duration-300 relative group"
                >
                  {/* Unique L-shaped Crop Marks */}
                  <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20 transition-colors group-hover:border-pink-500"></span>
                  <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20 transition-colors group-hover:border-pink-500"></span>

                  <div className="w-8 h-8 rounded-none bg-sky-500 flex items-center justify-center text-white shrink-0 shadow-sm shadow-sky-500/10">
                    <Send className="w-4 h-4 translate-x-[-0.5px] fill-white/10" />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wide">
                      Telegram
                    </span>
                    <span className="text-xs text-gray-700 font-bold truncate group-hover:text-pink-650 transition-colors">
                      {CONTACT_INFO.telegram.value}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width glowing separator line */}
        <div className="relative w-full h-[2px] bg-linear-to-r from-transparent via-pink-500 to-transparent opacity-65 z-20" />

        {/* Copyright and Legal wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-10 pb-5">
          {/* Copyright and Legal block */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative z-20">
            <p>© {currentYear} SDC Sweepstakes. All rights reserved.</p>
            <div className="flex gap-4 font-bold uppercase tracking-wider text-[9px] text-gray-450">
              <span>Official Distributor Portal</span>
              <span>•</span>
              <span>Est. 2016</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
