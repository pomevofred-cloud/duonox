import localFont from "next/font/local";

/**
 * Body + UI typeface — Plus Jakarta Sans (variable weight axis 200–800).
 * Supplied in the design folder; loaded locally, no Google Fonts CDN.
 */
export const plusJakarta = localFont({
  src: [
    { path: "../fonts/PlusJakartaSans.ttf", weight: "200 800", style: "normal" },
    { path: "../fonts/PlusJakartaSans-Italic.ttf", weight: "200 800", style: "italic" },
  ],
  variable: "--font-plus-jakarta",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

/**
 * Display typeface for large headings — Google Sans Flex (variable, many axes).
 * Supplied in the design folder; loaded locally.
 */
export const googleSans = localFont({
  src: [{ path: "../fonts/GoogleSansFlex.ttf", weight: "300 800", style: "normal" }],
  variable: "--font-google-sans",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});
