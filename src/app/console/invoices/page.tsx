"use client";

import Link from "next/link";
import { useState } from "react";
import { invoices, metrics, money, type InvoiceStatus } from "@/lib/console-data";
import { PageHeader, InvoicePill } from "@/components/console/ui";
import { Plus, Receipt } from "@/components/icons";

const tabs = ["All", "Open", "Paid", "Overdue"] as const;

const iconStyles: Record<InvoiceStatus, string> = {
  Paid: "bg-paid-bg text-paid",
  Overdue: "bg-overdue-bg text-overdue",
  "Part paid": "bg-partpaid-bg text-partpaid",
  Draft: "bg-draft-bg text-draft",
};

export default function InvoicesPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");

  const filtered = invoices.filter((i) => {
    if (tab === "All") return true;
    if (tab === "Paid") return i.status === "Paid";
    if (tab === "Overdue") return i.status === "Overdue";
    return i.status !== "Paid"; // Open = anything not fully paid
  });

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Invoices"
        title={<>Issued, chased, collected.</>}
        subtitle="Every invoice, its status and what is still outstanding — all read from one place."
        action={
          <Link href="/console/invoices/2026-005" className="btn btn-primary">
            <Plus className="h-4 w-4" /> New invoice
          </Link>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
        <div className="rounded-[1.1rem] bg-[linear-gradient(150deg,#3a2ef0,#1a10c4)] p-6 text-white">
          <p className="display text-4xl">{money(metrics.collected)}</p>
          <p className="mt-2 font-semibold">Collected</p>
          <p className="text-[0.82rem] text-white/70">82.4% of invoiced</p>
        </div>
        <div className="rounded-[1.1rem] bg-cream p-6 text-ink">
          <p className="display text-4xl">{money(metrics.outstanding)}</p>
          <p className="mt-2 font-semibold">Outstanding</p>
          <p className="text-[0.82rem] text-muted">2 overdue</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 rounded-full bg-white p-1 text-[0.9rem] shadow-sm sm:inline-flex">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 rounded-full px-5 py-2 font-medium transition-colors sm:flex-none ${
              tab === t ? "bg-brand-500 text-white" : "text-muted hover:text-ink"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((i) => (
          <Link
            key={i.id}
            href="/console/invoices/2026-005"
            className="flex items-center gap-4 rounded-[1.1rem] bg-white p-4 shadow-card transition-shadow hover:shadow-float md:p-5"
          >
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyles[i.status]}`}>
              <Receipt className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink">{i.id}</p>
              <p className="text-[0.85rem] text-muted-2">{i.client}</p>
            </div>
            <div className="hidden text-[0.85rem] sm:block">
              <p className={i.status === "Overdue" ? "text-overdue" : "text-muted-2"}>{i.due}</p>
            </div>
            <div className="text-right">
              <p className="text-[1.05rem] font-semibold text-ink">{money(i.amount)}</p>
            </div>
            <div className="hidden w-24 justify-end sm:flex">
              <InvoicePill status={i.status} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
