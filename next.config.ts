import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // serverExternalPackages: ["mongoose"], // Correct key
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
