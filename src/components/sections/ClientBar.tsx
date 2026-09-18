import { clients } from "@/lib/site";
import { Reveal } from "@/components/anim";

/** Full-bleed blue band of client wordmarks (Home / Contact). */
export function ClientBar() {
  return (
    <section className="bg-brand-500 text-white">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7 md:py-[33px]">
          {clients.map((c, i) => (
            <Reveal
              key={c}
              as="span"
              delay={i * 70}
              y={14}
              className="inline-block text-xl font-bold tracking-tight md:text-[1.7rem]"
            >
              {c}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
