"use client";

import { useState } from "react";
import { clients, metrics, money } from "@/lib/console-data";
import { PageHeader, StatCard, ClientPill } from "@/components/console/ui";
import { Plus, Search, Receipt } from "@/components/icons";

const tabs = ["All", "Active", "Leads"] as const;

export default function ClientsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = clients.filter((c) => {
    const matchTab =
      tab === "All" ? true : tab === "Active" ? c.status === "Active" : c.status === "Lead";
    const matchQ = c.name.toLowerCase().includes(q.toLowerCase()) || c.contact.toLowerCase().includes(q.toLowerCase());
    return matchTab && matchQ;
  });

  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Clients"
        title={<>Everyone you work with.</>}
        subtitle="Enquiries from the website arrive as leads. Totals are read from their invoices."
        action={
          <button className="btn btn-primary">
            <Plus className="h-4 w-4" /> Add client
          </button>
        }
      />

      {/* Stat cards — desktop */}
      <div className="hidden gap-5 sm:grid-cols-2 lg:grid lg:grid-cols-4">
        <StatCard value="10" label="Clients" sub="7 active · 2 leads" variant="brand" />
        <StatCard value={money(metrics.invoiced)} label="Invoiced" sub="across 7 issued invoices" />
        <StatCard value={money(metrics.collected)} label="Collected" sub="82.4% of invoiced" />
        <StatCard value={money(metrics.outstanding)} label="Outstanding" sub="$2,130 of it overdue" variant="warm" />
      </div>

      {/* Search + tabs — mobile */}
      <div className="space-y-4 lg:hidden">
        <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-muted-2" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search clients"
            className="w-full bg-transparent text-[0.95rem] outline-none placeholder:text-muted-2"
          />
        </div>
        <div className="flex gap-1 rounded-full bg-white p-1 text-[0.9rem] shadow-sm">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 rounded-full px-4 py-2 font-medium ${tab === t ? "bg-brand-500 text-white" : "text-muted"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-[1.25rem] bg-white shadow-card lg:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-line text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted-2">
              <th className="px-6 py-4">Client</th>
              <th className="px-4 py-4">Country</th>
              <th className="px-4 py-4 text-center">Invoices</th>
              <th className="px-4 py-4 text-right">Invoiced</th>
              <th className="px-4 py-4 text-right">Collected</th>
              <th className="px-4 py-4 text-right">Outstanding</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-[0.9rem]">
            {clients.map((c) => (
              <tr key={c.name} className="border-b border-line-soft last:border-0 hover:bg-canvas/60">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-[0.8rem] font-semibold text-muted">
                      {c.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{c.name}</p>
                      <p className="truncate text-[0.78rem] text-muted-2">{c.contact} · {c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-ink-soft">{c.country}</td>
                <td className="px-4 py-4 text-center text-ink-soft">{c.invoices || "—"}</td>
                <td className="px-4 py-4 text-right font-semibold text-ink">
                  {c.invoiced ? money(c.invoiced) : <span className="font-normal text-muted-2">$0</span>}
                </td>
                <td className="px-4 py-4 text-right">
                  {c.collected ? <span className="font-semibold text-paid">{money(c.collected)}</span> : <span className="text-muted-2">$0</span>}
                </td>
                <td className="px-4 py-4 text-right">
                  {c.outstanding ? <span className="font-semibold text-partpaid">{money(c.outstanding)}</span> : <span className="text-muted-2">$0</span>}
                </td>
                <td className="px-6 py-4"><div className="flex justify-end"><ClientPill status={c.status} /></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 lg:hidden">
        {filtered.map((c) => (
          <div key={c.name} className="rounded-[1.1rem] bg-white p-4 shadow-card">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-[0.85rem] font-semibold text-white">
                {c.name.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="font-semibold text-ink">{c.name}</p>
                  <ClientPill status={c.status} />
                </div>
                <p className="truncate text-[0.82rem] text-muted-2">{c.contact} · {c.country}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-line-soft pt-3 text-[0.85rem]">
              <span className="flex items-center gap-2 text-muted-2">
                <Receipt className="h-4 w-4" /> {c.invoices ? `${c.invoices} invoice` : "0 invoices"}
              </span>
              <span className="flex items-center gap-4">
                <span className={c.collected ? "font-semibold text-paid" : "text-muted-2"}>
                  {c.collected ? money(c.collected) : "$0"}
                </span>
                {c.outstanding > 0 && <span className="font-semibold text-partpaid">{money(c.outstanding)} due</span>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
