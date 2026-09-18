import Link from "next/link";
import Image from "next/image";
import { Stars } from "@/components/ui/Stars";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { BookDiscoveryButton } from "@/components/booking/BookDiscoveryButton";
import { CountUp } from "@/components/anim";
import { ArrowRight, Plus, Minus } from "@/components/icons";

const avatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a6.jpg",
  "/images/avatars/a3.jpg",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white lg:min-h-[841px]">
      {/* Background photo */}
      <Image
        src="/images/hero-desk.jpg"
        alt="The Duonox studio at work"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,20,0.74)_0%,rgba(6,8,20,0.34)_46%,rgba(6,8,20,0.12)_100%)]" />

      {/* Left content */}
      <div className="container-page relative z-10 pt-32 pb-16 md:pt-[168px] md:pb-24">
        {/* Trusted pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full bg-white/95 py-1.5 pl-1.5 pr-4 text-ink shadow-md">
          <AvatarStack avatars={avatars} size={28} />
          <span className="text-[0.85rem] font-medium">Trusted by 40+ founders</span>
        </div>

        <h1 className="display mt-5 text-[clamp(3.25rem,8.3vw,7.5rem)] font-medium leading-[0.84] tracking-[-0.03em] text-white">
          Where vision
          <br />
          becomes
          <br />
          identity.
        </h1>

        <p className="mt-7 max-w-[430px] text-[1.05rem] leading-relaxed text-white/85 md:text-[1.15rem]">
          Premium brand identities, editorial systems and digital experiences for
          founders who care about every detail.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <BookDiscoveryButton className="btn btn-primary md:px-6 md:py-4" />
          <Link
            href="/work"
            className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 md:px-6 md:py-4"
          >
            See selected work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Floating cards — in-flow on mobile */}
        <div className="mt-12 flex flex-wrap gap-3 lg:hidden">
          <RatingCard />
          <DisciplinesCard />
        </div>
      </div>

      {/* Desktop overlay: floating cards (container-aligned) + bottom caption */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="container-page relative h-full">
          <div className="pointer-events-auto absolute bottom-[181px] right-0 flex items-stretch gap-3">
            <RatingCard />
            <DisciplinesCard />
          </div>
          <p className="absolute inset-x-0 bottom-[26px] text-center text-[0.85rem] text-white/55">
            Trusted by 40+ founders and studios
          </p>
        </div>
      </div>
    </section>
  );
}

function RatingCard() {
  return (
    <div className="card w-[180px] p-4 text-ink">
      <p className="text-[0.78rem] text-muted">Client rating</p>
      <div className="mt-1 flex items-end gap-1">
        <CountUp value={4.8} decimals={1} className="display text-[2.75rem] font-semibold leading-none text-ink" />
        <span className="mb-1.5 text-sm text-muted-2">/5</span>
      </div>
      <Stars value={5} size={13} className="mt-1.5" />
      <p className="mt-2 text-[0.76rem] leading-snug text-muted">
        Across 40+ founder-led engagements.
      </p>
    </div>
  );
}

function DisciplinesCard() {
  return (
    <div className="card w-[205px] p-4 text-ink">
      <div className="space-y-2">
        <DiscPill label="Identity" />
        <DiscPill label="Editorial" active />
        <DiscPill label="Web & product" />
      </div>
      <p className="mt-3 text-[0.78rem] text-muted">Five disciplines, one room.</p>
    </div>
  );
}

function DiscPill({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span
        className={`rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium ${
          active ? "bg-brand-500 text-white" : "bg-canvas text-ink-soft"
        }`}
      >
        {label}
      </span>
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${
          active ? "bg-brand-500 text-white" : "bg-canvas text-ink-soft"
        }`}
      >
        {active ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
      </span>
    </div>
  );
}
