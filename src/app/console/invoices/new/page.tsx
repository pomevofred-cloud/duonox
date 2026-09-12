"use client";

import Link from "next/link";
import { useState } from "react";
import { clients, agency, money } from "@/lib/console-data";
import { Logo } from "@/components/Logo";
import { ArrowLeft, Plus, CloseIcon, Send, Calendar, ChevronDown, ArrowUpRight } from "@/components/icons";

type Line = { desc: string; detail: string; qty: number; unit: number };

const initialLines: Line[] = [
  { desc: "Website Design", detail: "Custom UI/UX design up to 3–4 pages", qty: 1, unit: 370 },
  { desc: "Website Development", detail: "Front-end & back-end coding, CMS setup, responsive", qty: 1, unit: 300 },
  { desc: "Tracking System Integration", detail: "Setup, configuration, workflow implementation, testing", qty: 1, unit: 85 },
  { desc: "Deployment & Launch Support", detail: "Hosting setup, DNS, and go-live assistance", qty: 1, unit: 75 },
  { desc: "Social Media Setup", detail: "Cover design, Instagram, TikTok and Facebook pages", qty: 1, unit: 50 },
];

const fieldCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-brand-400";
const labelCls = "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2";

export default function NewInvoicePage() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [client, setClient] = useState("Capital Logistic");
  const [taxPct, setTaxPct] = useState(0);
  const [discountPct, setDiscountPct] = useState(0);

  const subtotal = lines.reduce((s, l) => s + l.qty * l.unit, 0);
  const discount = (subtotal * discountPct) / 100;
  const tax = ((subtotal - discount) * taxPct) / 100;
  const total = subtotal - discount + tax;

  const update = (i: number, patch: Partial<Line>) =>
    setLines((ls) => ls.map((l, j) => (j === i ? { ...l, ...patch } : l)));
  const remove = (i: number) => setLines((ls) => ls.filter((_, j) => j !== i));
  const add = () => setLines((ls) => [...ls, { desc: "New service", detail: "Describe the deliverable", qty: 1, unit: 0 }]);

  return (
    <div className="space-y-6">
      <Link href="/console/invoices" className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Back to invoices
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-2">New invoice</p>
          <div className="mt-2 flex items-center gap-3">
            <h1 className="display text-4xl md:text-5xl">2026-009</h1>
            <span className="rounded-full bg-draft-bg px-2.5 py-1 text-[0.78rem] font-medium text-draft lg:hidden">Draft</span>
          </div>
          <p className="mt-2 text-[0.92rem] text-muted">
            <span className="lg:hidden">{client} · due 14 Oct 2026</span>
            <span className="hidden lg:inline">Fill this in and the totals, the client balance and the dashboard all move together.</span>
          </p>
        </div>
        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          <Link href="/console/invoices" className="btn btn-ghost">Cancel</Link>
          <button className="btn btn-light">Save as draft</button>
          <button className="btn btn-primary"><Send className="h-4 w-4" /> Issue invoice</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr] lg:items-start">
        {/* Editor */}
        <div className="space-y-5">
          {/* Who and what */}
          <div className="rounded-[1.25rem] bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <p className="text-[1.05rem] font-semibold">Who and what</p>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[0.8rem] font-medium text-brand-500">
                <Plus className="h-3.5 w-3.5" /> New client
              </button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2 lg:col-span-1">
                <label className={labelCls}>Client</label>
                <div className="relative">
                  <select value={client} onChange={(e) => setClient(e.target.value)} className={`${fieldCls} appearance-none pr-10`}>
                    {clients.map((c) => <option key={c.name}>{c.name}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
                </div>
              </div>
              <div className="hidden lg:block">
                <label className={labelCls}>Invoice number</label>
                <input defaultValue="2026-009" className={fieldCls} />
              </div>
              <div>
                <label className={labelCls}>Issue date</label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
                  <input defaultValue="07 Oct 2026" className={`${fieldCls} pl-10`} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Due date</label>
                <div className="relative">
                  <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
                  <input defaultValue="14 Oct 2026" className={`${fieldCls} pl-10`} />
                </div>
              </div>
              <div className="hidden lg:block">
                <label className={labelCls}>Currency</label>
                <div className="relative">
                  <select className={`${fieldCls} appearance-none pr-10`} defaultValue="USD">
                    <option>USD</option><option>EUR</option><option>GHS</option><option>GBP</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="rounded-[1.25rem] bg-white p-6 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[1.05rem] font-semibold">Services</p>
                <p className="text-[0.78rem] text-muted-2">{lines.length} lines · one per deliverable</p>
              </div>
              <button onClick={add} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[0.8rem] font-medium text-brand-500">
                <Plus className="h-3.5 w-3.5" /> Add line
              </button>
            </div>

            {/* Desktop rows */}
            <div className="mt-4 hidden lg:block">
              <div className="grid grid-cols-[1fr_70px_110px_110px_36px] gap-3 border-b border-line pb-2 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted-2">
                <span>Service</span><span className="text-center">Qty</span><span className="text-right">Unit price</span><span className="text-right">Amount</span><span />
              </div>
              {lines.map((l, i) => (
                <div key={i} className="grid grid-cols-[1fr_70px_110px_110px_36px] items-center gap-3 border-b border-line-soft py-3">
                  <div>
                    <input value={l.desc} onChange={(e) => update(i, { desc: e.target.value })} className="w-full bg-transparent text-[0.9rem] font-semibold text-ink outline-none" />
                    <input value={l.detail} onChange={(e) => update(i, { detail: e.target.value })} className="w-full bg-transparent text-[0.78rem] text-muted-2 outline-none" />
                  </div>
                  <input type="number" value={l.qty} onChange={(e) => update(i, { qty: Number(e.target.value) })} className="rounded-lg border border-line px-2 py-1.5 text-center text-[0.85rem] outline-none focus:border-brand-400" />
                  <input type="number" value={l.unit} onChange={(e) => update(i, { unit: Number(e.target.value) })} className="rounded-lg border border-line px-2 py-1.5 text-right text-[0.85rem] outline-none focus:border-brand-400" />
                  <span className="text-right text-[0.9rem] font-semibold text-ink">{money(l.qty * l.unit, true)}</span>
                  <button onClick={() => remove(i)} aria-label="Remove line" className="text-muted-2 hover:text-overdue"><CloseIcon className="h-4 w-4" /></button>
                </div>
              ))}
            </div>

            {/* Mobile cards */}
            <div className="mt-4 space-y-3 lg:hidden">
              {lines.map((l, i) => (
                <div key={i} className="rounded-xl bg-canvas p-4">
                  <div className="flex items-start justify-between gap-2">
                    <input value={l.desc} onChange={(e) => update(i, { desc: e.target.value })} className="w-full bg-transparent text-[0.95rem] font-semibold text-ink outline-none" />
                    <span className="shrink-0 font-semibold text-ink">{money(l.qty * l.unit, true)}</span>
                  </div>
                  <input value={l.detail} onChange={(e) => update(i, { detail: e.target.value })} className="mt-0.5 w-full bg-transparent text-[0.8rem] text-muted-2 outline-none" />
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[0.82rem] text-muted-2">{l.qty} × {money(l.unit, true)}</span>
                    <button onClick={() => remove(i)} aria-label="Remove line" className="text-muted-2 hover:text-overdue"><CloseIcon className="h-4 w-4" /></button>
                  </div>
                </div>
              ))}
              <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-50 py-3 text-[0.9rem] font-medium text-brand-500">
                <Plus className="h-4 w-4" /> Add service line
              </button>
            </div>
          </div>

          {/* Totals */}
          <div className="rounded-[1.25rem] bg-white p-6 shadow-card">
            <div className="grid gap-5 sm:grid-cols-[1fr_1.3fr] sm:items-center">
              <div className="hidden gap-3 sm:grid">
                <label className="flex items-center gap-3 rounded-xl border border-line px-4 py-2.5 text-[0.85rem]">
                  <span className="flex-1 text-muted">Tax %</span>
                  <input type="number" value={taxPct} onChange={(e) => setTaxPct(Number(e.target.value))} className="w-16 bg-transparent text-right outline-none" />
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-line px-4 py-2.5 text-[0.85rem]">
                  <span className="flex-1 text-muted">Discount %</span>
                  <input type="number" value={discountPct} onChange={(e) => setDiscountPct(Number(e.target.value))} className="w-16 bg-transparent text-right outline-none" />
                </label>
              </div>
              <div className="space-y-2 text-[0.9rem]">
                <Row label="Subtotal" value={money(subtotal, true)} />
                <Row label="Discount" value={money(discount, true)} />
                <Row label={`Tax (${taxPct}%)`} value={money(tax, true)} />
                <div className="mt-2 flex items-center justify-between rounded-xl bg-lavender-bg px-4 py-3">
                  <span className="font-semibold text-brand-700">Total due</span>
                  <span className="display text-2xl text-brand-700">{money(total, true)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile action buttons */}
          <div className="flex gap-3 lg:hidden">
            <Link href="/console/invoices" className="btn btn-ghost flex-1">Save draft</Link>
            <button className="btn btn-primary flex-1"><Send className="h-4 w-4" /> Issue invoice</button>
          </div>
        </div>

        {/* Live preview (desktop) */}
        <div className="hidden lg:block">
          <div className="rounded-[1.25rem] bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[1rem] font-semibold">Live preview</p>
                <p className="text-[0.78rem] text-muted-2">What the client receives</p>
              </div>
              <span className="flex items-center gap-1 text-[0.82rem] font-medium text-brand-500">Open <ArrowUpRight className="h-3.5 w-3.5" /></span>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl border border-line">
              <div className="relative overflow-hidden bg-ink px-5 py-5 text-white">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,#1a10bd,#3a2ef0)] opacity-90" />
                <div className="relative flex items-center justify-between">
                  <Logo size={16} className="text-white" as="span" />
                  <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-white/70">Invoice</span>
                </div>
                <p className="relative mt-3 text-lg font-semibold">#2026-009</p>
              </div>
              <div className="px-5 py-4 text-[0.8rem]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[0.68rem] uppercase text-muted-2">Bill to</p>
                    <p className="font-semibold text-ink">{client}</p>
                  </div>
                  <p className="text-[0.72rem] text-muted-2">Due 14 Oct</p>
                </div>
                <div className="mt-4 space-y-2 border-t border-line-soft pt-3">
                  {lines.map((l, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="truncate text-ink-soft">{l.desc}</span>
                      <span className="shrink-0 font-medium text-ink">{money(l.qty * l.unit, true)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg bg-lavender-bg px-3 py-2">
                  <span className="font-semibold text-brand-700">Total due</span>
                  <span className="font-semibold text-brand-700">{money(total, true)}</span>
                </div>
                <div className="mt-4 border-t border-line-soft pt-3 text-[0.72rem] text-muted-2">
                  <p className="uppercase tracking-wide">Payment details</p>
                  <div className="mt-1.5 flex justify-between"><span>Bank</span><span className="text-ink-soft">{agency.bank}</span></div>
                  <div className="flex justify-between"><span>Account name</span><span className="text-ink-soft">Fred Kouassi Pomevo</span></div>
                  <div className="flex justify-between"><span>SWIFT / BIC</span><span className="text-ink-soft">ECOCGHAC</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted">
      <span>{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  );
}
