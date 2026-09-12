import Link from "next/link";
import { metrics, funnel, paymentMix, invoiceHealth, analytics, money } from "@/lib/console-data";
import { PageHeader, RangeTabs, StatCard, Panel, AreaChart } from "@/components/console/ui";
import { Plus, ChevronRight } from "@/components/icons";

// Rough running totals for the money-in/out area chart (derived from figures).
const invoicedSeries = [3, 3, 6, 9, 9, 9, 9, 12, 12, 12, 15, 15, 19, 19, 21, 21, 21, 21, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23.8];
const collectedSeries = [0, 0, 0, 7.3, 7.3, 7.3, 7.3, 7.3, 9.1, 9.1, 9.1, 11.9, 11.9, 13.7, 13.7, 13.7, 13.7, 15.5, 15.5, 15.5, 17.6, 17.6, 17.6, 18, 18, 18, 19.6, 19.6, 19.6, 19.6];

export default function OverviewPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Duonox Agency"
        title={<>Where the numbers<br className="hidden md:block" /> actually stand.</>}
        subtitle="Every figure is read from your invoices, payments and website. Nothing is stored twice."
        action={
          <>
            <Link href="/console/invoices/new" className="btn btn-primary">
              <Plus className="h-4 w-4" /> New invoice
            </Link>
            <RangeTabs />
          </>
        }
      />

      {/* Revenue + funnel */}
      <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-[linear-gradient(135deg,#2f22e8_0%,#1a10bd_100%)] p-7 text-white">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/60">
                Revenue collected · last 30 days
              </p>
              <p className="display mt-3 text-6xl">{money(metrics.revenue30)}</p>
              <p className="mt-1 text-[0.85rem] text-white/70">{metrics.paymentsReceived} payments received</p>
            </div>
            <div className="space-y-2 text-right text-[0.9rem]">
              <Row label="Collection rate" value={`${metrics.collectionRate}%`} />
              <Row label="Outstanding" value={money(metrics.outstanding)} />
              <Row label="Invoiced" value={money(metrics.invoiced)} />
            </div>
          </div>
          <div className="mt-7 flex gap-[3px]">
            {Array.from({ length: 34 }).map((_, i) => (
              <span key={i} className={`h-6 flex-1 rounded-[2px] ${i < 28 ? "bg-white" : "bg-white/25"}`} />
            ))}
          </div>
          <p className="mt-3 text-[0.82rem] text-white/70">
            {money(metrics.collected)} of {money(metrics.invoiced)} invoiced has landed
          </p>
        </div>

        <Panel>
          <p className="text-[1.05rem] font-semibold">From visitor to payment</p>
          <p className="mt-0.5 text-[0.78rem] text-muted-2">Last 30 days</p>
          <div className="mt-5 space-y-4">
            {funnel.map((f, i) => (
              <div key={f.label}>
                <div className="flex items-baseline justify-between text-[0.88rem]">
                  <span className="flex items-center gap-2 text-ink-soft">
                    {f.label}
                    {f.note && <span className="text-[0.72rem] text-muted-2">{f.note}</span>}
                  </span>
                  <span className="font-semibold">{f.value}</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-canvas">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(f.pct, 4)}%`,
                      background: i === 3 ? "#e0791f" : "var(--color-brand-500)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      {/* Stat cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value={metrics.visitors} label="Website visitors" sub={`${analytics.pageviews.toLocaleString()} pageviews · 2.5 per session`} />
        <StatCard value={metrics.enquiries} label="Enquiries" sub="2.3% of visitors wrote in" />
        <StatCard value={metrics.emailsSent} label="Emails sent" sub="57% opened · 1 bounced" />
        <StatCard value={money(metrics.overdueAmount)} label="Overdue" sub="2 invoices past the due date" variant="warm" />
      </div>

      {/* Money in/out + right column */}
      <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        <Panel>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[1.05rem] font-semibold">Money in, money out</p>
              <p className="mt-0.5 text-[0.78rem] text-muted-2">Running total across the last 30 days</p>
            </div>
            <div className="flex items-center gap-4 text-[0.8rem]">
              <Legend color="#c2c2cf" label="Invoiced" />
              <Legend color="#2115db" label="Collected" />
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <div className="flex flex-col justify-between py-1 text-right text-[0.7rem] text-muted-2">
              <span>$9k</span><span>$6k</span><span>$3k</span><span>$0</span>
            </div>
            <div className="flex-1">
              <AreaChart invoiced={invoicedSeries} collected={collectedSeries} />
              <div className="mt-2 flex justify-between text-[0.68rem] text-muted-2">
                {["01", "05", "09", "13", "17", "21", "25", "30"].map((l) => <span key={l}>{l}</span>)}
              </div>
            </div>
          </div>
        </Panel>

        <div className="space-y-5">
          <Panel>
            <p className="text-[1.05rem] font-semibold">How they paid</p>
            <p className="mt-0.5 text-[0.78rem] text-muted-2">{money(metrics.revenue30)} across {metrics.paymentsReceived} payments</p>
            <div className="mt-4 flex h-2.5 overflow-hidden rounded-full">
              {paymentMix.map((p) => (
                <span key={p.label} style={{ width: `${(p.amount / metrics.revenue30) * 100}%`, background: p.color }} />
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {paymentMix.map((p) => (
                <div key={p.label} className="flex items-center justify-between text-[0.9rem]">
                  <span className="flex items-center gap-2 text-ink-soft">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} /> {p.label}
                  </span>
                  <span className="font-semibold">{money(p.amount)}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[1.05rem] font-semibold">Invoice health</p>
                <p className="mt-0.5 text-[0.78rem] text-muted-2">{metrics.issuedInvoices} issued · {metrics.draftInvoices} draft</p>
              </div>
              <Link href="/console/invoices" className="flex items-center gap-1 text-[0.82rem] font-medium text-brand-500">
                All <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-4 space-y-2.5">
              {invoiceHealth.map((h) => (
                <div key={h.label} className="flex items-center justify-between text-[0.9rem]">
                  <span className="flex items-center gap-2 text-ink-soft">
                    <span className="h-2 w-2 rounded-full" style={{ background: h.color }} /> {h.label}
                  </span>
                  <span className="flex items-center gap-6">
                    <span className="text-muted-2">{h.count}</span>
                    <span className="w-16 text-right font-semibold">{money(h.amount)}</span>
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className="flex items-center justify-end gap-3">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold">{value}</span>
    </p>
  );
}
function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-muted">
      <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} /> {label}
    </span>
  );
}
