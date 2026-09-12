"use client";

import Link from "next/link";
import { useState } from "react";
import { invoices, metrics, money, type InvoiceStatus } from "@/lib/console-data";
import { PageHeader, InvoicePill, StatCard } from "@/components/console/ui";
import { Plus, Download, Receipt } from "@/components/icons";

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
    return i.status !== "Paid";
  });

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Invoices"
        title={<>Issued, chased, collected.</>}
        subtitle="Status is derived from payments, so an invoice can never claim to be paid when it is not."
        action={
          <>
            <button className="btn btn-light">
              <Download className="h-4 w-4" /> Export
            </button>
            <Link href="/console/invoices/new" className="btn btn-primary">
              <Plus className="h-4 w-4" /> New invoice
            </Link>
          </>
        }
      />

      {/* Stat cards */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard value={money(metrics.invoiced)} label="Invoiced" sub="7 issued · 1 draft" variant="brand" />
        <StatCard value={money(metrics.collected)} label="Collected" sub="82.4% collected" />
        <StatCard value={money(metrics.outstanding)} label="Outstanding" sub="across 3 open invoices" />
        <StatCard value={money(metrics.overdueAmount)} label="Overdue" sub="2 past the due date" variant="warm" />
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

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-[1.25rem] bg-white shadow-card lg:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-line text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted-2">
              <th className="px-6 py-4">Invoice</th>
              <th className="px-4 py-4">Client</th>
              <th className="px-4 py-4">Issued</th>
              <th className="px-4 py-4">Due</th>
              <th className="px-4 py-4 text-right">Total</th>
              <th className="px-4 py-4 text-right">Paid</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-[0.9rem]">
            {filtered.map((i) => (
              <tr key={i.id} className="border-b border-line-soft last:border-0 hover:bg-canvas/60">
                <td className="px-6 py-4">
                  <Link href="/console/invoices/2026-005" className="block">
                    <p className="font-semibold text-ink">{i.id}</p>
                    <p className="text-[0.78rem] text-muted-2">{i.project}</p>
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-[0.72rem] font-semibold text-muted">
                      {i.client.charAt(0)}
                    </span>
                    <span className="font-medium text-ink">{i.client}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-muted-2">{i.issued}</td>
                <td className={`px-4 py-4 ${i.status === "Overdue" ? "text-overdue" : "text-muted-2"}`}>{i.due}</td>
                <td className="px-4 py-4 text-right font-semibold text-ink">{money(i.amount)}</td>
                <td className="px-4 py-4 text-right">
                  {i.paid ? <span className="font-semibold text-paid">{money(i.paid)}</span> : <span className="text-muted-2">$0</span>}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end"><InvoicePill status={i.status} /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 lg:hidden">
        {filtered.map((i) => (
          <Link
            key={i.id}
            href="/console/invoices/2026-005"
            className="flex items-center gap-4 rounded-[1.1rem] bg-white p-4 shadow-card"
          >
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconStyles[i.status]}`}>
              <Receipt className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-ink">{i.id}</p>
              <p className="text-[0.85rem] text-muted-2">{i.client}</p>
              <p className={`text-[0.78rem] ${i.status === "Overdue" ? "text-overdue" : "text-muted-2"}`}>Due {i.due}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <p className="text-[1.05rem] font-semibold text-ink">{money(i.amount)}</p>
              <InvoicePill status={i.status} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
