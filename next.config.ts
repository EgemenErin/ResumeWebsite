import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.egemenerin.com",
      },
    ],
  },
};

export default nextConfig;
