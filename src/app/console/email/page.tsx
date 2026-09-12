import { emails } from "@/lib/console-data";
import { PageHeader, StatCard } from "@/components/console/ui";
import { Plus, Mail } from "@/components/icons";

const statusColor: Record<string, { text: string; dot: string }> = {
  Opened: { text: "text-paid", dot: "bg-paid" },
  Clicked: { text: "text-paid", dot: "bg-paid" },
  Delivered: { text: "text-brand-500", dot: "bg-brand-500" },
  Sent: { text: "text-draft", dot: "bg-draft" },
  Bounced: { text: "text-overdue", dot: "bg-overdue" },
};

function StatusLabel({ status }: { status: string }) {
  const c = statusColor[status] ?? statusColor.Sent;
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.8rem] font-medium ${c.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} /> {status}
    </span>
  );
}

export default function EmailPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Email"
        title={<>What you sent, and who read it.</>}
        subtitle="Issuing an invoice logs its email here. Delivery status comes from your sending provider."
        action={
          <button className="btn btn-primary">
            <Plus className="h-4 w-4" /> Log an email
          </button>
        }
      />

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <StatCard value="7" label="Sent" sub="last 30 days" variant="brand" />
        <StatCard value="4" label="Opened" sub="57% open rate" />
        <StatCard value="1" label="Clicked" sub="25% of those opened" />
        <StatCard value="1" label="Bounced" sub="check the address" variant="warm" />
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-[1.25rem] bg-white shadow-card lg:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-line text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-muted-2">
              <th className="px-6 py-4">Subject</th>
              <th className="px-4 py-4">Client</th>
              <th className="px-4 py-4">Kind</th>
              <th className="px-4 py-4">Sent</th>
              <th className="px-6 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-[0.9rem]">
            {emails.map((e, i) => (
              <tr key={i} className="border-b border-line-soft last:border-0 hover:bg-canvas/60">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                      <Mail className="h-4 w-4" />
                    </span>
                    <span className="font-medium text-ink">{e.subject}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-[0.68rem] font-semibold text-muted">
                      {e.client.charAt(0)}
                    </span>
                    <span className="text-ink-soft">{e.client}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className="rounded-md bg-canvas px-2.5 py-1 text-[0.78rem] text-muted">{e.kind}</span>
                </td>
                <td className="px-4 py-4 text-muted-2">{e.sent}</td>
                <td className="px-6 py-4"><div className="flex justify-end"><StatusLabel status={e.status} /></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 lg:hidden">
        {emails.map((e, i) => (
          <div key={i} className="rounded-[1.1rem] bg-white p-4 shadow-card">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                <Mail className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="truncate font-semibold text-ink">{e.subject}</p>
                  <span className="shrink-0 text-[0.75rem] text-muted-2">{e.sent}</span>
                </div>
                <p className="truncate text-[0.85rem] text-muted-2">{e.client}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-line-soft pt-3">
              <span className="text-[0.8rem] text-muted">{e.kind}</span>
              <StatusLabel status={e.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
