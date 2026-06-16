import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { GamesGrid } from "@/components/sections/GamesGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <GamesGrid />
      <TestimonialsSection />
    </div>
  );
}
