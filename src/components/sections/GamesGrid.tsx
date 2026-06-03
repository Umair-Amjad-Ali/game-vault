"use client";

import React, { useState, useEffect } from "react";
import { Gamepad2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { GAME_PLATFORMS } from "@/lib/constants";
import { MasonryGrid } from "../ui/image-testimonial-grid";

// Array of 31 unique, premium, high-resolution gaming-related Unsplash image URLs
// Players can change these images later with their official branded banners
const UNSPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&auto=format&fit=crop&q=80", // 1: Orion Stars
  "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=600&auto=format&fit=crop&q=80", // 2: Game Vault 999
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80", // 3: Juwa 777
  "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&auto=format&fit=crop&q=80", // 4: Juwa 2.0
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&auto=format&fit=crop&q=80", // 5: Fire Kirin
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80", // 6: Ultra Panda
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80", // 7: Vblink
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&auto=format&fit=crop&q=80", // 8: Vegas Sweeps
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80", // 9: Panda Master
  "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=600&auto=format&fit=crop&q=80", // 10: River Sweeps
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&auto=format&fit=crop&q=80", // 11: Milkyway
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80", // 12: Milkyway 2.0
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80", // 13: E-Game
  "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80", // 14: Golden Treasure
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&auto=format&fit=crop&q=80", // 15: Yolo 777
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80", // 16: Game Room
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80", // 17: Cash Machine
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=600&auto=format&fit=crop&q=80", // 18: Lucky Stars
  "https://images.unsplash.com/photo-1612287230202-1bf1d85d1bdf?w=600&auto=format&fit=crop&q=80", // 19: Mr. All In One
  "https://images.unsplash.com/photo-1580234810907-b40315b76418?w=600&auto=format&fit=crop&q=80", // 20: Mafia
  "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80", // 21: Cash Frenzy
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80", // 22: Noble 777
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&auto=format&fit=crop&q=80", // 23: King Of Pop
  "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&auto=format&fit=crop&q=80", // 24: Gem Slots
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&auto=format&fit=crop&q=80", // 25: Win Star
  "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&auto=format&fit=crop&q=80", // 26: Vegas Luck
  "https://images.unsplash.com/photo-1601987177651-8edfe6c20009?w=600&auto=format&fit=crop&q=80", // 27: Vegas Roll
  "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=600&auto=format&fit=crop&q=80", // 28: Big Winner
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=80", // 29: Vegas X
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80", // 30: Blue Dragon
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80", // 31: Cash Vault
];

export const GamesGrid: React.FC = () => {
  const [columns, setColumns] = useState(3);

  // Hook to set columns responsively inside the masonry view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640)
        setColumns(1); // Mobile: 1 Col
      else if (width < 1024)
        setColumns(2); // Tablet: 2 Cols
      else setColumns(3); // Desktop: 3 Cols
    };

    handleResize(); // Set initial layout
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="game-platforms"
      className="relative py-8 lg:py-12 overflow-hidden bg-gray-50/50 bg-dot-pattern"
    >
      {/* Backing ambient gradient blur spheres */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-pink-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-rose-100/20 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-650">
            Our Selection
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 mt-1">
            Sweepstakes Games We Offer
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed font-semibold">
            Delve into our expansive library of high-yield sweepstakes
            platforms. We provide stable servers, instant credits, and full
            setup assistance.
          </p>
        </div>

        {/* Dynamic Masonry Game Gallery Grid displaying all 31 Platforms */}
        <div className="w-full max-w-5xl mx-auto">
          <MasonryGrid columns={columns} gap={4}>
            {GAME_PLATFORMS.map((game, index) => {
              // Assign a stable high-definition cover image from the Unsplash gallery list
              const coverImage =
                UNSPLASH_IMAGES[index % UNSPLASH_IMAGES.length];

              return (
                <div
                  key={game.id}
                  className="relative rounded-2xl overflow-hidden group border border-pink-100/40 bg-white/40 shadow-xs hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-[1.01] break-inside-avoid mb-4"
                >
                  {/* Gallery Cover Image */}
                  <img
                    src={coverImage}
                    alt={game.name}
                    className="w-full h-auto object-cover min-h-[160px] max-h-[360px] group-hover:scale-105 transition-transform duration-700 ease-in-out select-none"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/600x400/1a1a1a/ffffff?text=" +
                        encodeURIComponent(game.name);
                    }}
                  />

                  {/* Dark gradient overlay for bottom/top text visibility */}
                  <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-black/85 transition-opacity duration-300" />

                  {/* Top Overlay Area: Category Pilling */}
                  <div className="absolute top-0 left-0 p-4 w-full flex items-center justify-between pointer-events-none">
                    <span className="text-[8px] font-black tracking-widest text-white bg-pink-600/90 border border-pink-400 px-2 py-0.5 rounded uppercase">
                      {game.category}
                    </span>
                    {game.badge && (
                      <span className="text-[8px] font-black tracking-widest uppercase bg-white/95 text-gray-900 px-2 py-0.5 rounded shadow-xs">
                        {game.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom Static Text Area (Always Visible when not hovered) */}
                  <div className="absolute bottom-0 left-0 p-4 w-full text-left text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
                    <div className="flex items-center gap-1.5 mb-1 text-pink-400 font-extrabold text-[10px] tracking-wider uppercase">
                      <Gamepad2 className="w-3.5 h-3.5" />
                      <span>Active Software</span>
                    </div>
                    <h3 className="text-base font-black tracking-tight">
                      {game.name}
                    </h3>
                    <p className="text-[10px] text-gray-300 font-bold truncate mt-0.5 leading-none">
                      {game.tagline}
                    </p>
                  </div>

                  {/* Dynamic Hover Details Overlay (Reveals fully on mouse hover) */}
                  <div className="absolute inset-0 bg-gray-950/90 p-4 flex flex-col items-stretch justify-center gap-3 text-left text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <p className="text-[10.5px] text-gray-300 leading-relaxed font-semibold line-clamp-3 select-none">
                      {game.description}
                    </p>

                    {/* Action Setup Rates button */}
                    <Link
                      href={`/game/${game.id}`}
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-pink-500 hover:bg-pink-650 text-white font-extrabold text-[10px] uppercase tracking-wider transition-all duration-300 shadow-md shadow-pink-500/10 cursor-pointer active:scale-98"
                    >
                      <span>View Rates & Setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </MasonryGrid>
        </div>
      </div>
    </section>
  );
};
