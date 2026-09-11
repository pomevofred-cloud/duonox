import { clients, metrics, money } from "@/lib/console-data";
import { PageHeader, StatCard, ClientPill } from "@/components/console/ui";
import { Plus } from "@/components/icons";

export default function ClientsPage() {
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value="10" label="Clients" sub="7 active · 2 leads" variant="brand" />
        <StatCard value={money(metrics.invoiced)} label="Invoiced" sub="across 7 issued invoices" />
        <StatCard value={money(metrics.collected)} label="Collected" sub="82.4% of invoiced" />
        <StatCard value={money(metrics.outstanding)} label="Outstanding" sub="$2,130 of it overdue" variant="warm" />
      </div>

      <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
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
                        <p className="truncate text-[0.78rem] text-muted-2">
                          {c.contact} · {c.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-ink-soft">{c.country}</td>
                  <td className="px-4 py-4 text-center text-ink-soft">{c.invoices || "—"}</td>
                  <td className="px-4 py-4 text-right font-semibold text-ink">
                    {c.invoiced ? money(c.invoiced) : <span className="font-normal text-muted-2">$0</span>}
                  </td>
                  <td className="px-4 py-4 text-right">
                    {c.collected ? (
                      <span className="font-semibold text-paid">{money(c.collected)}</span>
                    ) : (
                      <span className="text-muted-2">$0</span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-right">
                    {c.outstanding ? (
                      <span className="font-semibold text-partpaid">{money(c.outstanding)}</span>
                    ) : (
                      <span className="text-muted-2">$0</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end">
                      <ClientPill status={c.status} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
