import { IGame } from "@/types/Game.types";

export const games: IGame[] = [
  {
    id: "1",
    name: "Stray",
    description:
      "Lost, alone and separated from family, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
    imageUrl:
      "https://annapurnainteractive.com/media/pages/games/stray/ba1c50de8e-1671338474/stray-hero-art-1920x-q80.jpg",
    tags: [{ name: "Adventure" }, { name: "3D" }],
    platforms: [
      {
        name: "Playstation",
        link: "https://www.playstation.com/cs-cz/games/stray/",
      },
    ],
    publishDate: new Date(2025, 4, 4),
  },
  {
    id: "2",

    name: "Wheel world",
    description:
      "You are Kat, a young cyclist with one mission: save Wheel World from total collapse. Explore a stunning open world filled with impressive vistas, hidden secrets, and races that will test your skills. Customize your bike with an endless array of parts, from sleek speedsters to off-road beasts—there’s no limit to how you can ride.",
    imageUrl:
      "https://www.gematsu.com/wp-content/uploads/2024/10/Wheel-World-Announce_10-17-24.jpg",
    tags: [{ name: "Fighting" }, { name: "3D" }],
    platforms: [
      {
        name: "Playstation",
        link: "https://store.playstation.com/en-us/concept/10012810",
      },
    ],
    publishDate: new Date(2025, 2, 9),
  },
  {
    id: "3",
    name: "Bounty Star",
    description:
      "Bounty Star is an over-the-shoulder 3D action game that combines mech combat and customization with farming and base building.",
    imageUrl:
      "https://annapurnainteractive.com/media/pages/games/bounty-star/f56faa3f0b-1671338494/bountystar-website-1080p-1920x-q80.jpg",
    tags: [{ name: "Action game" }, { name: "3D" }],
    platforms: [
      {
        name: "Steam",
        link: "https://store.steampowered.com/app/1497430/Bounty_Star/",
      },
    ],
    publishDate: new Date(2025, 2, 9),
  },
];
