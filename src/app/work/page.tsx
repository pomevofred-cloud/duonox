import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterCta } from "@/components/sections/NewsletterCta";
import { clients } from "@/lib/site";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work is arriving soon. In the meantime, write to us and we'll send the pieces that match what you're building.",
};

export default function WorkPage() {
  return (
    <>
      <Header variant="brand" />
      <main id="top">
        <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink text-white">
          <Image
            src="/images/waves-blue.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover object-right opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#05060f_0%,rgba(5,6,15,0.6)_50%,rgba(5,6,15,0.1)_100%)]" />

          <div className="container-page relative z-10 py-24">
            <span className="eyebrow text-brand-200">The Work</span>
            <h1 className="display mt-5 max-w-[15ch] text-6xl leading-[0.95] text-white md:text-8xl">
              Selected work, arriving soon.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              We are finishing the case studies. In the meantime, the fastest way to
              see the work is to write — we will send selected pieces that match what
              you are building.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/services" className="btn border border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
                See what we do <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-16">
              <p className="text-[0.78rem] uppercase tracking-[0.14em] text-white/40">
                Recent partners
              </p>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                {clients.map((c) => (
                  <span key={c} className="text-lg font-bold tracking-tight text-white/85 md:text-xl">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <NewsletterCta />
      </main>
      <Footer />
    </>
  );
}
