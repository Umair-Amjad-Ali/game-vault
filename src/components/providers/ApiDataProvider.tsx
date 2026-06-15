"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { GamePlatform } from "@/lib/constants";
import type { ApiPackage } from "@/lib/api";
import { getGamePlatforms } from "@/lib/api";

interface ApiDataContextValue {
  games: GamePlatform[];
  packages: ApiPackage[];
}

const ApiDataContext = createContext<ApiDataContextValue | null>(null);

export function ApiDataProvider({
  children,
  games: initialGames,
  packages: initialPackages,
}: {
  children: React.ReactNode;
  games: GamePlatform[];
  packages: ApiPackage[];
}) {
  const [games, setGames] = useState(initialGames);
  const [packages, setPackages] = useState(initialPackages);

  useEffect(() => {
    let active = true;
    getGamePlatforms()
      .then((data) => {
        if (active) {
          setGames(data.games);
          setPackages(data.packages);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch runtime API data:", err);
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <ApiDataContext value={{ games, packages }}>
      {children}
    </ApiDataContext>
  );
}

export function useApiData() {
  const context = useContext(ApiDataContext);

  if (!context) {
    throw new Error("useApiData must be used within ApiDataProvider");
  }

  return context;
}
