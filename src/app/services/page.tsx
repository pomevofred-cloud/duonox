import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { Disciplines } from "@/components/sections/home/Disciplines";
import { Approach } from "@/components/sections/home/Approach";
import { ProjectCards } from "@/components/sections/ProjectCards";
import { Faq } from "@/components/sections/Faq";
import { NewsletterCta } from "@/components/sections/NewsletterCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, editorial and print systems, web development, digital product and art direction — five disciplines, one room.",
};

export default function ServicesPage() {
  return (
    <>
      <Header variant="brand" />
      <main id="top">
        <ServicesHero />
        <Disciplines
          eyebrow="What we do"
          title={<>Everything we do in one room</>}
          cta={null}
        />
        <Approach />
        <section className="bg-canvas pb-16 md:pb-24">
          <div className="container-page">
            <ProjectCards />
          </div>
        </section>
        <Faq />
        <NewsletterCta />
      </main>
      <Footer />
    </>
  );
}
