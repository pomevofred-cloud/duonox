import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, footerNav } from "@/lib/site";
import { Instagram, Dribbble, Linkedin } from "@/components/icons";

export function Footer() {
  const columns = [footerNav.agency, footerNav.elsewhere, footerNav.letters];
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#2417cf_0%,#180ea3_38%,#0c0940_100%)] text-white">
      <div className="container-page relative z-10 pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          {/* Brand + socials */}
          <div>
            <Logo size={30} className="text-white" />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/70">
              {site.description}
            </p>
            <div className="mt-7 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Dribbble, href: "https://dribbble.com", label: "Dribbble" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/50 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href ? (
                        <Link
                          href={l.href}
                          className="text-[0.95rem] text-white/75 transition-colors hover:text-white"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <span className="text-[0.95rem] text-white/75">{l.label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-6 sm:flex-row sm:items-center">
          <p className="text-[0.85rem] text-white/55">
            © 2026 {site.name}. All rights reserved.
          </p>
          <a href="#top" className="text-[0.85rem] text-white/70 transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>

      {/* Oversized watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-6 select-none text-center leading-none"
        style={{ fontFamily: "var(--font-plus-jakarta)" }}
      >
        <span className="block font-bold tracking-[-0.04em] text-white/[0.06] text-[26vw] leading-[0.8]">
          Duonox
        </span>
      </div>
    </footer>
  );
}
