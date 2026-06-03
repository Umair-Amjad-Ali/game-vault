"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, Clock, TrendingUp } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white text-gray-900"
    >
      {/* Decorative backing blobs */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-pink-50/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-pink-100/20 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 ">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mt-3">
            Distributors & Agents Wanted
          </h2>
          <p className="text-sm sm:text-base text-gray-650 mt-3 leading-relaxed font-semibold max-w-2xl mx-auto">
            We supply the games, credits, and around-the-clock service you need
            to maximize your distributor commissions with zero hassle.
          </p>
        </div>

        {/* Features Grid Layout */}
        <div className="mx-auto grid gap-6 lg:grid-cols-2 max-w-5xl p-2">
          {/* Card 1: Experience & Trust */}
          <FeatureCard>
            <CardHeader className="pb-3 p-0">
              <CardHeading
                icon={Award}
                title="Over 10 Years of Industry Presence"
                description="Proven Sweepstakes Supplier & Partner"
                detail="Leveraging over a decade of gaming expertise to provide stable, authorized distributor connections for all major sweepstakes systems."
              />
            </CardHeader>

            <div className="relative mb-6 border-t border-dashed border-zinc-200 sm:mb-0">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--primary-light),white_125%)]"></div>
              {/* Reduced aspect height from aspect-[76/59] to aspect-[76/45] */}
              <div className="aspect-76/45 p-6 flex flex-col justify-center items-center text-center relative z-10">
                <div className="text-5xl font-black text-pink-600 drop-shadow-sm select-none tracking-tight animate-pulse-slow">
                  10+
                </div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-gray-700 mt-2">
                  Years of Trusted Excellence
                </div>
                <div className="text-[11px] text-gray-500 mt-1 max-w-[240px] font-semibold leading-relaxed">
                  Supplying premium gaming systems to sweepstakes distributors
                  nationwide.
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: 24/7 Quality Service & Mock Server Dashboard */}
          <FeatureCard>
            <CardHeader className="pb-3 p-0">
              <CardHeading
                icon={Clock}
                title="Quality Service Around the Clock"
                description="24/7 Instant Reloads & Operations"
                detail="Dedicated support agents ready to manage your game credits, troubleshoot backend portals, and fund player accounts with zero downtime."
              />
            </CardHeader>

            <CardContent className="p-0">
              <div className="relative mb-6 sm:mb-0 px-6 pb-6">
                {/* Reduced aspect height from aspect-[76/59] to aspect-[76/45] */}
                <div className="aspect-76/45 border border-zinc-200 rounded-none bg-zinc-50 p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
                  {/* Dashboard header */}
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[10px] text-zinc-450 font-extrabold uppercase tracking-wider">
                      Server Status
                    </span>
                    <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
                      100% OPERATIONAL
                    </span>
                  </div>

                  {/* Interactive activity reload chart - height scaled to h-18 */}
                  <div className="flex items-end justify-between gap-1 w-full h-18 px-1">
                    {[
                      35, 45, 60, 50, 75, 90, 80, 85, 95, 100, 90, 85, 90, 95,
                      100,
                    ].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className={cn(
                          "w-full rounded-t-sm transition-all duration-300",
                          i === 14 ? "bg-pink-500" : "bg-pink-100",
                        )}
                      />
                    ))}
                  </div>

                  {/* Dashboard footer */}
                  <div className="flex justify-between text-[9px] text-zinc-400 font-extrabold w-full border-t border-zinc-200 pt-2 mt-2">
                    <span>RELOAD TIME</span>
                    <span className="text-pink-600 font-black">
                      AVG &lt; 2 MINS
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          {/* Card 3: Unbeatable Rates & Commissions */}
          <FeatureCard className="p-6 lg:col-span-2 flex flex-col items-center justify-between">
            <div className="text-center max-w-xl mx-auto">
              <span className="text-gray-655 flex items-center justify-center gap-2 mb-1 font-bold">
                <TrendingUp className="size-5 text-pink-600" />
                Unbeatable Rates To Boost Profits
              </span>
              <p className="text-2xl font-black text-gray-900 leading-tight">
                Unlock The Best Tier Rates & Highest Commission Margins
              </p>
              <p className="text-xs sm:text-sm text-gray-550  mt-1 font-medium">
                Get maximum value on Vblink, Juwa, Orion Stars, Milky Ways, Game
                Vault, and Fire Kirin credits. Set up sub-agents to build your
                empire.
              </p>
            </div>

            {/* Circular tier visualization */}
            <div className="flex flex-wrap justify-center gap-6 mt-4 w-full overflow-hidden">
              <CircularUI
                label="Distributor Tier"
                circles={[{ pattern: "border" }, { pattern: "border" }]}
              />

              <CircularUI
                label="Sub-Distributor"
                circles={[{ pattern: "none" }, { pattern: "primary" }]}
              />

              <CircularUI
                label="Store Margin"
                circles={[{ pattern: "blue" }, { pattern: "none" }]}
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative rounded-none border border-zinc-200 bg-white text-gray-900 shadow-sm shadow-zinc-250/5",
      className,
    )}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-zinc-800 absolute -left-px -top-px block size-2.5 border-l-2 border-t-2 z-20"></span>
    <span className="border-zinc-800 absolute -right-px -top-px block size-2.5 border-r-2 border-t-2 z-20"></span>
    <span className="border-zinc-800 absolute -bottom-px -left-px block size-2.5 border-b-2 border-l-2 z-20"></span>
    <span className="border-zinc-800 absolute -bottom-px -right-px block size-2.5 border-b-2 border-r-2 z-20"></span>
  </>
);

interface CardHeadingProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  detail: string;
}

const CardHeading = ({
  icon: Icon,
  title,
  description,
  detail,
}: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-pink-700 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-2 bg-pink-50 border border-pink-200 w-fit px-2.5 py-1 rounded-md shadow-xs">
      <Icon className="size-3.5 text-pink-600" />
      {title}
    </span>
    <p className="text-xl font-bold text-gray-900 mt-2">{description}</p>
    <p className="text-xs text-gray-500 font-semibold leading-relaxed mt-1.5">
      {detail}
    </p>
  </div>
);

interface CircularUIProps {
  label: string;
  circles: { pattern: "none" | "border" | "primary" | "blue" }[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={cn("flex flex-col items-center", className)}>
    <div className="bg-linear-to-b from-zinc-200 to-transparent size-fit rounded-2xl p-px">
      <div className="bg-white relative flex aspect-square w-fit items-center -space-x-3 rounded-[15px] p-4 shadow-xs border border-zinc-150">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-8 rounded-full border shadow-xs", {
              "border-zinc-300 bg-white": circle.pattern === "none",
              "border-zinc-300 bg-white bg-[repeating-linear-gradient(-45deg,#d4d4d8,#d4d4d8_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-pink-500 bg-white bg-[repeating-linear-gradient(-45deg,#ec4899,#ec4899_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "border-blue-500 bg-white z-10 bg-[repeating-linear-gradient(-45deg,#3b82f6,#3b82f6_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-gray-600 mt-2 block text-center text-xs font-bold">
      {label}
    </span>
  </div>
);
