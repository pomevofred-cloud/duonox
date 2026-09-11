import Image from "next/image";

const tags = [
  { label: "Web & UI Design", cls: "bg-brand-500 text-white" },
  { label: "Brand Strategy", cls: "bg-cream text-brand-500" },
  { label: "Campaign Development", cls: "bg-lavender text-ink-soft" },
  { label: "Campaign Development", cls: "bg-teal text-white" },
  { label: "Editoral work", cls: "bg-brand-500 text-white" },
  { label: "Website developpement", cls: "bg-cream text-brand-500" },
];

export function AboutHero() {
  return (
    <section className="bg-canvas pt-32 pb-8 md:pt-40 md:pb-12">
      <div className="container-page">
        <div className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h1 className="display text-6xl leading-[0.95] md:text-8xl">
              Two minds,
              <br /> one agency.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Duonox is two disciplines at one table: editorial instinct on one
              side, systems thinking on the other. The name works two ways, and so
              does the work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className={`rounded-2xl px-5 py-3.5 text-[0.95rem] font-medium ${t.cls}`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] md:aspect-[3/4]">
            <Image
              src="/images/about-hero.jpg"
              alt="The two founders of Duonox"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
