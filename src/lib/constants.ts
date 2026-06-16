export interface ContactInfo {
  whatsapp: {
    label: string;
    value: string;
    url: string;
  };
  telegram: {
    label: string;
    value: string;
    url: string;
  };
  signal: {
    label: string;
    value: string;
    username: string;
    url: string;
  };
  email: {
    label: string;
    value: string;
    url: string;
  };
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: "Award" | "Clock" | "TrendingUp";
}

export interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  iconName:
    | "MessageSquare"
    | "DollarSign"
    | "Share2"
    | "BarChart3"
    | "Layers"
    | "RefreshCw";
}

export interface GameRate {
  id?: number;
  points: string | number;
  price: number;
  amountPerPoint?: number;
}

export interface GamePlatform {
  id: string;
  apiId?: number;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  badge?: string;
  category: string;
  levels: string[];
  rates: GameRate[];
}

export const CONTACT_INFO: ContactInfo = {
  whatsapp: {
    label: "WhatsApp",
    value: "+1 347-690-3982",
    url: "https://wa.me/13476903982",
  },
  telegram: {
    label: "Telegram",
    value: "@USAGamingDistributor",
    url: "https://t.me/USAGamingDistributor",
  },
  signal: {
    label: "Signal",
    value: "+1 347-690-3982",
    username: "USAGD.25",
    url: "https://signal.me/#p/+13476903982",
  },
  email: {
    label: "Email",
    value: "USAGamingDistributor@gmail.com",
    url: "mailto:USAGamingDistributor@gmail.com",
  },
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Game Platforms", href: "/#game-platforms" },
  { label: "Become a Distributor", href: "/become-a-distributor" },
  { label: "Why Us", href: "/#why-us" },
  { label: "How to Start", href: "/#how-to-start" },
];

type ApiGame = {
  id: number;
  name: string;
  media: string;
  description?: string;
  tags?: string[];
};

export const mapApiGameToPlatform = (game: ApiGame): GamePlatform => {
  return {
    id: String(game.id),
    name: game.name,
    tagline: game.tags?.join(" • ") || "Game Platform",
    description: game.description || "",
    imageUrl: game.media,
    badge: "Popular", // default (you can improve later with logic)
    category: "Fish & Slots", // default fallback (or map from tags later)
    levels: ["Distributor", "Sub-Distributor"],
    rates: [],
  };
};

////////////////////////////////////////////////////////////
export const FEATURES: FeatureItem[] = [
  {
    id: "experience",
    title: "4+ Years of Experience",
    description:
      "Leveraging over 4 years of dedicated industry experience, we specialize as an efficient supplier in Game Vault game credits and a range of other casino software games to sweepstakes distributors. Our focused presence has established us as a trusted and reliable name in the gaming market, particularly in distributing Vblink, Juwa, Orion Stars, Fire Kirin, Milky Ways, and more.",
    iconName: "Award",
  },
  {
    id: "service",
    title: "Quality Service Around the Clock",
    description:
      "Dedicated to excellence, our 24/7 service guarantees uninterrupted access to gaming credits, including popular titles like Juwa, Milky Ways, Game Vault, Ultra Panda, and Fire Kirin. This unwavering commitment ensures that as a gaming distributor, you receive the support and resources necessary for seamless operations, reflecting our dedication to quality and customer satisfaction.",
    iconName: "Clock",
  },
  {
    id: "rates",
    title: "Unbeatable Rates To Boost Profits",
    description:
      "We pride ourselves on offering the most competitive rates in the market as a supplier for Vblink and other gaming credits. Our aim is to boost your profitability and enhance your competitive edge in the market. Whether you're distributing Juwa, Orion Stars, Milky Ways, Game Vault, Ultra Panda, or Fire Kirin, we ensure you get the best value for your investment, helping your business grow and thrive.",
    iconName: "TrendingUp",
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    id: "step-contact",
    stepNumber: "01",
    title: "Contact Us",
    description:
      "Reach out to our team, and an authorized distributor will get in touch to address all your setup and rate inquiries.",
    iconName: "MessageSquare",
  },
  {
    id: "step-rates",
    stepNumber: "02",
    title: "Receive Our Rates",
    description:
      "Review our high-profit distributor tier rates and select the credit packages that suit your business scale best.",
    iconName: "DollarSign",
  },
  {
    id: "step-marketing",
    stepNumber: "03",
    title: "Social Marketing",
    description:
      "We provide you with ultra-premium digital game flyers, posters, and marketing assets to attract local players and agents.",
    iconName: "Share2",
  },
  {
    id: "step-reporting",
    stepNumber: "04",
    title: "Reporting & Analysis",
    description:
      "Upon payment confirmation, credits are instantly added to your distributor portal with clear accounting statements.",
    iconName: "BarChart3",
  },
  {
    id: "step-distribute",
    stepNumber: "05",
    title: "Distribute Credits",
    description:
      "Easily set up sub-agents under your management portal and directly fund player accounts to start earning instant commissions.",
    iconName: "Layers",
  },
  {
    id: "step-topup",
    stepNumber: "06",
    title: "Top Up",
    description:
      "Whenever you run low, contact us via WhatsApp, Telegram, or email to swiftly top up your credits 24/7 with zero downtime.",
    iconName: "RefreshCw",
  },
];

export let GAME_PLATFORMS: GamePlatform[] = [
  {
    id: "orion-stars",
    name: "Orion Stars",
    tagline: "Interstellar Reel Slots & Fish",
    description:
      "Orion Stars is an online gaming platform featuring fish-shooting, slot, and arcade-style games that offer fast-paced entertainment and multiplayer gameplay.",
    imageUrl: "/images/game_orionstars.png",
    badge: "Popular",
    category: "Fish & Slots",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [],
  },
  {
    id: "game-vault-999",
    name: "Game Vault 999",
    tagline: "The Ultimate Sweepstakes Console",
    description:
      "Game Vault 999 is a popular gaming platform featuring a variety of slot, arcade, and interactive games with easy access across multiple devices.",
    imageUrl: "/images/game_gamevault.png",
    badge: "Featured",
    category: "Fish & Slots",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "juwa-777",
    name: "Juwa 777",
    tagline: "Elite Slots & Dynamic Arcade",
    description:
      "Juwa 777 is a premier free social gaming platform and mobile gaming app designed for Android and iOS devices. Juwa offers an extensive collection of over 100 casino games and arcade games, including classic slot games, thrilling fish shooting games, and engaging keno experiences.",
    imageUrl: "/images/game_juwa.png",
    badge: "Trending",
    category: "Slots & Arcade",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "juwa-2",
    name: "Juwa 2.0",
    tagline: "Vibrant Mobile Agent System",
    description:
      "Juwa 2.0 is a mobile gaming platform and agent system that supports a wide range of casino-style and arcade games, including slots, fish shooting, and keno. It is designed for authorized agents to manage accounts and provide access to the Juwa gaming experience on Android and iOS devices.",
    imageUrl: "/images/game_juwa.png",
    badge: "New",
    category: "Slots & Arcade",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "fire-kirin",
    name: "Fire Kirin",
    tagline: "The Classic Fish Hunting Phenomenon",
    description:
      "Fire Kirin is a sweepstakes-style gaming platform offering fish games, slots, and keno, designed for mobile and online play with an easy-to-use and engaging experience.",
    imageUrl: "/images/game_firekirin.png",
    badge: "Classic",
    category: "Fish & Slots",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,000", price: 130 },
      { points: "5,000", price: 600 },
      { points: "10,000", price: 1100 },
    ],
  },
  {
    id: "ultra-panda",
    name: "Ultra Panda",
    tagline: "Vibrant Oriental Slot Adrenaline",
    description:
      "Ultra Panda, the ultimate online mobile sweepstakes gaming experience! Get ready to embark on a thrilling adventure filled with exciting games and big wins.",
    imageUrl: "/images/game_ultrapanda.png",
    badge: "New",
    category: "Classic Sweepstakes",
    levels: ["Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "vblink",
    name: "Vblink",
    tagline: "High-Impact Mobile Fish & Slots",
    description:
      "Vblink777 is a well-known online gaming platform and is a house for over 100 different types of games. These games include table games, slot machine games, fishing and other arcade games. This app can be accessed on different devices including Android, iOS and PC to make sure everyone has access to quality casino games.",
    imageUrl: "/images/game_vblink.png",
    badge: "Hot",
    category: "Fish & Slots",
    levels: ["Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "vegas-sweeps",
    name: "Vegas Sweeps",
    tagline: "Authentic Vegas Casino Action",
    description:
      "Vegas Sweeps is a sweepstakes-style gaming platform featuring a variety of casino-inspired games, including slots, fish games, and keno. It offers an entertaining and easy-to-use experience designed for mobile and online play.",
    imageUrl: "/images/game_vegassweeps.png",
    badge: "Popular",
    category: "Classic Sweepstakes",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "panda-master",
    name: "Panda Master",
    tagline: "Premium Multi-line Reel Slots",
    description:
      "Panda Master is a fun, fast-paced arcade gaming platform packed with exciting fish shooting action, flashy effects, and nonstop rewards. Jump in, blast through levels, and enjoy a colorful world of competitive multiplayer fun right on your phone.",
    imageUrl: "/images/game_pandamaster.png",
    badge: "Trending",
    category: "Fish & Slots",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,000", price: 120 },
      { points: "5,000", price: 550 },
      { points: "10,000", price: 1000 },
    ],
  },
  {
    id: "river-sweeps",
    name: "River Sweeps",
    tagline: "Mobile Arcade Reels & Fish",
    description:
      "River Sweeps is a mobile arcade gaming platform featuring exciting fish shooting and casino-style games with fast action, vibrant visuals, and fun bonus rounds designed for nonstop entertainment.",
    imageUrl: "/images/game_vblink.png",
    badge: "Hot",
    category: "Slots & Arcade",
    levels: ["Distributor", "Shop"],
    rates: [
      { points: "1,000", price: 140 },
      { points: "5,000", price: 650 },
      { points: "10,000", price: 1200 },
    ],
  },
  {
    id: "milkyway",
    name: "Milkyway",
    tagline: "Deep Space Slot Treasures",
    description:
      "Milkyway lets you enjoy exciting fish games, reels, keno, and much more, all in one action-packed gaming app designed for endless fun and entertainment.",
    imageUrl: "/images/game_milkyways.png",
    badge: "Popular",
    category: "Slots & Arcade",
    levels: ["Sub-Distributor", "Store"],
    rates: [
      { points: "1,000", price: 160 },
      { points: "5,000", price: 750 },
      { points: "10,000", price: 1400 },
    ],
  },
  {
    id: "e-game",
    name: "E-Game",
    tagline: "Fast Mobile Arcade & Slots",
    description:
      "E-Game is a mobile gaming platform offering a variety of arcade-style and casino-inspired games, including fish shooting, slots, and keno. It delivers smooth, fast-paced gameplay with colorful visuals and a fun, interactive experience for mobile users.",
    imageUrl: "/images/game_vegassweeps.png",
    badge: "New",
    category: "Slots & Arcade",
    levels: ["Distributor"],
    rates: [
      { points: "1,000", price: 130 },
      { points: "5,000", price: 600 },
      { points: "10,000", price: 1000 },
    ],
  },
  {
    id: "golden-treasure",
    name: "Golden Treasure",
    tagline: "Underwater Slot Adventure",
    description:
      "Golden Treasure is a high-energy arcade gaming platform packed with explosive fish shooting action, lucky spins, and thrilling keno games. Dive into vibrant underwater battles, unlock big bonuses, and enjoy nonstop excitement where every round feels like a win waiting to happen.",
    imageUrl: "/images/game_gamevault.png",
    badge: "Featured",
    category: "Fish & Slots",
    levels: ["Distributor"],
    rates: [
      { points: "1,000", price: 130 },
      { points: "5,000", price: 600 },
      { points: "10,000", price: 1100 },
    ],
  },
  {
    id: "yolo-777",
    name: "Yolo 777",
    tagline: "Dynamic Web 777 Console",
    description:
      "YOLO 777 a new ground breaking online gaming system that allow users to play their favourite 777 games on Web Browsers, Android & iOS devices. There are 100+ different games available to play on Yolo777 platform from various categories such as video games, cards, fishing, slots, keno games and many more.",
    imageUrl: "/images/game_juwa.png",
    badge: "New",
    category: "Multi-game Platform",
    levels: ["Distributor", "Store"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
  {
    id: "game-room",
    name: "Game Room",
    tagline: "Action Slots & Fish hunting",
    description:
      "GameRoom 777 is an action-packed gaming platform featuring exciting fish games, thrilling slots, and interactive arcade-style entertainment. With colorful graphics, rewarding gameplay, and endless chances for fun, every session brings a new adventure and exciting surprises.",
    imageUrl: "/images/game_orionstars.png",
    badge: "Popular",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "cash-machine",
    name: "Cash Machine",
    tagline: "High Energy Reels & Mini Games",
    description:
      "Cash Machine is a high-energy arcade gaming platform featuring exciting fish games, slots, and fast-paced mini games. Spin, shoot, and win your way through colorful gameplay filled with big rewards, bonus rounds, and nonstop entertainment.",
    imageUrl: "/images/game_vblink.png",
    badge: "Hot",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "lucky-stars",
    name: "Lucky Stars",
    tagline: "Vibrant Fish & Slot Spins",
    description:
      "Lucky Stars is a fun, fast-paced gaming platform featuring exciting fish games, slots, and arcade-style action. Dive into vibrant gameplay, hit bonus rounds, and enjoy nonstop entertainment where every spin and shot brings a chance at something lucky.",
    imageUrl: "/images/game_pandamaster.png",
    badge: "Trending",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "mr-all-in-one",
    name: "Mr. All In One",
    tagline: "All-in-One Multi-Game Shell",
    description:
      "Mr. All In One is an all-in-one gaming platform featuring fish games, slots, keno, and arcade-style entertainment in a single app.",
    imageUrl: "/images/game_vegassweeps.png",
    badge: "New",
    category: "Multi-game Platform",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "mafia",
    name: "Mafia",
    tagline: "Multiplayer Fish Battles",
    description:
      "Mafia Game is an action-packed arcade gaming platform where players dive into intense fish battles, spin thrilling slots, and enjoy nonstop multiplayer excitement with big rewards and fast gameplay.",
    imageUrl: "/images/game_orionstars.png",
    badge: "Popular",
    category: "Slots & Arcade",
    levels: ["Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "cash-frenzy",
    name: "Cash Frenzy",
    tagline: "Explosive Slots & Lucky Spins",
    description:
      "Cash Frenzy is a thrilling arcade-style gaming platform packed with explosive fish games, lucky spins, and nonstop bonus action where every round brings fast wins and big excitement.",
    imageUrl: "/images/game_juwa.png",
    badge: "Trending",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "noble-777",
    name: "Noble 777",
    tagline: "Noble Casino-inspired Reels",
    description:
      "Noble777 is a sweepstakes-style gaming platform offering a wide variety of casino-inspired games including slots, fish shooting, keno, and table games, designed for smooth mobile and online play with fast-paced entertainment and bonus features.",
    imageUrl: "/images/game_gamevault.png",
    badge: "Featured",
    category: "Multi-game Platform",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "king-of-pop",
    name: "King Of Pop",
    tagline: "Loud, Fast Chart-topper Reels",
    description:
      "King of Pop, where the screen lights up, the action never slows down, and every spin feels like a hit single dropping. Dive into wild fish battles, spin flashing reels, and chase bonus rounds that hit harder than a chart-topper. It’s loud, it’s fast, and it’s all about big moments and even bigger wins.",
    imageUrl: "/images/game_vblink.png",
    badge: "Hot",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "gem-slots",
    name: "Gem Slots",
    tagline: "Dazzling Jewel-themed Reels",
    description:
      "Gem Slots is a vibrant casino-style slot game featuring dazzling jewel-themed reels, exciting bonus spins, and fast-paced gameplay. Spin through sparkling gem combinations and enjoy colorful animations with rewarding win features.",
    imageUrl: "/images/game_pandamaster.png",
    badge: "Trending",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "win-star",
    name: "Win Star",
    tagline: "Mobile Slots & Fish shooting",
    description:
      "Win Star is a mobile gaming platform offering a wide selection of casino-style games including slots, fish shooting, keno, and arcade games. It features fast-paced gameplay, colorful visuals, and exciting bonus rewards for nonstop entertainment.",
    imageUrl: "/images/game_vegassweeps.png",
    badge: "New",
    category: "Multi-game Platform",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "vegas-luck",
    name: "Vegas Luck",
    tagline: "Authentic Vegas Casino Slots",
    description:
      "Vegas Luck is a Vegas-themed gaming platform featuring exciting slots, fish shooting games, keno, and arcade-style entertainment. It delivers fast-paced gameplay, bright casino visuals, and bonus rewards for nonstop mobile fun.",
    imageUrl: "/images/game_gamevault.png",
    badge: "Popular",
    category: "Multi-game Platform",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "vegas-roll",
    name: "Vegas Roll",
    tagline: "Rolling Jackpot Spinners",
    description:
      "Vegas Roll is a high-energy casino-style gaming platform packed with thrilling slots, lucky spins, and fast-paced arcade games where every roll brings exciting bonus rewards and big win potential.",
    imageUrl: "/images/game_vblink.png",
    badge: "Hot",
    category: "Slots & Arcade",
    levels: ["Master", "Distributor", "Sub-Distributor"],
    rates: [
      { points: "1,005", price: 90 },
      { points: "5,005", price: 400 },
      { points: "10,005", price: 700 },
    ],
  },
  {
    id: "big-winner",
    name: "Big Winner",
    tagline: "Big Jackpot Energy Slots",
    description:
      "Big Winner is a fast-paced gaming platform built around big jackpot energy, featuring slots, fish games, and keno with high-reward moments and nonstop action.",
    imageUrl: "/images/game_orionstars.png",
    badge: "Popular",
    category: "Classic Sweepstakes",
    levels: ["Distributor", "Store"],
    rates: [
      { points: "1,000", price: 100 },
      { points: "5,000", price: 450 },
      { points: "10,000", price: 800 },
    ],
  },
  {
    id: "vegas-x",
    name: "Vegas X",
    tagline: "High Energy Vegas Slots & Reels",
    description:
      "Vegas X is a high-energy Vegas-style gaming platform where the action never stops. Jump into flashing slot reels, explosive fish battles, and fast arcade games packed with bonus wins, big moments, and nonstop entertainment.",
    imageUrl: "/images/game_vegassweeps.png",
    badge: "Classic",
    category: "Slots & Arcade",
    levels: ["Operator", "Shop"],
    rates: [
      { points: "1,000", price: 150 },
      { points: "5,000", price: 700 },
      { points: "10,000", price: 1300 },
    ],
  },
  {
    id: "blue-dragon",
    name: "Blue Dragon",
    tagline: "Vibrant Fish Shooting Battles",
    description:
      "Blue Dragon is a fast-paced arcade gaming platform featuring exciting fish shooting battles, slot games, and colorful bonus rounds. Dive into vibrant gameplay, take on challenging rounds, and enjoy nonstop action with big win moments and fun surprises.",
    imageUrl: "/images/game_milkyways.png",
    badge: "New",
    category: "Fish & Slots",
    levels: ["Distributor"],
    rates: [
      { points: "1,000", price: 140 },
      { points: "5,000", price: 650 },
      { points: "10,000", price: 1200 },
    ],
  },
  {
    id: "cash-vault",
    name: "Cash Vault",
    tagline: "Crack Open The Multiplier Vault",
    description:
      "With Cash Vault, crack open the vault, trigger big bonus wins, and enjoy nonstop thrills where every spin and shot feels like a jackpot waiting to happen.",
    imageUrl: "/images/game_gamevault.png",
    badge: "Featured",
    category: "Fish & Slots",
    levels: ["Distributor"],
    rates: [
      { points: "1,000", price: 100 },
      { points: "5,000", price: 450 },
      { points: "10,000", price: 800 },
    ],
  },
  {
    id: "mega-spin",
    name: "Mega Spin",
    tagline: "Pure Chaotic Slot Adrenaline",
    description:
      "Mega Spin is pure chaos in the best way. Spin the reels, blast through fish battles, and chase wild bonus rounds where anything can happen. Big wins, flashing lights, and nonstop action keep every second feeling like a jackpot waiting to drop.",
    imageUrl: "/images/game_juwa.png",
    badge: "Mega",
    category: "Fish & Slots",
    levels: ["Sub-Distributor"],
    rates: [
      { points: "1,000", price: 110 },
      { points: "5,000", price: 500 },
      { points: "10,000", price: 900 },
    ],
  },
];

export const mapGameFromApi = (game: ApiGame): GamePlatform => {
  return {
    id: String(game.id),
    name: game.name,
    tagline: game.tags?.join(" • ") || "",
    description: game.description || "",
    imageUrl: game.media,
    badge: undefined,
    category: "Multi-game Platform",
    levels: game.tags ?? [],
    rates: [],
  };
};
