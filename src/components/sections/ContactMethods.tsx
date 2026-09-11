import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/site";
import { Mail, Phone, Globe, ArrowUpRight } from "@/components/icons";

const methods = [
  {
    icon: Mail,
    badge: "Replies in 2 days",
    label: "Email",
    value: site.email,
    desc: "Every letter gets a reply, including the ones that turn into a no.",
    cta: "Write to us",
    href: `mailto:${site.email}`,
    variant: "light" as const,
  },
  {
    icon: Phone,
    badge: "Online now",
    label: "WhatsApp",
    value: site.phone,
    desc: "Fastest for a quick question or to sanity-check a scope.",
    cta: "Open WhatsApp",
    href: `https://wa.me/${site.phoneHref.replace("+", "")}`,
    variant: "brand" as const,
  },
  {
    icon: Globe,
    badge: "Accra, GMT",
    label: "Studio",
    value: "Remote, worldwide",
    desc: "We travel for kickoff and milestone reviews when it serves the work.",
    cta: "See availability",
    href: "/contact",
    variant: "dark" as const,
  },
];

export function ContactMethods() {
  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-10">Reach us directly</SectionLabel>
        <h2 className="display mx-auto max-w-2xl text-center text-5xl md:text-7xl">
          Three ways to start a conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-[0.95rem] leading-relaxed text-muted">
          Pick whichever suits the question. All three reach the same two people.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {methods.map((m) => {
            const dark = m.variant !== "light";
            const bg =
              m.variant === "brand"
                ? "bg-brand-500 text-white"
                : m.variant === "dark"
                  ? "bg-ink text-white"
                  : "card text-ink";
            return (
              <Link
                key={m.label}
                href={m.href}
                className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] p-7 ${bg}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                      dark ? "bg-white/15" : "bg-canvas"
                    }`}
                  >
                    <m.icon className={`h-5 w-5 ${dark ? "text-white" : "text-brand-500"}`} />
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.72rem] font-medium ${
                      dark ? "bg-white/12 text-white/85" : "bg-canvas text-muted"
                    }`}
                  >
                    {m.badge === "Online now" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    )}
                    {m.badge}
                  </span>
                </div>

                <div className="mt-16">
                  <p className={`text-[0.85rem] ${dark ? "text-white/60" : "text-muted-2"}`}>
                    {m.label}
                  </p>
                  <p className="mt-1 text-xl font-semibold">{m.value}</p>
                  <p className={`mt-2 text-[0.9rem] leading-relaxed ${dark ? "text-white/70" : "text-muted"}`}>
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[0.92rem] font-medium">{m.cta}</span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:translate-x-0.5 ${
                      dark ? "bg-white/15" : "bg-brand-500 text-white"
                    }`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
