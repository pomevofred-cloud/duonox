"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronLeft, ChevronRight, Receipt, Clock } from "@/components/icons";

const stages = [
  {
    name: "Discovery",
    sub: "Goals, audience, the real problem",
    detail: "We start by listening: goals, audience, and the real shape of the problem.",
  },
  {
    name: "Strategy",
    sub: "Position and direction, agreed",
    detail: "We agree the position and direction before any pixels — the argument the work has to make.",
  },
  {
    name: "Design & build",
    sub: "Identity, editorial, digital",
    detail: "Identity, editorial and digital, built together so the system holds on every surface.",
  },
  {
    name: "Launch & beyond",
    sub: "Ship, then ninety days close",
    detail: "We ship, then stay ninety days while the new system settles into real use.",
  },
];

export function Approach() {
  const [active, setActive] = useState(0);
  const go = (d: number) => setActive((a) => (a + d + stages.length) % stages.length);
  const s = stages[active];

  return (
    <section className="bg-lavender-bg py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-10">Our approach</SectionLabel>
        <h2 className="display mx-auto max-w-2xl text-center text-5xl md:text-7xl">
          How considered work takes shape.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-center text-[0.95rem] leading-relaxed text-muted">
          Four deliberate stages, with the same senior hands from the first call
          through
        </p>

        <div className="mx-auto mt-10 max-w-xl">
          {/* Blue stage card */}
          <div className="rounded-[1.5rem] bg-brand-700 px-6 py-8 text-center text-white">
            <p className="text-[0.95rem] text-white/80">
              Stage {String(active + 1).padStart(2, "0")} of 04
            </p>
            <div className="mt-2 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous stage"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700 transition-transform hover:scale-105"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h3 className="display min-w-[8ch] text-4xl text-white md:text-5xl">{s.name}</h3>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next stage"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700 transition-transform hover:scale-105"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-[0.9rem] text-white/75">Four deliberate stages, in order</p>
          </div>

          {/* White list card */}
          <div className="mt-4 card p-5">
            <p className="px-1 text-[1.05rem] font-semibold text-ink" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              The four stages
            </p>
            <div className="mt-3 space-y-1">
              {stages.map((st, i) => {
                const on = i === active;
                return (
                  <button
                    key={st.name}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-center gap-4 rounded-2xl px-4 py-3.5 text-left transition-colors ${
                      on ? "bg-canvas" : "hover:bg-canvas/60"
                    }`}
                  >
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.8rem] font-semibold ${
                        on ? "bg-brand-500 text-white" : "bg-canvas text-muted-2"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[0.98rem] font-semibold text-ink">{st.name}</span>
                      <span className="block text-[0.82rem] text-muted">{st.sub}</span>
                    </span>
                    {on ? (
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-[0.72rem] font-medium text-brand-500">
                        Active
                      </span>
                    ) : (
                      <ChevronRight className="h-4 w-4 text-muted-2" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-3 rounded-2xl bg-canvas p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.8rem] text-muted-2">
                    What happens in stage {String(active + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 max-w-[42ch] text-[0.92rem] text-ink-soft">{s.detail}</p>
                </div>
                <div className="flex shrink-0 gap-2 text-muted-2">
                  <Receipt className="h-4 w-4" />
                  <Clock className="h-4 w-4" />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              className="mt-3 flex w-full items-center gap-3 rounded-2xl bg-lavender-bg p-1.5 text-left"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500 text-white">
                <ChevronRight className="h-5 w-5" />
              </span>
              <span className="flex-1 text-center text-[0.95rem] font-medium text-ink">
                Swipe through the stages
              </span>
              <span className="w-11" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
