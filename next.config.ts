import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  assetPrefix: '/next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
