import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  reactStrictMode: true,
  output: 'export',
  transpilePackages: [
    '@xw3/maki-ts'
  ]
};

export default nextConfig;
