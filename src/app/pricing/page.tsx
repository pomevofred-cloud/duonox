import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PricingHero } from "@/components/sections/pricing/PricingHero";
import { PricingTiers } from "@/components/sections/pricing/PricingTiers";
import { ContactMethods } from "@/components/sections/ContactMethods";
import { Faq } from "@/components/sections/Faq";
import { NewsletterCta } from "@/components/sections/NewsletterCta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three ways to work together — Project, Partnership and Advisory. Figures shared on the first reply, tailored to your scope.",
};

export default function PricingPage() {
  return (
    <>
      <Header variant="brand" />
      <main id="top">
        <PricingHero />
        <PricingTiers />
        <ContactMethods />
        <Faq />
        <NewsletterCta />
      </main>
      <Footer />
    </>
  );
}
