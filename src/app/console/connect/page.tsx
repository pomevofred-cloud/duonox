import { agency, analytics } from "@/lib/console-data";
import { PageHeader, Panel } from "@/components/console/ui";
import { CopyBlock } from "@/components/console/CopyBlock";

const steps = [
  {
    n: "1",
    title: "Add the tracker",
    badge: "Required",
    badgeCls: "bg-brand-500 text-white",
    desc: "Anywhere before </head>. Works on any site — static, Webflow, Next.js, WordPress.",
    code: `<script defer\n  src="https://console.duonoxx.com/track.js"\n  data-key="${agency.siteKey}"></script>`,
  },
  {
    n: "2",
    title: "Mark your contact form",
    badge: "Recommended",
    badgeCls: "bg-lavender text-brand-700",
    desc: "Add data-duonox-lead and every submission becomes a lead in Clients.",
    code: `<form data-duonox-lead>\n  <input name="name"    placeholder="Your name">\n  <input name="email"   placeholder="Email">\n  <input name="company" placeholder="Company">\n  <textarea name="message"></textarea>\n  <button type="submit">Send</button>\n</form>`,
  },
  {
    n: "3",
    title: "Or post from your server",
    badge: "Optional",
    badgeCls: "bg-canvas text-muted",
    desc: "The same endpoint, for forms you already handle server-side.",
    code: `curl -X POST https://console.duonoxx.com/api/collect \\\n  -H 'content-type: application/json' \\\n  -d '{"k":"${agency.siteKey}","t":"lead",\n       "name":"Ada Mensah","email":"ada@studio.com"}'`,
  },
];

const details = [
  { label: "Agency name", value: agency.name },
  { label: "Email", value: agency.email },
  { label: "Phone", value: agency.phone },
  { label: "Location", value: agency.location },
  { label: "Invoice prefix", value: agency.invoicePrefix },
  { label: "Bank", value: agency.bank },
];

export default function ConnectPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Connect"
        title={<>One line on your site,<br className="hidden md:block" /> and the numbers start.</>}
        subtitle="Paste the snippet into the <head> of duonoxx.com. Pageviews, referrers and enquiries flow straight in."
      />

      <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-5">
          {steps.map((s) => (
            <Panel key={s.n}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[1.05rem] font-semibold">{s.n} · {s.title}</p>
                  <p className="mt-1 text-[0.85rem] text-muted">{s.desc}</p>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-[0.72rem] font-medium ${s.badgeCls}`}>
                  {s.badge}
                </span>
              </div>
              <div className="mt-4">
                <CopyBlock code={s.code} />
              </div>
            </Panel>
          ))}

          <Panel>
            <p className="text-[1.05rem] font-semibold">Custom events</p>
            <p className="mt-1 text-[0.85rem] text-muted">Call this anywhere on the page to record a moment that matters.</p>
            <div className="mt-4">
              <CopyBlock code={`duonox.track('pricing_viewed')\nduonox.lead({ name: 'Ada', email: 'ada@studio.com' })`} />
            </div>
          </Panel>
        </div>

        <div className="space-y-5">
          <Panel>
            <p className="text-[1.05rem] font-semibold">Site key</p>
            <p className="mt-0.5 text-[0.8rem] text-muted-2">Identifies your website to this console</p>
            <div className="mt-4">
              <CopyBlock code={agency.siteKey} />
            </div>
            <button className="btn btn-ghost mt-3 w-full text-[0.85rem]">Generate a new key</button>
          </Panel>

          <Panel>
            <p className="text-[1.05rem] font-semibold">Live status</p>
            <div className="mt-4 space-y-3 text-[0.9rem]">
              <div className="flex items-center justify-between">
                <span className="text-muted">Tracker</span>
                <span className="flex items-center gap-2 font-medium text-paid">
                  <span className="h-2 w-2 rounded-full bg-paid" /> Reporting
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-line-soft pt-3">
                <span className="text-muted">Visitors, 30 days</span>
                <span className="font-semibold">{analytics.visitors}</span>
              </div>
              <div className="flex items-center justify-between border-t border-line-soft pt-3">
                <span className="text-muted">Pageviews, 30 days</span>
                <span className="font-semibold">{analytics.pageviews.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between border-t border-line-soft pt-3">
                <span className="text-muted">Enquiries, 30 days</span>
                <span className="font-semibold">{analytics.enquiries}</span>
              </div>
            </div>
          </Panel>

          <Panel>
            <div className="flex items-center justify-between">
              <p className="text-[1.05rem] font-semibold">Agency details</p>
              <span className="text-[0.72rem] text-muted-2">Printed on every invoice</span>
            </div>
            <div className="mt-4 space-y-4">
              {details.map((d) => (
                <div key={d.label}>
                  <label className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-muted-2">{d.label}</label>
                  <div className="mt-1.5 rounded-xl border border-line bg-white px-4 py-2.5 text-[0.92rem] text-ink">
                    {d.value}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
