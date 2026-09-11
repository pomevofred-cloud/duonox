import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { WhatWeBelieve } from "@/components/sections/about/WhatWeBelieve";
import { BestReturn } from "@/components/sections/home/BestReturn";
import { Approach } from "@/components/sections/home/Approach";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { NewsletterCta } from "@/components/sections/NewsletterCta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Duonox is two disciplines at one table: editorial instinct on one side, systems thinking on the other.",
};

export default function AboutPage() {
  return (
    <>
      <Header variant="brand" />
      <main id="top">
        <AboutHero />
        <WhatWeBelieve />
        <BestReturn withFeatures={false} />
        <Approach />
        <Testimonials />
        <NewsletterCta />
      </main>
      <Footer />
    </>
  );
}
