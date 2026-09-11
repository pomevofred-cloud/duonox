"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowRight, ArrowUpRight, Upload } from "@/components/icons";

const workTypes = ["Identity", "Editorial", "Web dev", "Digital", "Direction", "Not sure yet"];

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-muted-2 focus:border-brand-400";
const labelCls = "mb-2 block text-[0.85rem] font-medium text-ink-soft";

export function ContactForm() {
  const [work, setWork] = useState<string[]>(["Identity"]);
  const [file, setFile] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const toggle = (t: string) =>
    setWork((w) => (w.includes(t) ? w.filter((x) => x !== t) : [...w, t]));

  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <SectionLabel className="mb-12">Hear from us</SectionLabel>
        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr] lg:items-start">
          {/* Form card */}
          <div className="card p-6 md:p-8">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paid-bg text-paid">
                  <ArrowRight className="h-7 w-7" />
                </div>
                <h3 className="display mt-6 text-3xl">Your letter is on its way.</h3>
                <p className="mt-3 max-w-sm text-muted">
                  Thanks for writing. We reply within two working days — usually with a
                  precise window and a first figure.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Your name</label>
                    <input className={inputCls} placeholder="Ada Mensah" required />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input type="email" className={inputCls} placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className={labelCls}>Country</label>
                    <select className={inputCls} defaultValue="">
                      <option value="" disabled>Choose your country</option>
                      <option>Ghana</option>
                      <option>Nigeria</option>
                      <option>United Kingdom</option>
                      <option>France</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>WhatsApp number</label>
                    <input className={inputCls} placeholder="+233 …" />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Organisation</label>
                  <input className={inputCls} placeholder="Company or project name" />
                </div>

                <div>
                  <label className={labelCls}>What kind of work?</label>
                  <div className="flex flex-wrap gap-2">
                    {workTypes.map((t) => {
                      const on = work.includes(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => toggle(t)}
                          className={`rounded-full px-4 py-2 text-[0.85rem] font-medium transition-colors ${
                            on ? "bg-brand-500 text-white" : "bg-canvas text-ink-soft hover:bg-line-soft"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Budget range</label>
                    <select className={inputCls} defaultValue="">
                      <option value="" disabled>Choose a range</option>
                      <option>Under $2k</option>
                      <option>$2k – $5k</option>
                      <option>$5k – $10k</option>
                      <option>$10k+</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Ideal start</label>
                    <select className={inputCls} defaultValue="">
                      <option value="" disabled>Choose a window</option>
                      <option>As soon as possible</option>
                      <option>This month</option>
                      <option>Next quarter</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>A paragraph</label>
                  <textarea
                    className={`${inputCls} min-h-[120px] resize-y`}
                    placeholder="What are you trying to do, who is it for, and when?"
                  />
                </div>

                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-line bg-canvas px-4 py-4 text-[0.9rem] text-muted transition-colors hover:border-brand-300">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-brand-500 shadow-sm">
                    <Upload className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="font-medium text-ink-soft">
                      {file ?? "Upload image or document"}
                    </span>
                    <span className="block text-[0.78rem] text-muted-2">
                      PDF, JPG, PNG, DOC · max 10MB
                    </span>
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
                  />
                </label>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button type="submit" className="btn btn-primary">
                    Send letter <ArrowRight className="h-4 w-4" />
                  </button>
                  <p className="text-[0.85rem] text-muted-2">
                    We reply within two working days. No newsletter.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Side cards */}
          <div className="space-y-4">
            <div className="rounded-[1.25rem] bg-brand-500 p-6 text-white">
              <h3 className="text-lg font-semibold">Prefer to write directly?</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/80">
                A paragraph is enough. Tell us what you are trying to do and roughly
                when.
              </p>
              <div className="mt-6 space-y-4">
                <a href={`mailto:${site.email}`} className="block border-t border-white/15 pt-4">
                  <span className="text-[0.78rem] text-white/60">Email</span>
                  <span className="mt-0.5 flex items-center justify-between gap-2 text-[0.98rem] font-medium">
                    {site.email} <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </span>
                </a>
                <a href={`tel:${site.phoneHref}`} className="block border-t border-white/15 pt-4">
                  <span className="text-[0.78rem] text-white/60">WhatsApp</span>
                  <span className="mt-0.5 flex items-center justify-between gap-2 text-[0.98rem] font-medium">
                    {site.phone} <ArrowUpRight className="h-4 w-4 opacity-70" />
                  </span>
                </a>
              </div>
            </div>

            <div className="card p-6">
              <p className="text-[0.85rem] text-muted-2">Reply time</p>
              <p className="display mt-1 text-4xl">2 days</p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">
                Every letter gets a reply, including the ones that turn into a no.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
