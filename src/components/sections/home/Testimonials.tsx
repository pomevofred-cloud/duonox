import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Stars } from "@/components/ui/Stars";

const portraits = [
  "/images/portrait-boardroom.jpg",
  "/images/portrait-doulce.jpg",
  "/images/portrait-considered.jpg",
];

export function Testimonials() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-12">Client words</SectionLabel>
        <h2 className="display mx-auto max-w-2xl text-center text-5xl md:text-7xl">
          What they said after the work.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-[0.95rem] leading-relaxed text-muted">
          Six to eight engagements a year, and the same senior hands on every one.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-[0.85fr_1.6fr] md:items-stretch">
          {/* Portrait stack */}
          <div className="flex flex-col gap-3 rounded-[1.5rem] bg-brand-500 p-3">
            {portraits.map((src) => (
              <div key={src} className="relative aspect-[16/11] overflow-hidden rounded-[1.15rem]">
                <Image src={src} alt="" fill sizes="30vw" className="object-cover" />
              </div>
            ))}
          </div>

          {/* Quote card */}
          <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-500 p-8 text-white md:p-12">
            <span
              aria-hidden
              className="pointer-events-none absolute right-8 top-2 select-none font-serif text-[10rem] leading-none text-white/10"
            >
              &rdquo;
            </span>
            {/* ND monogram */}
            <svg width="46" height="30" viewBox="0 0 46 30" fill="none" aria-hidden className="relative">
              <path d="M2 28V2l14 26V2" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
              <path d="M26 2h8a13 13 0 0 1 0 26h-8V2z" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
            </svg>

            <blockquote className="display relative mt-8 max-w-[24ch] text-2xl leading-[1.18] text-white md:text-[2.1rem]">
              &ldquo;Pixora completely changed the way we create websites. The platform
              is incredibly smooth, easy to use, and powerful enough to handle
              everything from simple landing pages to full business websites.&rdquo;
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[1.05rem] font-semibold">Doulce Yayra</p>
                <p className="text-[0.85rem] text-white/60">CEO of YDL-INVEST</p>
              </div>
              <div className="hidden h-px flex-1 bg-white/20 sm:block" />
              <div className="flex items-center gap-2">
                <Stars value={5} size={16} />
                <span className="text-sm text-white/70">(4.9)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
