import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Check, ArrowRight } from "@/components/icons";

const tiers = [
  {
    name: "Project",
    blurb: "A defined brief with a start and an end.",
    points: [
      "Fixed scope, agreed up front",
      "Four phases with written deliverables",
      "50 / 40 / 10 milestone billing",
      "Ninety days of aftercare included",
    ],
    note: "Figures on first reply",
    featured: false,
  },
  {
    name: "Partnership",
    blurb: "Ongoing design capacity, month to month.",
    points: [
      "A standing share of studio time",
      "Priority in the schedule",
      "Billed monthly in advance",
      "Pause or stop with 30 days' notice",
    ],
    note: "Monthly, in advance",
    featured: true,
  },
  {
    name: "Advisory",
    blurb: "Direction without the build.",
    points: [
      "Identity and campaign audits",
      "Critique and coaching sessions",
      "Embedded direction for in-house teams",
      "Half-day and day rates",
    ],
    note: "Rate on first reply",
    featured: false,
  },
];

export function PricingTiers() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-10">How we engage</SectionLabel>
        <h2 className="display mx-auto max-w-2xl text-center text-5xl md:text-7xl">
          Three ways to work together.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-[0.95rem] leading-relaxed text-muted">
          Figures are shared privately on the first reply, tailored to scope rather
          than stamped onto a tier.
        </p>

        <div className="mt-12 grid items-start gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`relative flex flex-col rounded-[1.5rem] p-7 ${
                t.featured
                  ? "bg-brand-500 text-white shadow-float md:-mt-4 md:pb-9 md:pt-10"
                  : "card text-ink"
              }`}
            >
              {t.featured && (
                <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-[0.72rem] font-medium">
                  Most common
                </span>
              )}
              <h3 className="text-2xl font-medium" style={{ fontFamily: "var(--font-google-sans)" }}>
                {t.name}
              </h3>
              <p className={`mt-1.5 text-[0.95rem] ${t.featured ? "text-white/80" : "text-muted"}`}>
                {t.blurb}
              </p>

              <ul className="mt-6 space-y-3.5">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[0.92rem]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-white" : "text-brand-500"}`}
                    />
                    <span className={t.featured ? "text-white/90" : "text-ink-soft"}>{p}</span>
                  </li>
                ))}
              </ul>

              <p className={`mt-7 text-[0.85rem] ${t.featured ? "text-white/70" : "text-muted-2"}`}>
                {t.note}
              </p>
              <Link
                href="/contact"
                className={`btn mt-4 w-full ${
                  t.featured ? "bg-white text-brand-500 hover:bg-white/90" : "btn-primary"
                }`}
              >
                Ask for a figure <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
