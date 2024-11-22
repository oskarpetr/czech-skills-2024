"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";
import FadeIn from "../animation/FadeIn";
import { games } from "@/utils/sampleData";
import Link from "next/link";

export default function Games() {
  const [activeGameId, setActiveGameId] = useState(games[0].id);
  const activeGame = games.find((x) => x.id === activeGameId)!;

  return (
    <div id="games" className="relative h-[calc(100vh-6rem)] w-screen">
      <Image
        alt={activeGame.name}
        src={activeGame.imageUrl}
        width={2000}
        height={0}
        className="h-full absolute z-0 object-cover"
      />

      <div className="w-1/2 h-[calc(100vh-6rem)] bg-gradient-to-r from-[#000000cc] from-30% to-transparent absolute z-0"></div>

      <div className="flex flex-col justify-between relative z-10 px-24 py-20 h-full w-fit">
        <div>
          {games.map((game, index) => (
            <Link href={game.id} key={`game_${game.name}`}>
              <FadeIn delay={index * 0.05}>
                <div
                  onMouseEnter={() => setActiveGameId(game.id)}
                  className={cn(
                    "cursor-pointer transition-all duration-300 h-20 text-white",
                    activeGameId === game.id
                      ? "text-4xl"
                      : "text-3xl opacity-50"
                  )}
                >
                  {game.name}
                </div>
              </FadeIn>
            </Link>
          ))}
        </div>

        <FadeIn delay={(games.length + 1) * 0.05} className="text-white w-96">
          {activeGame.description}
        </FadeIn>
      </div>
    </div>
  );
}
