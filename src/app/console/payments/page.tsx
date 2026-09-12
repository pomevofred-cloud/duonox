import { payments, metrics, money } from "@/lib/console-data";
import { PageHeader, StatCard } from "@/components/console/ui";
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
        subtitle="Recording a payment settles its invoice part paid, paid, or still open."
        action={
          <button className="btn btn-primary">
            <Plus className="h-4 w-4" /> Record payment
          </button>
        }
      />

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard value={money(metrics.collected)} label="Received" sub="8 payments, all time" variant="brand" />
        <StatCard value={money(metrics.revenue30)} label="Last 30 days" sub="4 payments" />
        <StatCard value={money(metrics.outstanding)} label="Still owed" sub="3 open invoices" />
        <StatCard value={money(metrics.overdueAmount)} label="Overdue" sub="2 past the due date" variant="warm" />
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-[1.25rem] bg-white shadow-card lg:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-line text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted-2">
              <th className="px-6 py-4">Client</th>
              <th className="px-4 py-4">Invoice</th>
              <th className="px-4 py-4">Method</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-6 py-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="text-[0.9rem]">
            {payments.map((p, i) => {
              const Icon = methodIcon[p.method] ?? Building;
              return (
                <tr key={i} className="border-b border-line-soft last:border-0 hover:bg-canvas/60">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-[0.72rem] font-semibold text-muted">
                        {p.client.charAt(0)}
                      </span>
                      <span className="font-medium text-ink">{p.client}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium text-ink-soft">{p.ref}</td>
                  <td className="px-4 py-4">
                    <span className="flex items-center gap-2 text-muted"><Icon className="h-4 w-4" /> {p.method}</span>
                  </td>
                  <td className="px-4 py-4 text-muted-2">{p.date}</td>
                  <td className="px-6 py-4 text-right font-semibold text-paid">{money(p.amount, true)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 lg:hidden">
        {payments.map((p, i) => {
          const Icon = methodIcon[p.method] ?? Building;
          return (
            <div key={i} className="flex items-center gap-4 rounded-[1.1rem] bg-white p-4 shadow-card">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-[0.8rem] font-semibold text-muted">
                {p.client.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-ink">{p.client}</p>
                <p className="text-[0.82rem] text-muted-2">{p.ref} · {p.date}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-[1.05rem] font-semibold text-paid">{money(p.amount, true)}</p>
                <span className="flex items-center gap-1.5 text-[0.78rem] text-muted-2"><Icon className="h-3.5 w-3.5" /> {p.method}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
