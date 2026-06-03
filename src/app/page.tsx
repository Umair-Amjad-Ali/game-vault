import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { GamesGrid } from '@/components/sections/GamesGrid';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section - Primary landing page display */}
      <Hero />
      
      {/* 2. Why Choose Us (Distributors Wanted) Benefits Grid */}
      <Features />
      
      {/* 3. Process Steps Process Outline Grid */}
      <HowItWorks />
      
      {/* 4. Game Platforms Responsive Catalog Grid */}
      <GamesGrid />
    </div>
  );
}
