import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Svarka',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
