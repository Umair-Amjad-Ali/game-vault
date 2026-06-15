import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ApiDataProvider } from "@/components/providers/ApiDataProvider";
import { getGamePlatforms } from "@/lib/api";
import { GAME_PLATFORMS } from "@/lib/constants";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "USA Gaming Distributor",
  description:
    "Your premier sweepstakes distributor and master agent supplier for Game Vault, Vblink, Orion Stars, FireKirin, Juwa, Ultra Panda, Milky Ways, and Vegas Sweeps. Unbeatable rates, 24/7 service, and fast credit top-ups.",
  keywords: [
    "Game Vault Agent",
    "Sweepstakes Distributor",
    "Vblink Supplier",
    "Juwa Master Agent",
    "Fire Kirin Credits",
    "Orion Stars Credits",
    "Milky Ways Sweepstakes",
    "Vegas Sweeps Distributor",
    "Sweepstakes Software Supplier",
  ],
  authors: [{ name: "USA Gaming Distributor" }],
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const apiData = await getGamePlatforms().catch(() => ({
    games: GAME_PLATFORMS,
    packages: [],
  }));

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased selection:bg-pink-100 selection:text-pink-900">
        <ApiDataProvider games={apiData.games} packages={apiData.packages}>
          {/* Sticky Translucent Header */}
          <Navbar />

          {/* Render page sections inside a clean semantic main shell */}
          <main className="flex-grow">{children}</main>

          {/* Dynamic Support Contact Footer */}
          <Footer />
        </ApiDataProvider>
      </body>
    </html>
  );
}
