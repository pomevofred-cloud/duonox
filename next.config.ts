import type { NextConfig } from "next";

// GitHub Pages preview: `DEPLOY_TARGET=pages` produces a static export under /duonox.
// Unset (local dev / Vercel), the app runs as a normal Next.js app.
const isPages = process.env.DEPLOY_TARGET === "pages";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: isPages
    ? { unoptimized: true }
    : { formats: ["image/avif", "image/webp"] },
  ...(isPages
    ? {
        output: "export" as const,
        basePath: "/duonox",
        assetPrefix: "/duonox/",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
