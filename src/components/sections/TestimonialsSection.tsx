"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import { testimonials } from "@/data/TestimonialData";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  // Auto-play interval for infinite loop (every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const getVisibleTestimonials = () => {
    // Array of 3 items: Prev, Current, Next (Wrap around loops)
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    const nextIndex = (activeIndex + 1) % testimonials.length;
    
    return [
      { item: testimonials[prevIndex], position: "prev" },
      { item: testimonials[activeIndex], position: "active" },
      { item: testimonials[nextIndex], position: "next" }
    ];
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-50/50 overflow-hidden relative">
      {/* Decorative backing blobs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-pink-100/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading (Aligned with rest of SDC design) */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-pink-650 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mt-3">
            What Our Partners Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed font-semibold max-w-2xl mx-auto">
            Discover how USA Gaming Distributor has helped store owners and agents establish their gaming portals and maximize weekly credits.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center min-h-[420px]">
          
          {/* Navigation Arrows (Positioned Outside) */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-pink-200 shadow-md flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 group cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-0.5 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-pink-200 shadow-md flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 group cursor-pointer"
            aria-label="Next Testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Cards Track */}
          <div className="relative w-full h-[380px] flex justify-center items-center perspective-1000 overflow-visible">
            <AnimatePresence initial={false} mode="popLayout">
              {getVisibleTestimonials().map(({ item, position }) => {
                
                // Styling variables based on position
                const isActive = position === "active";
                const isPrev = position === "prev";
                const isNext = position === "next";

                const zIndex = isActive ? 30 : 10;
                const scale = isActive ? 1 : 0.85;
                const opacity = isActive ? 1 : 0.4;
                const filter = isActive ? "blur(0px)" : "blur(2px)";
                
                // Position offsets
                let transformX = 0;
                if (isPrev) transformX = -220; // Shift left
                if (isNext) transformX = 220;  // Shift right

                return (
                  <motion.div
                    key={`${item.id}-${position}`}
                    initial={{ opacity: 0, scale: 0.8, x: isNext ? 350 : -350 }}
                    animate={{ opacity, scale, x: transformX, zIndex, filter }}
                    exit={{ opacity: 0, scale: 0.8, x: isPrev ? -350 : 350 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`absolute overflow-hidden cursor-pointer ${isActive ? 'w-[280px] md:w-[320px]' : 'w-[240px] md:w-[280px] hidden md:block'} rounded-3xl shadow-xl`}
                    onClick={() => {
                      if (isPrev) handlePrev();
                      if (isNext) handleNext();
                    }}
                  >
                    {/* Card Container - Active is Pink/Dark Gradient, Inactive is White */}
                    <div className={`w-full h-full min-h-[350px] p-6 transition-all duration-500 flex flex-col ${isActive ? 'bg-gradient-to-br from-pink-500 via-pink-600 to-slate-900 text-white' : 'bg-white text-gray-900 border border-pink-100'}`}>
                      
                      {/* Active Card Glow Accent */}
                      {isActive && (
                        <div className="absolute -top-10 -right-10 w-28 h-28 bg-pink-400 rounded-full blur-[50px] opacity-40 z-0 pointer-events-none" />
                      )}

                      <div className="relative z-10 flex flex-col h-full text-left grow justify-between">
                        <div>
                          {/* Avatar & Details */}
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-11 h-11 rounded-full border-2 overflow-hidden shadow-xs shrink-0 ${isActive ? 'border-white/30' : 'border-pink-100'}`}>
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover select-none" />
                            </div>
                            <div>
                              <h4 className={`font-black text-sm leading-tight ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                {item.name}
                              </h4>
                              <p className={`text-[10.5px] font-extrabold tracking-wide ${isActive ? 'text-pink-200' : 'text-pink-600'}`}>
                                {item.title}
                              </p>
                            </div>
                          </div>

                          {/* Project Heading */}
                          <div className="mb-4">
                            <span className={`text-[8px] uppercase font-black tracking-widest leading-none ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                              Platform
                            </span>
                            <h5 className={`text-xs font-black leading-tight mt-0.5 ${isActive ? 'text-white/90' : 'text-gray-800'}`}>
                              {item.project}
                            </h5>
                          </div>

                          {/* Quote Text */}
                          <p className={`text-[11px] leading-relaxed font-semibold italic ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                            "{item.quote}"
                          </p>
                        </div>

                        {/* Become a Partner Link */}
                        <div className={`mt-5 pt-3 border-t ${isActive ? 'border-white/10' : 'border-pink-50'}`}>
                           <Link
                              href="/become-a-distributor"
                              className={`inline-flex items-center gap-1 text-[10.5px] font-black uppercase tracking-wider transition-all hover:gap-2 cursor-pointer ${isActive ? 'text-white' : 'text-pink-600'}`}
                           >
                              <span>Become a Partner</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                              </svg>
                           </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx ? 'w-6 bg-pink-550' : 'w-1.5 bg-pink-200 hover:bg-pink-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
