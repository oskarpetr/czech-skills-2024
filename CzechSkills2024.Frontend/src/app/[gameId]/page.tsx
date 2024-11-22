"use client";

import FadeIn from "@/components/animation/FadeIn";
import Layout from "@/components/layout/Layout";
import { games } from "@/data/games";
import { intervalToDuration } from "date-fns";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Game() {
  const { gameId } = useParams();

  // find game by id
  const game = games.find((x) => x.id === gameId);

  // if null return error
  if (game == null) {
    return <Error statusCode={404} />;
  }

  // time until release date
  const untilReleaseDate = intervalToDuration({
    start: new Date(),
    end: game.publishDate,
  });

  return (
    <Layout>
      <Head>
        <title>{game.name}</title>
        <meta property="og:title" content="Annapurna Interactive" />
        <meta property="og:description" content={game.description} />
        <meta property="og:image" content={game.imageUrl} />
      </Head>

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

          <div className="flex gap-2">
            {game.tags.map((tag, index) => (
              <FadeIn
                key={tag.name}
                className="px-6 py-2 text-white border border-white rounded-full"
                delay={0.15}
              >
                {tag.name}
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-white opacity-50">Until release</div>
            <div className="text-white text-xl">
              {untilReleaseDate.years ?? 0} roků, {untilReleaseDate.months ?? 0}{" "}
              měsíců, {untilReleaseDate.days ?? 0} dní,{" "}
              {untilReleaseDate.hours ?? 0} hodin
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
