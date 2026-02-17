import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/Svarka',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} as any;

export default nextConfig;
