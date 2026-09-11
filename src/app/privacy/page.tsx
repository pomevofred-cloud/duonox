import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Duonox collects, uses and protects the information you share with us.",
};

const sections = [
  {
    h: "What we collect",
    p: "When you write to us through the site, we collect the details you choose to share — your name, email, WhatsApp number, organisation, the nature of the work, and any files you attach. We also collect basic, privacy-respecting analytics about how the site is used (pages viewed and referrers), never tied to your identity.",
  },
  {
    h: "How we use it",
    p: "We use what you share only to reply to your enquiry, scope the work, and — if we go on to work together — to run the engagement and issue invoices. We do not sell your data, and we do not add you to a newsletter you did not ask for.",
  },
  {
    h: "Where it lives",
    p: "Enquiries and project records are stored in the tools we use to run the studio. Access is limited to the two people who run Duonox. We keep records for as long as we are working together and for a reasonable period afterwards, then remove what we no longer need.",
  },
  {
    h: "Analytics",
    p: "Our site uses a lightweight, cookieless tracker that counts pageviews, referrers and enquiries. It does not follow you across other sites and does not build an advertising profile.",
  },
  {
    h: "Your choices",
    p: `You can ask us at any time to show you what we hold, correct it, or delete it. Write to ${site.email} and we will action it promptly.`,
  },
  {
    h: "Changes to this policy",
    p: "If this policy changes, we will update this page and the date below. Material changes that affect how we handle your information will be highlighted.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header variant="brand" />
      <main id="top">
        <section className="bg-canvas pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="container-page max-w-3xl">
            <span className="eyebrow">Legal</span>
            <h1 className="display mt-4 text-5xl md:text-7xl">Privacy Policy</h1>
            <p className="mt-5 text-muted">
              This policy explains what {site.name} collects when you use this site or
              write to us, and what we do with it. Last updated 11 September 2026.
            </p>

            <div className="mt-12 space-y-10">
              {sections.map((s) => (
                <div key={s.h}>
                  <h2 className="text-2xl font-medium text-ink" style={{ fontFamily: "var(--font-google-sans)" }}>
                    {s.h}
                  </h2>
                  <p className="mt-3 text-[1rem] leading-relaxed text-muted">{s.p}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-[1.25rem] bg-surface p-6 shadow-card">
              <p className="text-[0.95rem] text-muted">
                Questions about your privacy? Write to{" "}
                <a href={`mailto:${site.email}`} className="font-medium text-brand-500">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
