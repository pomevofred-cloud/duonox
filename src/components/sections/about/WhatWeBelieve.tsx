import { SectionLabel } from "@/components/ui/SectionLabel";

const beliefs = [
  {
    n: "01",
    title: "Creative That Ships",
    body: "Work stuck in review isn't work. We build to your campaign calendar and hand back finished, on-brand assets on the day we promised.",
  },
  {
    n: "02",
    title: "One Team, Every Format",
    body: "Ads, social, motion, web, 3D and copy come from the same crew, so a campaign holds together everywhere you choose to run it.",
  },
  {
    n: "03",
    title: "Brief In, Work Out",
    body: "You describe the outcome, not the process. We scope it, staff it and send back work you can use, not another round of questions.",
  },
  {
    n: "04",
    title: "AI Where It Earns Its Place",
    body: "AI takes the slow parts: resizing, versioning, first passes. Direction, craft and the final call stay with the people doing the work.",
  },
  {
    n: "05",
    title: "Your Brand, Learned Once",
    body: "We hold your guidelines, tone and campaign history, so no brief ever starts with you re-explaining the brand from scratch.",
  },
  {
    n: "06",
    title: "Priced To Plan Around",
    body: "One flat monthly rate covers the whole team. No hourly billing, no change orders, nothing to renegotiate mid-quarter.",
  },
];

export function WhatWeBelieve() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-10">What we believe</SectionLabel>
        <h2 className="display mx-auto max-w-2xl text-center text-5xl md:text-7xl">
          What We Believe
        </h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:gap-x-16">
          {beliefs.map((b) => (
            <article key={b.n} className="flex gap-5">
              <Hexagon n={b.n} />
              <div className="pt-1">
                <h3 className="text-2xl font-medium text-brand-500" style={{ fontFamily: "var(--font-google-sans)" }}>
                  {b.title}
                </h3>
                <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-muted">
                  {b.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hexagon({ n }: { n: string }) {
  return (
    <div className="relative shrink-0" style={{ width: 62, height: 68 }}>
      <svg viewBox="0 0 62 68" className="h-full w-full" aria-hidden>
        <path
          d="M31 2 57 17v34L31 66 5 51V17L31 2Z"
          fill="var(--color-brand-500)"
          stroke="var(--color-brand-700)"
          strokeWidth="1"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
        {n}
      </span>
    </div>
  );
}
