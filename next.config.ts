import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "superb-dolphin-382.convex.cloud", protocol: "https" },
      // TODO: Add your custom domain here
      { hostname: "cheery-ibis-811.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
