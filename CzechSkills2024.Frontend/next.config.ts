import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "annapurnainteractive.com",
      },
      {
        protocol: "https",
        hostname: "i.redd.it",
      },
      {
        protocol: "https",
        hostname: "gematsu.com",
      },
      {
        protocol: "https",
        hostname: "",
      },
    ],
  },
};

export default nextConfig;
