# Duonox

A faithful implementation of the **Duonox** design — a creative-agency marketing website plus an internal invoicing **Console** — built from the supplied artboards (PDF/SVG), fonts and assets.

**Duonox — _Where Vision Becomes Identity._**

---

## What's inside

### Public website (`/`)
| Route | Page |
|-------|------|
| `/` | Home — hero, disciplines, process, testimonials, FAQ, CTA |
| `/about` | About — "Two minds, one agency." + What We Believe |
| `/services` | Services — five disciplines, capabilities bento |
| `/pricing` | Pricing — Project / Partnership / Advisory + ways to reach us |
| `/contact` | Contact — enquiry form + direct contact |
| `/work` | Work — branded **Coming Soon** |
| `/privacy` | Privacy policy |

A multi-step **Discovery-call booking modal** (Date & time → Your details → Confirmed) opens from the hero CTA.

### Console / admin dashboard (`/console`)
| Route | Page |
|-------|------|
| `/console` | Overview — revenue, funnel, money-in/out, payment mix, invoice health |
| `/console/website` | Website analytics — visitors, pages, referrers, devices, countries |
| `/console/clients` | Clients table with totals read from invoices |
| `/console/invoices` | Invoices list with status filters |
| `/console/invoices/2026-005` | Full branded invoice detail with activity timeline |
| `/console/payments` | Payments received |
| `/console/email` | Sent messages |
| `/console/connect` | Tracker / integration setup |

Every page ships **desktop and mobile** layouts. The Console renders as a sidebar app on desktop and a bottom-tab app on mobile, matching the artboards.

> The Console is a **front-end implementation with static demo data** (`src/lib/console-data.ts`) — every figure is transcribed from the design. There is no backend; forms confirm client-side.

---

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (design tokens sampled from the artboards)
- **next/font** loading the supplied **Google Sans Flex** (display) and **Plus Jakarta Sans** (body) locally
- No UI framework or template — every component is hand-built to match the design
- Icons: the design's own SVG assets first; a small Lucide-style set for generic UI actions

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Lint |

## Project structure

```
src/
├── app/                     # routes (public pages + /console)
│   ├── layout.tsx           # fonts, metadata, BookingProvider
│   ├── globals.css          # design tokens + base styles
│   └── console/             # dashboard routes + layout
├── components/
│   ├── layout/              # Header, Footer
│   ├── sections/            # page sections (home, about, services, …)
│   ├── console/             # ConsoleShell + dashboard UI
│   ├── booking/             # Discovery-call modal
│   ├── ui/                  # Stars, AvatarStack, SectionLabel
│   ├── Logo.tsx             # recolorable wordmark
│   └── icons.tsx
├── fonts/                   # Google Sans Flex + Plus Jakarta Sans (TTF)
└── lib/                     # site content + console data
public/
├── images/                  # photos & illustrations extracted from the design SVGs
└── logo/
```

## Deployment — GitHub Pages (free, GitHub-native)

**GitHub is the single source of truth.** The site is deployed to **GitHub Pages** — no paid hosting, no Vercel Pro.

- **Live site:** https://pomevofred-cloud.github.io/duonox/
- **Live dashboard:** https://pomevofred-cloud.github.io/duonox/console/

**How it works:**
- `main` holds the source code.
- `gh-pages` holds the built static export (produced with `DEPLOY_TARGET=pages`, which sets `output: export` + `basePath: /duonox`). GitHub Pages serves this branch.

**To publish changes** — the workflow is `Edit → Commit → Push → Deploy`:

```bash
git add -A && git commit -m "…" && git push   # push source to main
npm run deploy                                 # build + publish to gh-pages
```

`npm run deploy` runs `scripts/deploy-pages.sh`: it builds the static export and pushes it to `gh-pages`; GitHub Pages then rebuilds automatically (~1 min).

**Custom domain:** in the repo's **Settings → Pages → Custom domain**, add your domain and a `CNAME` DNS record. On a root domain (served at `/`), remove `basePath` from `next.config.ts` before deploying so asset paths resolve at the root.

> Runs the same locally (`npm run dev`) and would also deploy to Vercel's **free** tier if ever wanted — the app never requires Vercel Pro. No environment variables are required.

## Fonts & assets

The supplied fonts and the images/illustrations embedded in the design SVGs are used directly — nothing is substituted. The logo is reproduced as a recolorable component so it renders correctly on light and dark surfaces.

---

© 2026 Duonox. Implementation faithful to the supplied design.
