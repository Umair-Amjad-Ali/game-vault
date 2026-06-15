"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Gem, ChevronDown, Gamepad2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { CONTACT_INFO } from "@/lib/constants";
import { useApiData } from "@/components/providers/ApiDataProvider";

export const Navbar: React.FC = () => {
  const { games } = useApiData();
  const [isOpen, setIsOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".mega-menu-container") &&
        !target.closest(".mega-menu-trigger")
      ) {
        setIsMegaOpen(false);
      }
    };
    if (isMegaOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMegaOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3.5 shadow-md"
          : "bg-white/40 backdrop-blur-xs py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-pink-500 to-pink-650 flex items-center justify-center text-white shadow-sm shadow-pink-500/25 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              <Gem className="w-4.5 h-4.5 animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-gradient-pink leading-none">
                USA
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest font-semibold mt-0.5">
                Gaming Distributor
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-pink-600 transition-all duration-300 py-1"
            >
              Home
            </Link>

            {/* Game Platforms Mega-Menu (State Controlled on Click) */}
            <div className="relative py-1">
              <button
                onClick={() => setIsMegaOpen(!isMegaOpen)}
                className="mega-menu-trigger text-xs font-bold uppercase tracking-wider text-gray-650 hover:text-pink-600 transition-all duration-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Gaming Platforms</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Broad Multi-column Mega Menu Dropdown */}
              <div
                className={`mega-menu-container absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[90vw] max-w-4xl bg-white border-2 border-pink-200/90 rounded-3xl shadow-2xl p-6 transition-all duration-300 z-50 ${
                  isMegaOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-3 pointer-events-none"
                }`}
              >
                {/* Header title inside mega menu */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-pink-100">
                  <div className="flex items-center gap-1.5 text-pink-650 font-black text-xs uppercase tracking-wider">
                    <Gamepad2 className="w-4 h-4 text-pink-650" />
                    <span>Select Game Platform ({games.length} Platforms)</span>
                  </div>
                  <Link
                    href="/#game-platforms"
                    onClick={() => setIsMegaOpen(false)}
                    className="text-[10px] font-black uppercase text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    View Catalog
                  </Link>
                </div>

                {/* 4-Column Grid displaying all 31 Games */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-2 max-h-[380px] overflow-y-auto pr-1">
                  {games.map((game) => (
                    <Link
                      key={game.id}
                      href={`/game/${game.id}`}
                      onClick={() => setIsMegaOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black text-gray-900 bg-gray-55 border border-gray-150/80 hover:bg-pink-600 hover:text-white hover:border-transparent hover:scale-[1.02] transition-all duration-200 group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0 group-hover/item:bg-white transition-colors" />
                      <span className="truncate">{game.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/#why-us"
              className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-pink-600 transition-all duration-300 py-1"
            >
              Why Us
            </Link>

            <Link
              href="/#how-to-start"
              className="text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-pink-600 transition-all duration-300 py-1"
            >
              How to Start
            </Link>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/become-a-distributor"
              className="text-[10px] tracking-wider uppercase font-extrabold px-5 py-2.5"
            >
              Become a Distributor
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-600 hover:bg-pink-50 hover:text-pink-600 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5.5 h-5.5" />
              ) : (
                <Menu className="w-5.5 h-5.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu Panel */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-pink-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3.5 flex flex-col items-stretch max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-extrabold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all"
          >
            Home
          </Link>

          {/* Mobile Collapsible Games Tab */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsGamesOpen(!isGamesOpen)}
              className="px-4 py-2.5 rounded-xl text-sm font-extrabold text-gray-700 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-between transition-all cursor-pointer"
            >
              <span>Game Platforms</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isGamesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isGamesOpen && (
              <div className="mt-2 pl-3 ml-3 border-l-2 border-pink-200 flex flex-col gap-2.5 max-h-56 overflow-y-auto py-2">
                {games.map((game) => (
                  <Link
                    key={game.id}
                    href={`/game/${game.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      setIsGamesOpen(false);
                    }}
                    className="py-2 px-3 rounded-xl bg-gray-55 border border-gray-150/80 text-xs font-black text-gray-900 hover:bg-pink-650 hover:text-white transition-all flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 text-pink-500 shrink-0" />
                    <span className="truncate">{game.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#why-us"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-extrabold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all"
          >
            Why Us
          </Link>

          <Link
            href="/#how-to-start"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2.5 rounded-xl text-sm font-extrabold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all"
          >
            How to Start
          </Link>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
            <Button
              variant="primary"
              size="md"
              href="/become-a-distributor"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2.5 text-xs font-black uppercase"
            >
              Become a Distributor
            </Button>
            <div className="flex justify-center gap-4 text-[10px] text-gray-500 font-bold py-1">
              <a
                href={CONTACT_INFO.telegram.url}
                className="hover:text-pink-600 transition-colors"
              >
                Telegram
              </a>
              <span>•</span>
              <a
                href={CONTACT_INFO.email.url}
                className="hover:text-pink-600 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
