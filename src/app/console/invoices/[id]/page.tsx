import Link from "next/link";
import Image from "next/image";
import { invoiceDetail as inv, invoices, money } from "@/lib/console-data";
import { Panel } from "@/components/console/ui";

export function generateStaticParams() {
  return invoices.map((i) => ({ id: i.id }));
}
import { Logo } from "@/components/Logo";
import {
  ArrowLeft, Printer, Send, Download, Bell, Eye, Copy,
} from "@/components/icons";

const activityIcons = { bell: Bell, eye: Eye, send: Send } as const;

export default function InvoiceDetailPage() {
  const subtotal = inv.lines.reduce((s, l) => s + l.qty * l.unit, 0);

  return (
    <div className="space-y-6">
      <Link href="/console/invoices" className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Back to invoices
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-2">Invoice</p>
          <div className="mt-2 flex items-center gap-3">
            <h1 className="display text-4xl md:text-5xl">{inv.id}</h1>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-overdue-bg px-2.5 py-1 text-[0.78rem] font-medium text-overdue">
              <span className="h-1.5 w-1.5 rounded-full bg-current" /> {inv.status}
            </span>
          </div>
          <p className="mt-2 text-[0.92rem] text-muted">
            {inv.client} · issued {inv.issued} · {money(inv.total, true)} outstanding, no payments received
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn btn-light"><Printer className="h-4 w-4" /> Print</button>
          <button className="btn btn-light"><Send className="h-4 w-4" /> Send</button>
          <button className="btn btn-primary"><Download className="h-4 w-4" /> Download PDF</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.9fr_1fr] lg:items-start">
        {/* Invoice document */}
        <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-card">
          {/* Blue wave header */}
          <div className="relative overflow-hidden bg-ink px-8 py-9 text-white">
            <Image src="/images/waves-blue.png" alt="" fill sizes="100vw" className="absolute inset-0 object-cover object-right opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#070818_0%,rgba(7,8,24,0.4)_100%)]" />
            <div className="relative flex items-start justify-between">
              <Logo size={22} className="text-white" as="span" />
              <div className="flex flex-col items-end gap-2">
                <span className="display text-3xl">#{inv.id}</span>
                <span className="rounded-full bg-overdue/90 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide">Unpaid</span>
              </div>
            </div>
            <p className="relative mt-8 text-[0.8rem] text-white/60">www.duonoxx.com</p>
          </div>

          {/* Dates row */}
          <div className="grid grid-cols-3 gap-4 border-b border-line px-8 py-5 text-[0.85rem]">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">Issue date</p>
              <p className="mt-1 font-semibold text-ink">{inv.issued}</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">Due date</p>
              <p className="mt-1 font-semibold text-partpaid">{inv.due}</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">Project</p>
              <p className="mt-1 font-semibold text-ink">{inv.project}</p>
            </div>
          </div>

          {/* From / Bill to */}
          <div className="grid grid-cols-2 gap-4 border-b border-line px-8 py-5">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">From</p>
              <p className="mt-1.5 font-semibold text-ink">{inv.from.name}</p>
              <p className="text-[0.85rem] text-muted">{inv.from.location}</p>
              <p className="text-[0.85rem] text-muted">{inv.from.phone}</p>
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">Bill to</p>
              <div className="mt-1.5 flex items-start gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy text-[0.8rem] font-semibold text-white">C</span>
                <div>
                  <p className="font-semibold text-ink">{inv.client}</p>
                  <p className="text-[0.85rem] text-muted">{inv.clientCountry}</p>
                  <p className="text-[0.85rem] text-muted">{inv.clientPhone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Line items */}
          <div className="px-8 py-5">
            <div className="overflow-hidden rounded-lg">
              <div className="grid grid-cols-[1fr_50px_90px_90px] gap-2 rounded-t-lg bg-brand-500 px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white">
                <span>Description</span>
                <span className="text-center">Qty</span>
                <span className="text-right">Unit price</span>
                <span className="text-right">Amount</span>
              </div>
              {inv.lines.map((l, i) => (
                <div key={l.desc} className={`grid grid-cols-[1fr_50px_90px_90px] gap-2 px-4 py-3.5 text-[0.85rem] ${i % 2 ? "bg-canvas/50" : ""}`}>
                  <div>
                    <p className="font-semibold text-ink">{l.desc}</p>
                    <p className="text-[0.78rem] text-muted-2">{l.detail}</p>
                  </div>
                  <span className="text-center text-ink-soft">{l.qty}</span>
                  <span className="text-right text-ink-soft">{money(l.unit, true)}</span>
                  <span className="text-right font-semibold text-ink">{money(l.qty * l.unit, true)}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 ml-auto max-w-xs space-y-2 text-[0.88rem]">
              <div className="flex justify-between text-muted"><span>Subtotal</span><span className="font-medium text-ink">{money(subtotal, true)}</span></div>
              <div className="flex justify-between text-muted"><span>Tax (0%)</span><span>{money(0, true)}</span></div>
            </div>
          </div>

          {/* Total due */}
          <div className="flex items-center justify-between bg-brand-500 px-8 py-4 text-white">
            <span className="text-[0.8rem] font-semibold uppercase tracking-[0.1em]">Total due</span>
            <span className="display text-2xl">{money(inv.total, true)}</span>
          </div>

          {/* Payment details */}
          <div className="flex flex-wrap items-end justify-between gap-6 px-8 py-6">
            <div className="text-[0.85rem]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">Payment details</p>
              <dl className="mt-3 space-y-1.5">
                {[
                  ["Bank", inv.bank.name], ["Account name", inv.bank.account],
                  ["Account number", inv.bank.number], ["SWIFT / BIC", inv.bank.swift],
                  ["Reference", inv.bank.reference],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-6">
                    <dt className="w-28 text-muted-2">{k}</dt>
                    <dd className="font-medium text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold tracking-tight text-[#0a7d3b]" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Ecobank
              </p>
              <p className="text-[0.72rem] text-[#0a7d3b]/70">The Pan African Bank</p>
            </div>
          </div>

          <div className="bg-brand-500 px-8 py-3 text-center text-[0.72rem] leading-relaxed text-white/85">
            Payment is due within 7 days of the issue date. Late payments may incur a 1.5% monthly fee.<br />
            All deliverables remain the property of Duonox until full payment is received.
          </div>
        </div>

        {/* Right rail */}
        <div className="space-y-5">
          <div className="rounded-[1.25rem] bg-cream p-6">
            <p className="display text-4xl text-ink">{money(inv.total, true)}</p>
            <p className="mt-2 font-semibold text-ink">Balance due</p>
            <p className="text-[0.85rem] text-muted">{money(inv.total, true)} invoiced · {money(inv.received, true)} received</p>
          </div>

          <Panel>
            <p className="text-[1.05rem] font-semibold">Settlement</p>
            <p className="mt-0.5 text-[0.8rem] text-muted-2">0% of this invoice is paid</p>
            <div className="mt-3 flex gap-[3px]">
              {Array.from({ length: 22 }).map((_, i) => (
                <span key={i} className="h-2 flex-1 rounded-full bg-canvas" />
              ))}
            </div>
            <div className="mt-4 space-y-2.5 text-[0.88rem]">
              <div className="flex justify-between"><span className="text-muted">Invoice total</span><span className="font-semibold">{money(inv.total, true)}</span></div>
              <div className="flex justify-between border-t border-line-soft pt-2.5"><span className="text-muted">Received</span><span className="font-semibold">{money(inv.received, true)}</span></div>
              <div className="flex justify-between border-t border-line-soft pt-2.5"><span className="text-muted">Outstanding</span><span className="font-semibold text-partpaid">{money(inv.outstanding, true)}</span></div>
            </div>
          </Panel>

          <Panel>
            <p className="text-[1.05rem] font-semibold">Invoice activity</p>
            <p className="mt-0.5 text-[0.8rem] text-muted-2">No payment recorded yet</p>
            <ul className="mt-4 space-y-4">
              {inv.activity.map((a, i) => {
                const Icon = activityIcons[a.icon as keyof typeof activityIcons];
                return (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas text-muted">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-[0.9rem] font-medium text-ink">{a.title}</p>
                        <span className="text-[0.75rem] text-muted-2">{a.when}</span>
                      </div>
                      <p className="text-[0.78rem] text-muted-2">{a.sub}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Panel>

          <Panel>
            <p className="text-[1.05rem] font-semibold">Shared with client</p>
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-line bg-canvas px-3 py-2.5 text-[0.85rem]">
              <span className="flex-1 truncate text-muted">duonoxx.com/i/{inv.id}</span>
              <Copy className="h-4 w-4 text-muted-2" />
            </div>
            <button className="btn btn-primary mt-3 w-full">
              <Bell className="h-4 w-4" /> Send a reminder
            </button>
          </Panel>
        </div>
      </div>
    </div>
  );
}
