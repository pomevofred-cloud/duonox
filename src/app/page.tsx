import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/home/Hero";
import { ClientBar } from "@/components/sections/ClientBar";
import { StudioBuilt } from "@/components/sections/home/StudioBuilt";
import { AboutStatement } from "@/components/sections/home/AboutStatement";
import { Disciplines } from "@/components/sections/home/Disciplines";
import { BestReturn } from "@/components/sections/home/BestReturn";
import { Approach } from "@/components/sections/home/Approach";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { NewsletterCta } from "@/components/sections/NewsletterCta";

export default function Home() {
  return (
    <>
      <Header variant="light" />
      <main id="top">
        <Hero />
        <ClientBar />
        <StudioBuilt />
        <AboutStatement />
        <Disciplines />
        <BestReturn />
        <Approach />
        <Testimonials />
        <Faq />
        <NewsletterCta />
      </main>
      <Footer />
    </>
  );
}
