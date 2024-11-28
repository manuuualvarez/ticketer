import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "superb-dolphin-382.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
