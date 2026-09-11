import type { Metadata, Viewport } from "next";
import { plusJakarta, googleSans } from "./fonts";
import { site } from "@/lib/site";
import { BookingProvider } from "@/components/booking/BookingProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} – ${site.tagline}`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  keywords: [
    "creative agency",
    "brand identity",
    "branding studio",
    "editorial design",
    "web design",
    "art direction",
    "visual identity",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    url: `https://${site.domain}/`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2115db",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${googleSans.variable}`}>
      <body>
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
