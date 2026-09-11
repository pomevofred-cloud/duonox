"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/site";
import { ArrowRight, MenuIcon, CloseIcon } from "@/components/icons";

type Variant = "light" | "brand";

/**
 * Floating pill header from the artboards.
 * - "light"  → white pill (used over photo/light heroes, e.g. Home)
 * - "brand"  → blue pill  (used over dark heroes, e.g. Services / Pricing / Contact / About)
 */
export function Header({ variant = "brand" }: { variant?: Variant }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isLight = variant === "light";
  const pillBg = isLight
    ? "bg-white text-ink"
    : "bg-brand-500 text-white";
  const navText = isLight ? "text-ink-soft" : "text-white/85";
  const navActive = isLight ? "text-ink" : "text-white";
  const ctaClass = isLight
    ? "bg-brand-500 text-white hover:bg-brand-600"
    : "bg-white text-brand-500 hover:bg-white/90";
  const dot = isLight ? "bg-brand-500" : "bg-white";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // The Home artboard shows "Home" (active) as the first nav item; inner-page
  // artboards start at "Services". Reproduce that per-page.
  const navItems =
    pathname === "/" ? [{ label: "Home", href: "/" }, ...nav] : [...nav];

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-4 md:pt-6">
      <div className="container-page">
        <div
          className={`flex items-center justify-between gap-4 rounded-[999px] pl-6 pr-4 py-3 md:py-3.5 md:pl-8 md:pr-4 shadow-[0_10px_40px_rgba(11,11,20,0.14)] ${pillBg}`}
        >
          <Logo size={24} className="shrink-0" />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.95rem] font-medium transition-colors ${
                    active ? navActive : `${navText} hover:${navActive}`
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full ${dot}`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={`btn hidden md:inline-flex ${ctaClass}`}
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden ${
                isLight ? "text-ink" : "text-white"
              }`}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-brand-500 text-white md:hidden">
          <div className="flex items-center justify-between px-6 pt-4">
            <Logo size={24} className="text-white" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-1 px-6">
            {[{ label: "Home", href: "/" }, ...nav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/15 py-5 text-3xl font-medium"
                style={{ fontFamily: "var(--font-google-sans)" }}
              >
                {item.label}
                <ArrowRight className="h-6 w-6 opacity-70" />
              </Link>
            ))}
          </nav>
          <div className="px-6 pt-10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn w-full bg-white text-brand-500"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
