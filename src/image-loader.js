// Custom next/image loader for the static GitHub Pages export.
// Static export under a basePath (/duonox) doesn't prefix public image src,
// so we prepend NEXT_PUBLIC_BASE_PATH here. Absolute URLs pass through.
export default function duonoxImageLoader({ src }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (/^https?:\/\//.test(src) || src.startsWith("data:")) return src;
  return `${base}${src}`;
}
