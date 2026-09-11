import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

type Variant = "blue" | "cream" | "lavender" | "white" | "dark" | "photo";

type Card = {
  tag: string;
  title: string;
  desc: string;
  variant: Variant;
  image?: string;
};

const cards: Card[] = [
  {
    tag: "Identity",
    title: "Brand identity & wordmarks",
    desc: "A system that helps an organisation be recognised and trusted by the people it cares about.",
    variant: "blue",
  },
  {
    tag: "Editorial",
    title: "Editorial & print systems",
    desc: "Books, monographs, reports and catalogues. The slow disciplines, set with attention to the grid.",
    variant: "cream",
  },
  {
    tag: "Web",
    title: "Web development",
    desc: "Hand-coded marketing sites and portfolios. The design and the live thing are the same thing.",
    variant: "lavender",
  },
  {
    tag: "Product",
    title: "Digital & product",
    desc: "Product surfaces, design systems and the interfaces that make complex things feel obvious.",
    variant: "white",
  },
  {
    tag: "Direction",
    title: "Art direction & consulting",
    desc: "An outside set of eyes for in-house teams: campaign direction, identity audits, coaching.",
    variant: "dark",
  },
  {
    tag: "Next step",
    title: "Not sure which you need?",
    desc: "Send a paragraph. We will tell you what the brief actually calls for, and what it does not.",
    variant: "photo",
    image: "/images/feat-blanket.jpg",
  },
];

export function Disciplines({
  eyebrow = "What we do",
  title = (
    <>
      Five disciplines,
      <br /> one room.
    </>
  ),
  intro = "A small studio doesn't pretend to do everything. We do these five things, with the same hands from brief to handover.",
  cta = { label: "See all capabilities", href: "/services" },
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  cta?: { label: string; href: string } | null;
}) {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-12">{eyebrow}</SectionLabel>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
          <h2 className="display text-5xl md:text-7xl">{title}</h2>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-muted md:mb-2">
            {intro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <DisciplineCard key={c.title} card={c} />
          ))}
        </div>

        {cta && (
          <div className="mt-10 flex justify-center">
            <Link href={cta.href} className="btn btn-primary">
              {cta.label} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function DisciplineCard({ card }: { card: Card }) {
  const styles: Record<Variant, string> = {
    blue: "bg-brand-600 text-white",
    cream: "bg-cream text-ink",
    lavender: "bg-lavender text-ink",
    white: "card text-ink",
    dark: "bg-ink text-white",
    photo: "text-white",
  };
  const tagStyles: Record<Variant, string> = {
    blue: "bg-white text-ink",
    cream: "bg-white text-ink-soft",
    lavender: "bg-white text-ink-soft",
    white: "bg-brand-500 text-white",
    dark: "bg-white/15 text-white",
    photo: "bg-white/20 text-white backdrop-blur-sm",
  };
  const arrowDark = card.variant === "cream" || card.variant === "lavender" || card.variant === "white";

  return (
    <article
      className={`relative flex min-h-[340px] flex-col overflow-hidden rounded-[1.5rem] p-6 ${styles[card.variant]}`}
    >
      {card.variant === "blue" && <Arcs />}
      {card.variant === "photo" && card.image && (
        <>
          <Image src={card.image} alt="" fill sizes="33vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
        </>
      )}

      <div className="relative flex items-start justify-between">
        <span className={`rounded-full px-3.5 py-1.5 text-[0.78rem] font-medium ${tagStyles[card.variant]}`}>
          {card.tag}
        </span>
        <span
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white ${
            arrowDark ? "text-brand-500" : "text-ink"
          }`}
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="relative mt-auto pt-20">
        <h3 className="text-[1.35rem] font-medium" style={{ fontFamily: "var(--font-google-sans)" }}>
          {card.title}
        </h3>
        <p className={`mt-2 text-[0.9rem] leading-relaxed ${card.variant === "white" || card.variant === "cream" || card.variant === "lavender" ? "text-muted" : "text-white/75"}`}>
          {card.desc}
        </p>
      </div>
    </article>
  );
}

/** Concentric arcs emanating from the top-left (Brand identity card). */
function Arcs() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="none" viewBox="0 0 400 340">
      {[80, 150, 220, 290, 360].map((r) => (
        <circle key={r} cx="0" cy="10" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="18" />
      ))}
    </svg>
  );
}
