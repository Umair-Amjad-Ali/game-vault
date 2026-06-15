import React from "react";
import GameDetailClient from "./GameDetailClient";
import { GAME_PLATFORMS } from "@/lib/constants";
import { getAllData } from "@/lib/api";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const staticIds = GAME_PLATFORMS.map((game) => ({ id: game.id }));
  try {
    const apiData = await getAllData().catch(() => null);
    if (apiData && apiData.games) {
      const apiIds = apiData.games.map((game) => ({ id: String(game.id) }));
      const allPaths = [...staticIds, ...apiIds];
      // Deduplicate the routes
      const uniquePaths = Array.from(new Set(allPaths.map((p) => p.id))).map((id) => ({ id }));
      return uniquePaths;
    }
  } catch (error) {
    // Fallback to static fallback platforms if API fails
  }
  return staticIds;
}

export default function GameDetailPage() {
  return <GameDetailClient />;
}
