import type { GamePlatform, GameRate } from "@/lib/constants";

export const baseUrl = "https://test.zoravu.com";

export interface ApiPointPackage {
  points: number;
  amount: string;
  amount_per_point: string;
}

export interface ApiGame {
  id: number;
  name: string;
  media: string | null;
  description: string;
  tags?: string[];
  level?: string[];
  points?: ApiPointPackage[];
}

export interface ApiPackage {
  id: number;
  points: number;
  amount: string;
}

export interface AllDataResponse {
  success: boolean;
  message: string;
  games: ApiGame[];
}

export interface FormPayload {
  game_id: number;
  point_id: number;
  full_name: string;
  method_type: string;
  phone_number: string;
  email: string;
  type: string;
  message: string;
  amount: string;
  points: string;
}

const titleCase = (value: string) =>
  value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const resolveBadge = (tags: string[] = []) => {
  if (tags.includes("featured")) return "Featured";
  if (tags.includes("premium")) return "Popular";
  if (tags.includes("jackpot")) return "Hot";
  if (tags.includes("instant")) return "Trending";
  if (tags.includes("limited")) return "New";
  return tags[0] ? titleCase(tags[0]) : undefined;
};

export const mapApiDataToPlatforms = (
  games: ApiGame[] = []
): GamePlatform[] => {
  return games.map((game) => {
    const tags = game.tags ?? [];

    const rates: GameRate[] = (game.points ?? []).map((item, index) => ({
      id: index + 1,
      points: Number(item.points),
      price: Number(item.amount),
      amountPerPoint: Number(item.amount_per_point),
    }));

    return {
      id: String(game.id),
      apiId: game.id,
      name: game.name,
      tagline: tags.length ? tags.map(titleCase).join(" / ") : "Game Platform",
      description: game.description || "",
      imageUrl: game.media || "/images/hero_sweepstakes.png",
      badge: resolveBadge(tags),
      category: tags[0] ? titleCase(tags[0]) : "Multi-game Platform",
      levels: game.level ?? ["Player", "Store", "Distributor"],
      rates,
    };
  });
};

export async function getAllData(): Promise<AllDataResponse> {
  const response = await fetch(`${baseUrl}/api/all_data`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to load API data.");
  }

  return response.json();
}

export async function getGamePlatforms() {
  const data = await getAllData();
  return {
    games: mapApiDataToPlatforms(data.games),
    packages: [] as ApiPackage[],
  };
}

export async function submitForm(payload: FormPayload) {
  const response = await fetch(`${baseUrl}/api/add_form`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.success === false) {
    throw new Error(data?.message || "Unable to submit form.");
  }

  return data;
}
