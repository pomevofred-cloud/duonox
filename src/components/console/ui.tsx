import type { InvoiceStatus, Status } from "@/lib/console-data";

/* ── Page header ── */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted-2">
          {eyebrow}
        </p>
        <h1 className="display mt-2 text-4xl leading-[1.02] md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-[0.95rem] text-muted">{subtitle}</p>}
      </div>
      {action && <div className="flex flex-wrap items-center gap-2">{action}</div>}
    </div>
  );
}

/* ── Date range tabs (static) ── */
export function RangeTabs({ ranges = ["7 days", "30 days", "90 days", "12 months"], active = "30 days" }: { ranges?: string[]; active?: string }) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white p-1 text-[0.82rem] shadow-sm">
      {ranges.map((r) => (
        <span
          key={r}
          className={`rounded-full px-3 py-1.5 ${r === active ? "bg-canvas font-medium text-ink" : "text-muted"}`}
        >
          {r}
        </span>
      ))}
    </div>
  );
}

/* ── Status pills ── */
const invoiceStyles: Record<InvoiceStatus, string> = {
  Paid: "bg-paid-bg text-paid",
  Overdue: "bg-overdue-bg text-overdue",
  "Part paid": "bg-partpaid-bg text-partpaid",
  Draft: "bg-draft-bg text-draft",
};
export function InvoicePill({ status }: { status: InvoiceStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] font-medium ${invoiceStyles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

const clientStyles: Record<Status, string> = {
  Active: "bg-paid-bg text-paid",
  Inactive: "bg-draft-bg text-draft",
  Lead: "bg-lead-bg text-lead",
};
export function ClientPill({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] font-medium ${clientStyles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

/* ── Stat card ── */
export function StatCard({
  value,
  label,
  sub,
  variant = "light",
  delta,
}: {
  value: React.ReactNode;
  label: string;
  sub?: string;
  variant?: "light" | "brand" | "warm";
  delta?: string;
}) {
  const cls =
    variant === "brand"
      ? "bg-brand-500 text-white"
      : variant === "warm"
        ? "bg-cream text-ink"
        : "bg-white text-ink shadow-card";
  const subCls = variant === "brand" ? "text-white/70" : "text-muted";
  return (
    <div className={`rounded-[1.1rem] p-5 ${cls}`}>
      <div className="flex items-start justify-between">
        <p className="display text-4xl">{value}</p>
        {delta && (
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.72rem] font-medium ${variant === "brand" ? "bg-white/15 text-white" : "bg-paid-bg text-paid"}`}>
            ↗ {delta}
          </span>
        )}
      </div>
      <p className="mt-3 text-[0.98rem] font-semibold">{label}</p>
      {sub && <p className={`mt-1 text-[0.82rem] ${subCls}`}>{sub}</p>}
    </div>
  );
}

/* ── Card wrapper ── */
export function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[1.25rem] bg-white p-6 shadow-card ${className}`}>{children}</div>;
}

/* ── Vertical bar chart (visitors) ── */
export function BarChartMini({ data, labels }: { data: number[]; labels?: boolean }) {
  const max = Math.max(...data);
  const peak = data.indexOf(max);
  return (
    <div>
      <div className="flex h-48 items-end gap-[3px]">
        {data.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[3px] bg-[linear-gradient(180deg,#4b3bf0,#a99cf7)]"
            style={{ height: `${(v / max) * 100}%`, opacity: i === peak ? 1 : 0.9 }}
          />
        ))}
      </div>
      {labels && (
        <div className="mt-2 flex justify-between text-[0.68rem] text-muted-2">
          {["01", "04", "07", "10", "13", "16", "19", "22", "26", "28", "30"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Horizontal bar list (pages, referrers, devices, countries) ── */
export function HBarList({
  title,
  unit,
  rows,
}: {
  title: string;
  unit: string;
  rows: { name: string; value: number; brand?: boolean }[];
}) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <div>
      <p className="text-[1.05rem] font-semibold text-ink">{title}</p>
      <p className="mt-0.5 text-[0.78rem] text-muted-2">{unit}</p>
      <div className="mt-4 space-y-3.5">
        {rows.map((r) => (
          <div key={r.name}>
            <div className="flex items-baseline justify-between text-[0.9rem]">
              <span className="text-ink-soft">{r.name}</span>
              <span className="font-semibold text-ink">{r.value}</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-canvas">
              <div
                className="h-full rounded-full"
                style={{ width: `${(r.value / max) * 100}%`, background: r.brand ? "#e0791f" : "var(--color-brand-500)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Area chart (money in / money out) ── */
export function AreaChart({ invoiced, collected }: { invoiced: number[]; collected: number[] }) {
  const w = 640;
  const h = 220;
  const max = Math.max(...invoiced, ...collected) * 1.1;
  const pts = (arr: number[]) =>
    arr.map((v, i) => `${(i / (arr.length - 1)) * w},${h - (v / max) * h}`);
  const line = (arr: number[]) => "M" + pts(arr).join(" L");
  const area = (arr: number[]) => `${line(arr)} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-56 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="collFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2115db" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#2115db" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75, 1].map((g) => (
        <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="var(--color-line)" strokeWidth="1" />
      ))}
      <path d={area(collected)} fill="url(#collFill)" />
      <path d={line(invoiced)} fill="none" stroke="#c2c2cf" strokeWidth="2.5" />
      <path d={line(collected)} fill="none" stroke="#2115db" strokeWidth="2.5" />
    </svg>
  );
}
