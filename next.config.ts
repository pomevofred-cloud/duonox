import type { NextConfig } from "next";

// GitHub Pages preview: `DEPLOY_TARGET=pages` produces a static export under /duonox.
// Unset (local dev / Vercel), the app runs as a normal Next.js app with image optimization.
const isPages = process.env.DEPLOY_TARGET === "pages";
const basePath = "/duonox";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: isPages
    ? {
        // Static export can't optimize; a custom loader prefixes the basePath
        // onto public image srcs (which Next otherwise omits for exported <img>).
        loader: "custom",
        loaderFile: "./src/image-loader.js",
      }
    : { formats: ["image/avif", "image/webp"] },
  ...(isPages
    ? {
        output: "export" as const,
        basePath,
        assetPrefix: `${basePath}/`,
        trailingSlash: true,
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      }
    : {}),
};

export default nextConfig;
