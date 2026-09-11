import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Design assets are served locally from /public; no remote loaders needed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
