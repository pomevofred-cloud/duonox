import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="container-page relative z-10 grid items-center gap-10 pt-32 pb-16 md:min-h-[86vh] md:grid-cols-[1.1fr_1fr] md:pt-40 md:pb-24">
        <div>
          <h1 className="display text-5xl leading-[0.98] md:text-7xl">
            Five disciplines
            <br /> worth doing well.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            A small studio doesn&apos;t pretend to do everything. We do these five
            things, with the same hands from brief to handover.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="btn btn-light">
              See pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto md:h-[520px]">
          <Image
            src="/images/services-chrome.png"
            alt="A fluid chrome form"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 45vw"
            className="object-contain drop-shadow-[0_20px_60px_rgba(80,90,255,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
