"use client";

import FadeIn from "@/components/animation/FadeIn";
import Layout from "@/components/layout/Layout";
import { games } from "@/utils/sampleData";
import Error from "next/error";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Game() {
  const { gameId } = useParams();

  const game = games.find((x) => x.id === gameId);

  if (game == null) {
    return <Error statusCode={404} />;
  }

  return (
    <Layout>
      <div className="relative h-[calc(100vh-6rem)] w-screen">
        <Image
          alt={game.name}
          src={game.imageUrl}
          width={2000}
          height={0}
          className="h-full absolute z-0 object-cover"
        />

        <div className="w-1/2 h-[calc(100vh-6rem)] bg-gradient-to-r from-[#000000cc] from-30% to-transparent absolute z-0"></div>

        <div className="flex flex-col gap-8 relative z-10 px-24 py-20 h-full w-fit">
          <FadeIn className="text-4xl text-white">{game.name}</FadeIn>
          <FadeIn delay={0.1} className="text-white w-96 text-opacity-50">
            {game.description}
          </FadeIn>

          {game.tags.map((tag, index) => (
            <FadeIn
              key={tag.name}
              className="px-6 py-2 text-white"
              delay={0.05 * index + 0.1}
            >
              {tag.name}
            </FadeIn>
          ))}
        </div>
      </div>
    </Layout>
  );
}