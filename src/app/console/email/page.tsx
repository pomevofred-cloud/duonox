import { PageHeader, StatCard, Panel } from "@/components/console/ui";
import { Plus, Mail } from "@/components/icons";

const emails = [
  { to: "leon@capitallogistic.cd", subject: "Second reminder · Invoice 2026-005", status: "Opened", date: "22 Sep" },
  { to: "ada@kwameco.gh", subject: "Payment received · Invoice 2026-008", status: "Replied", date: "21 Sep" },
  { to: "seon@seon.studio", subject: "Reminder · Invoice 2026-006", status: "Opened", date: "20 Sep" },
  { to: "nadia@blackrose.co", subject: "Thank you · Invoice 2026-004 paid", status: "Opened", date: "19 Sep" },
  { to: "tomi@flurumfitness.com", subject: "Draft ready · Invoice 2026-007", status: "Bounced", date: "19 Sep" },
  { to: "amara@linguafrica.com", subject: "Re: Your enquiry", status: "Replied", date: "18 Sep" },
  { to: "marc@regal.fr", subject: "Receipt · Invoice 2026-003", status: "Opened", date: "16 Sep" },
];

const statusCls: Record<string, string> = {
  Opened: "bg-brand-50 text-brand-500",
  Replied: "bg-paid-bg text-paid",
  Bounced: "bg-overdue-bg text-overdue",
};

export default function EmailPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Email"
        title={<>Every message, in one place.</>}
        subtitle="Reminders, receipts and enquiry replies — sent from the console, tracked against each client."
        action={
          <button className="btn btn-primary">
            <Plus className="h-4 w-4" /> Compose
          </button>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value="7" label="Sent" sub="last 30 days" variant="brand" />
        <StatCard value="57%" label="Opened" sub="4 of 7 messages" />
        <StatCard value="2" label="Replied" sub="conversations continued" />
        <StatCard value="1" label="Bounced" sub="needs a valid address" variant="warm" />
      </div>

      <Panel className="p-0">
        <div className="divide-y divide-line-soft">
          {emails.map((e, i) => (
            <div key={i} className="flex items-center gap-4 px-6 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-canvas text-muted">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-ink">{e.subject}</p>
                <p className="truncate text-[0.82rem] text-muted-2">To {e.to}</p>
              </div>
              <span className={`hidden rounded-full px-2.5 py-1 text-[0.75rem] font-medium sm:inline-block ${statusCls[e.status]}`}>
                {e.status}
              </span>
              <span className="w-14 text-right text-[0.82rem] text-muted-2">{e.date}</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
