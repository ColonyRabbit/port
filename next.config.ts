import type { NextConfig } from "next";
import dotenv from "dotenv";
import path from "path";
//
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "./env/.env.local") });
//
const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com"],
  },
  env: {
    NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ข้าม ESLint เมื่อ build
  },
  experimental: {},
};

export default nextConfig;
