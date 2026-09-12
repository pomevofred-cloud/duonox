import Link from "next/link";
import Image from "next/image";
import { Stars } from "@/components/ui/Stars";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { BookDiscoveryButton } from "@/components/booking/BookDiscoveryButton";
import { CountUp, Reveal } from "@/components/anim";
import { ArrowRight, Plus, Minus } from "@/components/icons";

const avatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a6.jpg",
  "/images/avatars/a3.jpg",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background photo */}
      <Image
        src="/images/hero-desk.jpg"
        alt="The Duonox studio at work"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,20,0.72)_0%,rgba(6,8,20,0.35)_45%,rgba(6,8,20,0.15)_100%)]" />

      <div className="container-page relative z-10 pt-28 pb-14 md:pt-36 md:pb-24">
        {/* Trusted pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/95 py-1.5 pl-1.5 pr-4 text-ink shadow-md">
          <AvatarStack avatars={avatars} size={26} />
          <span className="text-[0.82rem] font-medium">Trusted by 40+ founders</span>
        </div>

        <h1 className="display mt-6 text-[3.4rem] leading-[0.95] text-white sm:text-7xl md:text-[6.2rem]">
          Where vision
          <br />
          becomes
          <br />
          identity.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-[1.05rem]">
          Premium brand identities, editorial systems and digital experiences for
          founders who care about every detail.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BookDiscoveryButton className="btn btn-primary" />
          <Link
            href="/work"
            className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            See selected work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Floating cards */}
        <div className="mt-14 flex flex-wrap gap-4 md:mt-24 md:justify-end">
          <Reveal className="card w-[16rem] p-5 text-ink" delay={80}>
            <p className="text-[0.8rem] text-muted">Client rating</p>
            <div className="mt-1 flex items-end gap-1">
              <CountUp value={4.8} decimals={1} className="display text-5xl font-semibold text-ink" />
              <span className="mb-1.5 text-sm text-muted-2">/5</span>
            </div>
            <Stars value={5} size={14} className="mt-1" />
            <p className="mt-2 text-[0.8rem] leading-snug text-muted">
              Across 40+ founder-led engagements.
            </p>
          </Reveal>

          <Reveal className="card w-[17rem] p-5 text-ink" delay={200}>
            <div className="space-y-2">
              <DiscPill label="Identity" />
              <DiscPill label="Editorial" active />
              <DiscPill label="Web & product" />
            </div>
            <p className="mt-3 text-[0.8rem] text-muted">Five disciplines, one room.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DiscPill({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span
        className={`rounded-full px-4 py-2 text-[0.85rem] font-medium ${
          active ? "bg-brand-500 text-white" : "bg-canvas text-ink-soft"
        }`}
      >
        {label}
      </span>
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
          active ? "bg-brand-500 text-white" : "bg-canvas text-ink-soft"
        }`}
      >
        {active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
      </span>
    </div>
  );
}
