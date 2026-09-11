import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-32 pb-14 md:pt-44 md:pb-20">
      {/* dotted grid decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-24 hidden h-72 w-72 opacity-60 md:block"
        style={{
          backgroundImage: "radial-gradient(var(--color-line) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(circle at 70% 40%, black, transparent 70%)",
        }}
      />
      <div className="container-page relative">
        <h1 className="display max-w-2xl text-6xl leading-[0.95] md:text-8xl">
          Pricing, thoughtfully forthcoming.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          We are finalising our engagement structure. For now the best way to start
          is to write, and we share figures on the first reply, tailored to your
          scope.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-primary">
            Ask for a figure <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/services" className="btn btn-light">
            See what we do
          </Link>
        </div>
      </div>
    </section>
  );
}
