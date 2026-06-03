"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import * as Icons from "lucide-react";
import { Button } from "../ui/Button";
import { PROCESS_STEPS } from "@/lib/constants";
import { FeatureCard } from "../ui/grid-feature-cards";

export const HowItWorks: React.FC = () => {
  // Dynamically map PROCESS_STEPS to the format required by the animated FeatureCard
  const mappedSteps = PROCESS_STEPS.map((step) => {
    const IconComponent = (Icons as any)[step.iconName] || Icons.MessageSquare;
    return {
      title: `${step.stepNumber}. ${step.title}`,
      icon: IconComponent,
      description: step.description,
    };
  });

  return (
    <section
      id="how-to-start"
      className="relative py-6 sm:py-8 lg:py-12 overflow-hidden bg-white bg-grid-pattern"
    >
      {/* Decorative gradient glowing spheres */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-pink-50/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-rose-50/50 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading with entry animation */}
        <AnimatedContainer className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-650">
            Fast Setup
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mt-1">
            How Do I Start?
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed font-semibold">
            Follow our simple, structured process grid to set up your master
            portal, secure credits, and begin establishing sub-agents.
          </p>
        </AnimatedContainer>

        {/* Dynamic, Animated Grid Feature Cards */}
        <AnimatedContainer
          delay={0.3}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-x divide-y divide-dashed divide-pink-300 border border-dashed border-pink-300 rounded-3xl overflow-hidden bg-white/50 backdrop-blur-xs shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {mappedSteps.map((feature, i) => (
            <FeatureCard
              key={i}
              feature={feature}
              className="border-pink-200/40 hover:bg-pink-50/20 transition-all duration-300"
            />
          ))}
        </AnimatedContainer>

        {/* Dynamic CTA Banner */}
        <AnimatedContainer
          delay={0.5}
          className="mt-10 lg:mt-12 via-rose-50/40 flex flex-col lg:flex-row items-center justify-between gap-6overflow-hidden"
        >
          {/* Subtle inside background decoration */}
          <div className="absolute right-0 bottom-0 w-60 h-60 rounded-full bg-pink-100/20 blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-1.5 max-w-xl z-10">
            <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 leading-tight">
              Ready to launch your sweepstakes distribution business?
            </h3>
            <p className="text-xs text-gray-700 leading-relaxed font-semibold">
              Contact our sales representatives today to receive a customized
              quote, access distributor portals, and get full support.
            </p>
          </div>

          <div className="shrink-0 z-10 w-full sm:w-auto">
            <Button
              variant="primary"
              size="md"
              href="/become-a-distributor"
              className="w-full sm:w-auto shadow-md shadow-pink-500/10 group gap-1.5 py-2.5 px-5 text-sm"
            >
              <span>Become A Distributor Today</span>
              <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
