import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/icons";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white lg:min-h-[840px]">
      <div className="container-page relative z-10 grid items-center gap-6 pt-32 pb-16 md:grid-cols-[1.25fr_1fr] md:pt-[120px] md:pb-24 lg:min-h-[840px]">
        <div>
          <h1 className="display text-[clamp(3rem,7.2vw,6.75rem)] leading-[0.92] tracking-[-0.02em]">
            Five disciplines
            <br /> worth doing well.
          </h1>
          <p className="mt-6 max-w-[440px] text-[1.05rem] leading-relaxed text-white/70 md:text-[1.15rem]">
            A small studio doesn&apos;t pretend to do everything. We do these five
            things, with the same hands from brief to handover.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary md:px-6 md:py-4">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="btn bg-[#2a2a30] text-white hover:bg-[#33333c] md:px-6 md:py-4"
            >
              See pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-auto md:h-[560px] lg:h-[640px]">
          <Image
            src="/images/services-chrome.png"
            alt="A fluid chrome form"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 55vw"
            className="object-contain object-right drop-shadow-[0_30px_80px_rgba(120,130,255,0.22)]"
          />
        </div>
      </div>
    </section>
  );
}
