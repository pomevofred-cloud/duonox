import { analytics, money } from "@/lib/console-data";
import { PageHeader, RangeTabs, StatCard, Panel, BarChartMini, HBarList } from "@/components/console/ui";
import { LinkIcon } from "@/components/icons";

export default function WebsitePage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Website"
        title={<>Who is arriving,<br className="hidden md:block" /> and what they read.</>}
        subtitle="Live from the tracking snippet on duonoxx.com. Enquiries become leads in Clients automatically."
        action={
          <>
            <button className="btn btn-light">
              <LinkIcon className="h-4 w-4" /> Connection
            </button>
            <RangeTabs />
          </>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value={analytics.visitors} label="Visitors" sub="unique sessions" variant="brand" delta="+8%" />
        <StatCard value={analytics.pageviews.toLocaleString()} label="Pageviews" sub="2.5 per session" delta="+12%" />
        <StatCard value={analytics.enquiries} label="Enquiries" sub="from the contact form" variant="warm" delta="+40%" />
        <StatCard value={`${analytics.conversion}%`} label="Conversion" sub="visitor to enquiry" />
      </div>

      <Panel>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[1.05rem] font-semibold">Visitors over time</p>
            <p className="mt-0.5 text-[0.78rem] text-muted-2">Unique sessions per day</p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-canvas p-1 text-[0.8rem]">
            <span className="rounded-full bg-white px-3 py-1 font-medium shadow-sm">Sessions</span>
            <span className="px-3 py-1 text-muted">Views</span>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <div className="flex flex-col justify-between py-1 text-right text-[0.7rem] text-muted-2">
            <span>45</span><span>30</span><span>15</span><span>0</span>
          </div>
          <div className="flex-1">
            <BarChartMini data={analytics.daily} labels />
          </div>
        </div>
      </Panel>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Panel>
          <HBarList title="Pages" unit="views" rows={analytics.pages.map((p) => ({ name: p.path, value: p.views }))} />
        </Panel>
        <Panel>
          <HBarList title="Referrers" unit="sessions" rows={analytics.referrers.map((r) => ({ name: r.name, value: r.sessions, brand: r.brand }))} />
        </Panel>
        <Panel>
          <HBarList title="Devices" unit="sessions" rows={analytics.devices.map((d) => ({ name: d.name, value: d.sessions }))} />
        </Panel>
        <Panel>
          <HBarList title="Countries" unit="sessions" rows={analytics.countries.map((c) => ({ name: c.name, value: c.sessions }))} />
        </Panel>
      </div>
    </div>
  );
}
