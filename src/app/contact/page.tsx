import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ClientBar } from "@/components/sections/ClientBar";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { Faq } from "@/components/sections/Faq";
import { NewsletterCta } from "@/components/sections/NewsletterCta";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to the agency. A paragraph is enough — we reply within two working days with a precise window and a first figure.",
};

export default function ContactPage() {
  return (
    <>
      <Header variant="brand" />
      <main id="top">
        <ContactHero />
        <ClientBar />
        <ContactForm />
        <Faq />
        <NewsletterCta />
      </main>
      <Footer />
    </>
  );
}
