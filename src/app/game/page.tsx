import React, { Suspense } from "react";
import GameDetailClient from "./GameDetailClient";

export default function GameDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <GameDetailClient />
    </Suspense>
  );
}
