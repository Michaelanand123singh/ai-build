import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-ignore - This is needed to fix the root inference issue mentioned in logs
    turbopack: {
      root: ".",
    },
  },
};

export default nextConfig;
