/**
 * Shared site content — extracted verbatim from the supplied artboards.
 * Copy is reproduced as designed; do not rewrite.
 */

export const site = {
  name: "Duonox",
  domain: "duonoxx.com",
  tagline: "Where Vision Becomes Identity",
  description:
    "A creative agency designing premium brand identities, editorial systems and digital experiences.",
  email: "hello@duonoxx.com",
  phone: "+233 26 519 6607",
  phoneHref: "+233265196607",
  location: "Remote, worldwide",
  studio: "Accra, Ghana",
} as const;

/** Primary navigation as shown in the header artboard (Navigation.svg). */
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  agency: {
    title: "Agency",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  elsewhere: {
    title: "Elsewhere",
    links: [
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Journal", href: "/work" },
      { label: "Privacy policy", href: "/privacy" },
    ],
  },
  letters: {
    title: "Letters",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.phone, href: `tel:${site.phoneHref}` },
      { label: site.location, href: null },
    ],
  },
} as const;

/** Client roster shown in logo bars across the site. */
export const clients = [
  "Seon.",
  "Legend Motors",
  "Residens",
  "Régal.",
  "Flurum Fitness",
  "Black Rose",
] as const;

/** FAQ — "Before you write to us." (verbatim from Home / Pricing / Contact). */
export const faqs = [
  {
    q: "How long until you can start a new project?",
    a: "We currently take on the next project four to six weeks out. Smaller, defined briefs sometimes slot in faster. Write to us with a paragraph and we will give you a precise window.",
  },
  {
    q: "How do you handle payment and milestones?",
    a: "Defined projects bill in three milestones — 50 / 40 / 10 across the engagement. Partnerships are billed monthly in advance. Figures are shared on the first reply, tailored to scope.",
  },
  {
    q: "Who owns the work after handover?",
    a: "You do. On final payment, all deliverables and the rights to them transfer to you. We keep a copy for our portfolio unless you ask us not to.",
  },
  {
    q: "Do you work remotely or in person?",
    a: "We work remotely by default and travel for kickoff and milestone reviews when it serves the work. Most of the engagement happens over shared docs and calls.",
  },
  {
    q: "Do you take on smaller or independent projects?",
    a: "Yes. If yours isn't here, write anyway. Advisory sessions and half-day rates exist precisely for smaller, defined pieces of work.",
  },
  {
    q: "What is not included in the engagement?",
    a: "Media spend, third-party licences and paid stock sit outside the fee. We flag anything billable before it starts, so nothing lands as a surprise.",
  },
] as const;
