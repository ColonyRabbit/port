import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ข้าม ESLint เมื่อ build
  },
  experimental: {},
};

export default nextConfig;
