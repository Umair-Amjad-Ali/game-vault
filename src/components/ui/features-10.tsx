import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, Clock } from "lucide-react";
import { ReactNode } from "react";

export function Features() {
  return (
    <section className="bg-white py-16 md:py-32 text-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2 p-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Award}
                title="Over 10 Years of Industry Presence"
                description="Proven Sweepstakes Supplier & Partner"
              />
            </CardHeader>

            <div className="relative mb-6 border-t border-dashed border-zinc-200 sm:mb-0">
              <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--primary-light),white_125%)]"></div>
              {/* Shrunk aspect from aspect-[76/59] to aspect-[76/45] */}
              <div className="aspect-76/45 p-6 flex flex-col justify-center items-center text-center relative z-10">
                <div className="text-6xl font-black text-pink-600 drop-shadow-sm select-none tracking-tight">
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

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Clock}
                title="Quality Service Around the Clock"
                description="24/7 Instant Reloads & Operations"
              />
            </CardHeader>

            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                {/* Shrunk aspect from aspect-[76/59] to aspect-[76/45] */}
                <div className="aspect-[76/45] border border-zinc-200 rounded-none bg-zinc-50 p-6 flex flex-col justify-between shadow-xs relative overflow-hidden">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider">
                      Server Status
                    </span>
                    <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-extrabold border border-green-200">
                      <span className="w-1 h-1 rounded-full bg-green-500 animate-ping" />
                      100% OPERATIONAL
                    </span>
                  </div>

                  {/* Shrunk chart height to h-18 */}
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

          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">
              Unlock The Best Tier Rates & Highest Commission Margins
            </p>

            <div className="flex justify-center gap-6 overflow-hidden">
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
}

interface FeatureCardProps {
  children: ReactNode;
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
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-pink-750 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 mb-2 bg-pink-50 border border-pink-200 w-fit px-2.5 py-1 rounded-md shadow-xs">
      <Icon className="size-3.5 text-pink-600" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold text-gray-900">{description}</p>
  </div>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-zinc-200 to-transparent size-fit rounded-2xl p-px">
      <div className="bg-white relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4 shadow-xs border border-zinc-150">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
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
    <span className="text-zinc-500 mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);
