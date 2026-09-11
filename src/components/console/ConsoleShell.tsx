"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { metrics, agency, money } from "@/lib/console-data";
import {
  LayoutGrid, BarChart, Users, Receipt, CreditCard, Mail, LinkIcon,
  Bell, Search, HelpCircle, LogOut, MenuIcon, CloseIcon, MoreHorizontal,
} from "@/components/icons";

const nav = [
  { label: "Overview", href: "/console", icon: LayoutGrid },
  { label: "Website", href: "/console/website", icon: BarChart },
  { label: "Clients", href: "/console/clients", icon: Users, badge: 2 },
  { label: "Invoices", href: "/console/invoices", icon: Receipt, badge: 3 },
  { label: "Payments", href: "/console/payments", icon: CreditCard },
  { label: "Email", href: "/console/email", icon: Mail },
  { label: "Connect", href: "/console/connect", icon: LinkIcon },
];

const bottomNav = [
  { label: "Overview", href: "/console", icon: LayoutGrid },
  { label: "Website", href: "/console/website", icon: BarChart },
  { label: "Invoices", href: "/console/invoices", icon: Receipt },
  { label: "Clients", href: "/console/clients", icon: Users },
];

function useActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/console" ? pathname === "/console" : pathname.startsWith(href);
}

function titleFor(pathname: string) {
  if (pathname.startsWith("/console/invoices/")) return `Invoices · ${pathname.split("/").pop()}`;
  const item = nav.find((n) => (n.href === "/console" ? pathname === "/console" : pathname.startsWith(n.href)));
  return item?.label ?? "Overview";
}

export function ConsoleShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = useActive();
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-[248px] flex-col border-r border-line bg-white px-4 py-6 lg:flex">
        <div className="px-2">
          <Logo size={24} href="/console" />
        </div>
        <p className="mt-8 px-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-2">
          Console
        </p>
        <nav className="mt-3 flex-1 space-y-1">
          {nav.map((n) => {
            const on = isActive(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.92rem] font-medium transition-colors ${
                  on ? "bg-brand-500 text-white shadow-sm" : "text-ink-soft hover:bg-canvas"
                }`}
              >
                <n.icon className={`h-[18px] w-[18px] ${on ? "text-white" : "text-muted"}`} />
                <span className="flex-1">{n.label}</span>
                {n.badge && (
                  <span
                    className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[0.7rem] font-semibold ${
                      on ? "bg-white/20 text-white" : "bg-canvas text-muted"
                    }`}
                  >
                    {n.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <CollectionRateCard />

        <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
          <Image src={agency.user.avatar} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[0.9rem] font-semibold">{agency.user.name}</p>
            <p className="truncate text-[0.78rem] text-muted-2">{agency.user.role}</p>
          </div>
          <Link href="/" aria-label="Sign out" className="text-muted-2 hover:text-ink">
            <LogOut className="h-[18px] w-[18px]" />
          </Link>
        </div>
      </aside>

      {/* Main column */}
      <div className="lg:pl-[248px]">
        {/* Desktop topbar */}
        <header className="sticky top-0 z-30 hidden items-center justify-between border-b border-line bg-canvas/90 px-8 py-4 backdrop-blur lg:flex">
          <p className="text-[0.9rem] text-muted">{titleFor(pathname)}</p>
          <div className="flex items-center gap-2.5">
            <IconBtn><HelpCircle className="h-[18px] w-[18px]" /></IconBtn>
            <span className="relative">
              <IconBtn><Bell className="h-[18px] w-[18px]" /></IconBtn>
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-overdue" />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-[0.82rem] font-medium">
              <span className="h-2 w-2 rounded-full bg-paid" /> Connected
            </span>
          </div>
        </header>

        {/* Mobile top header */}
        <header className="sticky top-0 z-30 flex items-center justify-between bg-canvas/95 px-5 py-4 backdrop-blur lg:hidden">
          <Logo size={22} href="/console" />
          <div className="flex items-center gap-2">
            <span className="relative">
              <IconBtn><Bell className="h-[18px] w-[18px]" /></IconBtn>
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-overdue" />
            </span>
            <IconBtn><Search className="h-[18px] w-[18px]" /></IconBtn>
          </div>
        </header>

        <main className="px-5 pb-28 pt-2 lg:px-8 lg:pb-12 lg:pt-6">{children}</main>
      </div>

      {/* Mobile bottom nav */}
      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-line bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur lg:hidden">
        {bottomNav.map((n) => {
          const on = isActive(n.href);
          return (
            <Link key={n.href} href={n.href} className="flex flex-1 flex-col items-center gap-1 py-1.5">
              <span className={`flex h-8 w-10 items-center justify-center rounded-lg ${on ? "bg-brand-50 text-brand-500" : "text-muted"}`}>
                <n.icon className="h-[20px] w-[20px]" />
              </span>
              <span className={`text-[0.68rem] ${on ? "font-semibold text-brand-500" : "text-muted-2"}`}>{n.label}</span>
            </Link>
          );
        })}
        <button onClick={() => setMoreOpen(true)} className="flex flex-1 flex-col items-center gap-1 py-1.5">
          <span className="flex h-8 w-10 items-center justify-center rounded-lg text-muted">
            <MenuIcon className="h-[20px] w-[20px]" />
          </span>
          <span className="text-[0.68rem] text-muted-2">More</span>
        </button>
      </nav>

      {/* Mobile "More" sheet */}
      {moreOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMoreOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 rounded-t-[1.5rem] bg-white p-5 pb-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-lg font-semibold">More</p>
              <button onClick={() => setMoreOpen(false)} aria-label="Close" className="text-muted">
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-1">
              {[nav[4], nav[5], nav[6]].map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setMoreOpen(false)} className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-canvas">
                  <n.icon className="h-5 w-5 text-muted" />
                  <span className="font-medium">{n.label}</span>
                </Link>
              ))}
              <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-3 text-overdue hover:bg-canvas">
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Sign out</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function IconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition-colors hover:text-ink">
      {children}
    </button>
  );
}

function CollectionRateCard() {
  const filled = Math.round((metrics.collectionRate / 100) * 22);
  return (
    <div className="rounded-2xl bg-[linear-gradient(150deg,#3a2ef0,#1a10c4)] p-4 text-white">
      <p className="text-[0.82rem] font-medium">Collection rate</p>
      <p className="mt-1 text-[0.72rem] text-white/70">
        {money(metrics.collected)} of {money(metrics.invoiced)} invoiced
      </p>
      <div className="mt-3 flex gap-[2px]">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full ${i < filled ? "bg-white" : "bg-white/25"}`} />
        ))}
      </div>
      <p className="mt-3 text-[0.72rem] text-white/80">
        {metrics.collectionRate}% collected · {metrics.overdueCount} overdue
      </p>
    </div>
  );
}
