import { clients } from "@/lib/site";

/** Full-bleed blue band of client wordmarks (Home / Contact). */
export function ClientBar() {
  return (
    <section className="bg-brand-500 text-white">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6 md:py-7">
          {clients.map((c) => (
            <span
              key={c}
              className="text-lg font-bold tracking-tight md:text-2xl"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
