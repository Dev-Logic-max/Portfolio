import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // VPS-ready from day one: standalone output lets us Dockerize later
  // (Docker + Nginx + GitHub Actions) without refactoring. No-op on Vercel.
  output: "standalone",
  reactStrictMode: true,
  // Pin the workspace root — a stray package-lock.json in the home dir was
  // making Next infer the wrong root.
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
