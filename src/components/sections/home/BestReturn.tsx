import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  {
    value: "40",
    suffix: "+",
    title: "Founders served",
    desc: "Trusted to shape their identity, editorial and digital surfaces.",
    highlight: false,
  },
  {
    value: "6–8",
    suffix: "",
    title: "Engagements a year",
    desc: "On purpose. Founder-led, with the same senior hands throughout.",
    highlight: false,
  },
  {
    value: "90",
    suffix: "",
    unit: "days",
    title: "Post-launch support",
    desc: "Included with every build, while the new system finds its feet.",
    highlight: true,
  },
  {
    value: "1",
    suffix: "",
    unit: "quarter",
    title: "Concept to launch",
    desc: "Typical timeline from first concept to a complete brand system.",
    highlight: false,
  },
];

const notifications = [
  { name: "Jasper Hayes", avatar: "/images/avatars/a6.jpg" },
  { name: "Alex Vance", avatar: "/images/avatars/a1.jpg", sub: "You received a payment of $72" },
  { name: "Jerin Brown", avatar: "/images/avatars/a3.jpg" },
  { name: "Natasha", avatar: "/images/avatars/a2.jpg", sub: "Your workspace has been updated" },
];

export function BestReturn({ withFeatures = true }: { withFeatures?: boolean }) {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-12">In numbers</SectionLabel>

        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
          <h2 className="display text-5xl md:text-7xl">
            The best return on considered work.
          </h2>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-muted md:pt-3">
            We keep the practice small and deliberate. These figures are what
            consistency looks like, not a sales chart.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <article
              key={s.title}
              className={`rounded-[1.25rem] p-6 ${
                s.highlight
                  ? "bg-[linear-gradient(150deg,#3a2ef0,#1a10c4)] text-white shadow-float"
                  : "card text-ink"
              }`}
            >
              <p className="display text-5xl">
                {s.value}
                {s.suffix && <span className="align-top text-2xl">{s.suffix}</span>}
                {s.unit && (
                  <span className={`ml-1.5 text-lg ${s.highlight ? "text-white/70" : "text-muted-2"}`}>
                    {s.unit}
                  </span>
                )}
              </p>
              <div className={`mt-4 h-px w-full ${s.highlight ? "bg-white/25" : "bg-line"}`} />
              <h3 className="mt-4 text-[1.05rem] font-semibold" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {s.title}
              </h3>
              <p className={`mt-1.5 text-[0.88rem] leading-relaxed ${s.highlight ? "text-white/75" : "text-muted"}`}>
                {s.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Feature cards */}
        {withFeatures && (
        <div className="mt-4 grid gap-4">
          <div className="grid gap-4 md:grid-cols-[1fr_1.5fr]">
            {/* Build something amazing */}
            <article className="flex flex-col overflow-hidden rounded-[1.5rem] bg-[#1f12ea] p-7 text-white">
              <div className="mx-auto w-full max-w-[280px]">
                <Image
                  src="/images/feat-envelope.png"
                  alt="A custom message arriving from Duonox"
                  width={500}
                  height={510}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="mt-4 text-[1.4rem] font-medium" style={{ fontFamily: "var(--font-google-sans)" }}>
                Build something amazing with Duonox
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/75">
                Unlock a 10% discount and start creating beautiful, high-performing
                websites very fast and beautiful with us
              </p>
            </article>

            {/* Stay in sync */}
            <article className="flex flex-col justify-between overflow-hidden rounded-[1.5rem] bg-cream p-7">
              <div className="relative ml-auto w-full pt-4">
                {notifications.map((n, i) => (
                  <div
                    key={n.name}
                    className="flex items-center gap-3 rounded-2xl bg-[#1b1560] px-4 py-3 text-white shadow-[0_18px_40px_rgba(20,14,80,0.28)]"
                    style={{
                      width: "80%",
                      marginLeft: `${(notifications.length - 1 - i) * 6.5}%`,
                      marginTop: i === 0 ? 0 : -20,
                      position: "relative",
                      zIndex: i,
                    }}
                  >
                    <Image
                      src={n.avatar}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.92rem] font-medium">{n.name}</p>
                      {n.sub && <p className="truncate text-[0.72rem] text-white/45">{n.sub}</p>}
                    </div>
                    <span className="text-[0.72rem] text-white/40">Now</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-[1.4rem] font-medium text-brand-500" style={{ fontFamily: "var(--font-google-sans)" }}>
                  Stay in sync with every update
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-brand-500/70">
                  Track activity, updates, and progress in real-time all in one place
                  with Duonox. From instant notifications to live changes, everything
                  stays perfectly.
                </p>
              </div>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Code editor */}
            <article className="flex flex-col overflow-hidden rounded-[1.5rem] bg-[radial-gradient(120%_120%_at_50%_0%,#141a3d_0%,#0a0d24_100%)] p-7 text-white">
              <CodeMock />
              <h3 className="mt-6 text-[1.4rem] font-medium" style={{ fontFamily: "var(--font-google-sans)" }}>
                Where design meets development
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/70">
                Duonox combines powerful backend logic with a seamless visual builder
                so you can create without limits.
              </p>
            </article>

            {/* Language */}
            <article className="relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[radial-gradient(120%_120%_at_50%_0%,#141a3d_0%,#0a0d24_100%)] p-7 text-white">
              <div className="relative flex min-h-[200px] items-center justify-center">
                <p className="absolute inset-0 flex items-center px-2 text-center text-[0.85rem] leading-relaxed text-white/10">
                  At Duonox we work across multiple languages, making it easy to bring
                  ideas to life wherever you are. Whether you communicate in English,
                  French, or another language, you can work with us comfortably and
                  confidently. No language, unnecessary complications — just ideas,
                  clear communication, and creative work that speaks for you.
                </p>
                <div className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#1b1560] px-4 py-2.5 shadow-xl ring-1 ring-white/10">
                  <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full text-base">🇺🇸</span>
                  <span className="text-[0.95rem] font-medium">English</span>
                  <span className="text-white/50">▾</span>
                </div>
              </div>
              <h3 className="mt-6 text-[1.4rem] font-medium" style={{ fontFamily: "var(--font-google-sans)" }}>
                Speak every language instantly
              </h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/70">
                Break language barriers with Duonox. We speak multiple languages to
                make collaboration seamless, wherever you are.
              </p>
            </article>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}

function CodeMock() {
  const lines: Array<Array<[string, string]>> = [
    [["import ", "kw"], ["mongoose", "fn"], [", { ", "pl"], ["Schema", "ty"], [" } ", "pl"], ["from ", "kw"], ["'mongoose'", "st"]],
    [["export const ", "kw"], ["collection = ", "pl"], ["' product '", "st"]],
    [["", "pl"]],
    [["{% do mongoose.", "pl"], ["set (param.post)", "hl"], [" %}", "pl"]],
    [["  name: {", "pl"]],
    [["   type:  ", "pl"], ["string", "ty"]],
    [["   <from method = ", "pl"], ['"post"', "er"], [">", "pl"]],
    [["", "pl"]],
    [["   function ", "kw"], ["makePc", "fn"], [" (x , y){", "pl"]],
    [["import ", "kw"], ["mongoose", "pl"], [", { Schema } ", "pl"], ["from ", "kw"], ["'mongoose", "te"]],
  ];
  const colors: Record<string, string> = {
    kw: "text-white/45",
    fn: "text-[#c99cf5]",
    ty: "text-[#d07ad0]",
    st: "text-white/55",
    pl: "text-white/80",
    hl: "rounded bg-[#1c6b6b]/40 px-1 text-[#57e0d6]",
    er: "text-[#f0607a]",
    te: "text-[#39d6c9]",
  };
  return (
    <div className="rounded-2xl bg-black/25 p-4 font-mono text-[0.72rem] leading-[1.7] ring-1 ring-white/10">
      {lines.map((line, i) => (
        <div key={i} className="flex gap-4">
          <span className="w-4 shrink-0 text-right text-white/25">{i + 1}</span>
          <span className="truncate">
            {line.map(([txt, c], j) => (
              <span key={j} className={colors[c]}>{txt}</span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
