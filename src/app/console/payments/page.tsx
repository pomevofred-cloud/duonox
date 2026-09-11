import { payments, paymentMix, metrics, money } from "@/lib/console-data";
import { PageHeader, StatCard, Panel } from "@/components/console/ui";
import { Plus, Building, CreditCard, Smartphone } from "@/components/icons";

const methodIcon: Record<string, typeof Building> = {
  "Bank transfer": Building,
  Card: CreditCard,
  "Mobile money": Smartphone,
};

export default function PaymentsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Payments"
        title={<>Money that actually landed.</>}
        subtitle="Every payment received against an invoice, and how it came in."
        action={
          <button className="btn btn-primary">
            <Plus className="h-4 w-4" /> Record
          </button>
        }
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1.4fr]">
        <StatCard value={money(metrics.collected)} label="Received" sub="8 payments" variant="brand" />
        <StatCard value={money(metrics.outstanding)} label="Still owed" sub="2 overdue" variant="warm" />
        <Panel>
          <p className="text-[1rem] font-semibold">How they paid</p>
          <p className="mt-0.5 text-[0.78rem] text-muted-2">{money(metrics.revenue30)} in the last 30 days</p>
          <div className="mt-3 flex h-2.5 overflow-hidden rounded-full">
            {paymentMix.map((p) => (
              <span key={p.label} style={{ width: `${(p.amount / metrics.revenue30) * 100}%`, background: p.color }} />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.82rem]">
            {paymentMix.map((p) => (
              <span key={p.label} className="flex items-center gap-2 text-muted">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} /> {p.label}
              </span>
            ))}
          </div>
        </Panel>
      </div>

      <div className="space-y-3">
        {payments.map((p, i) => {
          const Icon = methodIcon[p.method] ?? Building;
          return (
            <div key={i} className="flex items-center gap-4 rounded-[1.1rem] bg-white p-4 shadow-card md:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-[0.8rem] font-semibold text-muted">
                {p.client.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink">{p.client}</p>
                <p className="text-[0.82rem] text-muted-2">{p.ref} · {p.date}</p>
              </div>
              <div className="flex items-center gap-2 text-[0.82rem] text-muted">
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{p.method}</span>
              </div>
              <p className="w-28 text-right text-[1.05rem] font-semibold text-paid">{money(p.amount, true)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
