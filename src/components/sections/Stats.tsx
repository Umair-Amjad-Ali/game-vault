"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Award, Users, Globe } from "lucide-react";

interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  glowColor: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: "experience",
    value: "4+",
    label: "Years of Experience",
    description: "Delivering stable, authorized sweepstakes software & secure credit connections.",
    icon: Award,
    color: "text-pink-650",
    glowColor: "bg-pink-500/10",
  },
  {
    id: "clients",
    value: "500+",
    label: "Trusted Clients",
    description: "Empowering master agents, stores, and distributors across the country.",
    icon: Users,
    color: "text-purple-600",
    glowColor: "bg-purple-500/10",
  },
  {
    id: "connections",
    value: "5+",
    label: "Global Connections",
    description: "Direct APIs with major gaming developers to secure the best rates.",
    icon: Globe,
    color: "text-rose-600",
    glowColor: "bg-rose-500/10",
  },
];

export const Stats: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: shouldReduceMotion ? "none" : "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative pt-0 pb-16 lg:pb-20 overflow-hidden bg-white">
      {/* Background radial soft lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-64 bg-pink-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {STATS_DATA.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                className="relative group p-5 rounded-2xl border border-pink-200/80 bg-linear-to-br from-white/95 to-pink-50/40 backdrop-blur-md shadow-md hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 hover:border-pink-350 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[160px]"
              >
                {/* Decorative glowing sphere inside the card on hover */}
                <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full ${stat.glowColor} blur-xl group-hover:scale-175 transition-transform duration-700 pointer-events-none`} />

                <div>
                  {/* Icon badge */}
                  <div className="inline-flex items-center justify-center p-2 rounded-xl bg-pink-50 border border-pink-200 mb-3 group-hover:rotate-6 transition-transform duration-300 shadow-xs">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>

                  {/* Value */}
                  <div className="text-3xl lg:text-4xl font-extrabold tracking-tight select-none mb-1">
                    <span className="text-gradient-pink">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-[10px] font-black uppercase tracking-wider text-gray-800 mb-1">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[10.5px] text-gray-500 font-semibold leading-relaxed mt-1">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
