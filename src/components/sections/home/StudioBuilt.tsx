import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight } from "@/components/icons";

export function StudioBuilt() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel>How we work</SectionLabel>
        <h2 className="display mx-auto mt-8 max-w-3xl text-center text-5xl md:text-7xl">
          A studio built for considered work.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Engagements a year */}
          <article className="card p-6 md:col-start-1 md:row-start-1">
            <Head title="Engagements a year" tag="By design" />
            <div className="mt-4 rounded-2xl bg-brand-500 p-5 text-white">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[0.72rem] text-white/70">Projects</p>
                  <p className="display text-4xl">6–8</p>
                </div>
                <div className="text-right">
                  <p className="text-[0.72rem] text-white/70">Founders</p>
                  <p className="display text-4xl">40+</p>
                </div>
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[72%] rounded-full bg-brand-500" />
            </div>
            <p className="mt-4 text-[0.85rem] text-muted">
              Founder-led from pitch through handover.
            </p>
          </article>

          {/* Post-launch support */}
          <article className="card p-6 md:col-start-2 md:row-start-1">
            <Head title="Post-launch support" tag="Included" tagClass="text-brand-500" />
            <p className="mt-4 text-[0.75rem] text-muted">Every build</p>
            <p className="display text-4xl">
              90 <span className="align-baseline text-lg text-muted-2">days</span>
            </p>
            <div className="mt-4 flex gap-[3px]">
              {Array.from({ length: 26 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-6 flex-1 rounded-[3px] ${i < 22 ? "bg-brand-500" : "bg-line"}`}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[0.72rem] text-muted-2">
              <span>0</span>
              <span>90 / 90</span>
            </div>
            <p className="mt-4 text-[0.85rem] text-muted">
              We stay in the room while the system settles.
            </p>
          </article>

          {/* Dark tall card */}
          <article className="relative overflow-hidden rounded-[1.5rem] bg-ink p-7 text-white md:col-start-3 md:row-start-1 md:row-span-2">
            <Image
              src="/images/waves-blue.png"
              alt=""
              width={600}
              height={800}
              className="pointer-events-none absolute -right-10 top-0 h-full w-2/3 object-cover opacity-90"
            />
            <div className="relative flex h-full flex-col">
              <p className="text-[0.8rem] text-white/50">01 / 5</p>
              <h3 className="display mt-4 max-w-[14ch] text-4xl md:text-5xl">
                Stay close to the work that carries you.
              </h3>
              <p className="mt-4 max-w-[28ch] text-[0.95rem] text-white/70">
                Six to eight engagements a year means your project is never queued
                behind twenty others.
              </p>
              <div className="mt-auto pt-8">
                <Link href="/contact" className="btn btn-light">
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* Concept to launch */}
          <article className="card p-6 md:col-start-1 md:row-start-2">
            <Head title="Concept to launch" tag="Typical" />
            <p className="display mt-4 text-4xl">
              1 <span className="text-lg text-muted-2">quarter</span>
            </p>
            <div className="mt-5 grid grid-cols-4 gap-1.5">
              {["Intake", "Concept", "Build", "Handover"].map((s, i) => (
                <div key={s}>
                  <div className={`h-1.5 rounded-full ${i < 3 ? "bg-brand-500" : "bg-line"}`} />
                  <p className="mt-2 text-[0.7rem] text-muted-2">{s}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[0.85rem] text-muted">
              Each phase ends in a written deliverable.
            </p>
          </article>

          {/* Who you work with */}
          <article className="card overflow-hidden p-6 md:col-start-2 md:row-start-2">
            <Head title="Who you work with" tag="Always" />
            <WorkNetwork />
          </article>
        </div>
      </div>
    </section>
  );
}

function Head({
  title,
  tag,
  tagClass = "text-muted-2",
}: {
  title: string;
  tag: string;
  tagClass?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-[1.05rem] font-semibold text-ink" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
        {title}
      </h3>
      <span className={`text-[0.82rem] ${tagClass}`}>{tag}</span>
    </div>
  );
}

function WorkNetwork() {
  const nodes = [
    { src: "/images/avatars/a6.jpg", x: "8%", y: "6%", s: 40 },
    { src: "/images/avatars/a3.jpg", x: "62%", y: "0%", s: 44 },
    { src: "/images/avatars/a1.jpg", x: "84%", y: "40%", s: 38 },
    { src: "/images/avatars/a2.jpg", x: "70%", y: "74%", s: 42 },
    { src: "/images/avatars/a5.jpg", x: "6%", y: "66%", s: 40 },
  ];
  return (
    <div className="relative mt-4 h-40">
      {nodes.map((n) => (
        <span
          key={n.src}
          className="absolute overflow-hidden rounded-full ring-2 ring-white shadow-sm"
          style={{ left: n.x, top: n.y, width: n.s, height: n.s }}
        >
          <Image src={n.src} alt="" fill sizes="44px" className="object-cover" />
        </span>
      ))}
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg">
        <span className="display text-2xl font-semibold">D</span>
      </span>
    </div>
  );
}
