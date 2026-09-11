"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs } from "@/lib/site";
import { Plus, Minus, ArrowRight } from "@/components/icons";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-14">Common questions</SectionLabel>
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="display text-5xl md:text-6xl">
              Before you write to us.
            </h2>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-muted">
              Everything a first letter usually asks. If yours isn&apos;t here, write
              anyway.
            </p>
            <Link href="/contact" className="btn btn-primary mt-7">
              Write to the agency <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="card overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[1.05rem] font-medium text-ink">{f.q}</span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen ? "bg-brand-500 text-white" : "bg-canvas text-muted"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-muted">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
