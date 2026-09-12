/**
 * Console mock data — every figure is transcribed from the dashboard artboards
 * (Phase one / Client / Back to Invoices / Website_2 / Payment / Connect).
 * This is a front-end implementation with no backend; numbers are static.
 */

export type Status = "Active" | "Inactive" | "Lead";
export type InvoiceStatus = "Paid" | "Overdue" | "Part paid" | "Draft";

export const metrics = {
  invoiced: 23800,
  collected: 19620,
  outstanding: 4180,
  collectionRate: 82.4,
  overdueAmount: 2130,
  overdueCount: 2,
  issuedInvoices: 7,
  draftInvoices: 1,
  revenue30: 5720,
  invoiced30: 8600,
  paymentsReceived: 4,
  paymentsAllTime: 8,
  openInvoices: 3,
  visitors: 610,
  pageviews: 1504,
  enquiries: 14,
  newClients: 2,
  invoicesIssued: 3,
  emailsSent: 7,
};

export const clients = [
  { name: "Capital Logistic", contact: "Jonathan Rhodall", email: "Jonathan@capitallogistic.cd", country: "Congo RDC", invoices: 1, invoiced: 880, collected: 0, outstanding: 880, status: "Active" as Status },
  { name: "Black Rose", contact: "Nadia Rose", email: "nadia@blackrose.co", country: "UK", invoices: 1, invoiced: 3300, collected: 3300, outstanding: 0, status: "Active" as Status },
  { name: "Kwame & Co.", contact: "Ada Mensah", email: "ada@kwameco.gh", country: "Ghana", invoices: 1, invoiced: 4050, collected: 2000, outstanding: 2050, status: "Active" as Status },
  { name: "Seon.", contact: "Seon Park", email: "seon@seon.studio", country: "South Korea", invoices: 1, invoiced: 1250, collected: 0, outstanding: 1250, status: "Active" as Status },
  { name: "Régal.", contact: "Marc Lefèvre", email: "marc@regal.fr", country: "France", invoices: 1, invoiced: 2420, collected: 2420, outstanding: 0, status: "Active" as Status },
  { name: "Residens", contact: "Ingrid Halvorsen", email: "ingrid@residens.no", country: "Norway", invoices: 1, invoiced: 4600, collected: 4600, outstanding: 0, status: "Active" as Status },
  { name: "Legend Motors", contact: "Marcus Vale", email: "marcus@legendmotors.com", country: "UAE", invoices: 1, invoiced: 7300, collected: 7300, outstanding: 0, status: "Active" as Status },
  { name: "Flurum Fitness", contact: "Tomi Kessié", email: "tomi@flurumfitness.com", country: "Ghana", invoices: 0, invoiced: 0, collected: 0, outstanding: 0, status: "Inactive" as Status },
  { name: "Linguafrica", contact: "Amara Nwosu", email: "amara@linguafrica.com", country: "United Stated", invoices: 0, invoiced: 0, collected: 0, outstanding: 0, status: "Lead" as Status },
  { name: "Atelier Nord", contact: "Julien Roche", email: "julien@ateliernord.fr", country: "France", invoices: 0, invoiced: 0, collected: 0, outstanding: 0, status: "Lead" as Status },
];

export const invoices = [
  { id: "2026-008", client: "Kwame & Co.", project: "Web & product", issued: "14 Sep", due: "24 Oct", amount: 4050, paid: 2000, status: "Part paid" as InvoiceStatus },
  { id: "2026-007", client: "Flurum Fitness", project: "Studio rebrand", issued: "21 Sep", due: "19 Oct", amount: 1600, paid: 0, status: "Draft" as InvoiceStatus },
  { id: "2026-006", client: "Seon.", project: "Brand refresh", issued: "13 Sep", due: "20 Sep", amount: 1250, paid: 0, status: "Overdue" as InvoiceStatus },
  { id: "2026-005", client: "Capital Logistic", project: "Website & RS", issued: "05 Aug", due: "10 Aug", amount: 880, paid: 0, status: "Overdue" as InvoiceStatus },
  { id: "2026-004", client: "Black Rose", project: "Identity system", issued: "11 Sep", due: "18 Sep", amount: 3300, paid: 3300, status: "Paid" as InvoiceStatus },
  { id: "2026-003", client: "Régal.", project: "Packaging system", issued: "02 Jul", due: "09 Jul", amount: 2420, paid: 2420, status: "Paid" as InvoiceStatus },
  { id: "2026-002", client: "Residens", project: "Editorial system", issued: "14 Jun", due: "21 Jun", amount: 4600, paid: 4600, status: "Paid" as InvoiceStatus },
  { id: "2026-001", client: "Legend Motors", project: "Digital & product", issued: "11 May", due: "18 May", amount: 7300, paid: 7300, status: "Paid" as InvoiceStatus },
];

export const payments = [
  { client: "Kwame & Co.", ref: "2026-008", date: "21 Sep", amount: 2000, method: "Bank transfer" },
  { client: "Black Rose", ref: "2026-004", date: "19 Sep", amount: 1500, method: "Card" },
  { client: "Régal.", ref: "2026-003", date: "16 Sep", amount: 420, method: "Mobile money" },
  { client: "Black Rose", ref: "2026-004", date: "11 Sep", amount: 1800, method: "Bank transfer" },
  { client: "Régal.", ref: "2026-003", date: "22 Aug", amount: 800, method: "Bank transfer" },
  { client: "Régal.", ref: "2026-003", date: "10 Jul", amount: 1200, method: "Card" },
  { client: "Residens", ref: "2026-002", date: "13 Jul", amount: 4600, method: "Bank transfer" },
  { client: "Legend Motors", ref: "2026-001", date: "20 May", amount: 7300, method: "Bank transfer" },
];

export const emails = [
  { subject: "Invoice 2026-008 from Duonox", client: "Kwame & Co.", kind: "invoice", sent: "3d ago", status: "Opened" },
  { subject: "Reminder: invoice 2026-006 due", client: "Seon.", kind: "reminder", sent: "5d ago", status: "Delivered" },
  { subject: "Proposal — brand identity system", client: "Atelier Nord", kind: "proposal", sent: "6d ago", status: "Opened" },
  { subject: "Invoice 2026-006 from Duonox", client: "Seon.", kind: "invoice", sent: "12d ago", status: "Clicked" },
  { subject: "Re: kickoff and discovery call", client: "Linguafrica", kind: "reply", sent: "14d ago", status: "Opened" },
  { subject: "Duonox letters — no. 4", client: "Black Rose", kind: "newsletter", sent: "18d ago", status: "Sent" },
  { subject: "Invoice 2026-005 from Duonox", client: "Capital Logistic", kind: "invoice", sent: "33d ago", status: "Bounced" },
];

export const paymentMix = [
  { label: "Bank transfer", amount: 3800, color: "#2115db" },
  { label: "Card", amount: 1500, color: "#17a565" },
  { label: "Mobile money", amount: 420, color: "#e0a800" },
];

export const funnel = [
  { label: "Visitors", value: 610, pct: 100, note: "" },
  { label: "Enquiries", value: 14, pct: 2.3, note: "2.3%" },
  { label: "New clients", value: 2, pct: 14.3, note: "14.3%" },
  { label: "Invoices issued", value: 3, pct: 21, note: "" },
  { label: "Payments received", value: 4, pct: 30, note: "" },
];

export const invoiceHealth = [
  { label: "Paid", count: 4, amount: 17620, color: "#17a565" },
  { label: "Overdue", count: 2, amount: 2130, color: "#e5484d" },
  { label: "Part paid", count: 1, amount: 4050, color: "#e0a800" },
  { label: "Draft", count: 1, amount: 1600, color: "#9a9aa6" },
];

// Website analytics
export const analytics = {
  visitors: 610,
  pageviews: 1504,
  enquiries: 14,
  conversion: 2.3,
  daily: [12, 9, 14, 7, 11, 18, 15, 10, 13, 16, 14, 22, 12, 17, 24, 30, 14, 19, 16, 12, 20, 28, 18, 15, 21, 32, 19, 14, 24, 30],
  pages: [
    { path: "/home", views: 612 },
    { path: "/work", views: 288 },
    { path: "/services", views: 201 },
    { path: "/about", views: 174 },
    { path: "/pricing", views: 132 },
    { path: "/contact", views: 97 },
  ],
  referrers: [
    { name: "Direct", sessions: 268, brand: false },
    { name: "google.com", sessions: 141, brand: true },
    { name: "instagram.com", sessions: 88, brand: false },
    { name: "linkedin.com", sessions: 61, brand: false },
    { name: "dribbble.com", sessions: 32, brand: false },
    { name: "Whatsapp", sessions: 20, brand: false },
  ],
  devices: [
    { name: "Desktop", sessions: 361 },
    { name: "Mobile", sessions: 198 },
    { name: "Tablet", sessions: 51 },
  ],
  countries: [
    { name: "Ghana", sessions: 168 },
    { name: "France", sessions: 121 },
    { name: "United Kingdom", sessions: 96 },
    { name: "United States", sessions: 84 },
    { name: "Nigeria", sessions: 71 },
    { name: "Norway", sessions: 42 },
  ],
};

// Invoice detail (2026-005 · Capital Logistic)
export const invoiceDetail = {
  id: "2026-005",
  client: "Capital Logistic",
  clientCountry: "Congo RDC",
  clientPhone: "+243 829 546 087",
  issued: "Aug 5, 2026",
  due: "Aug 10, 2026",
  project: "Website & RS",
  status: "Overdue" as InvoiceStatus,
  total: 880,
  received: 0,
  outstanding: 880,
  from: { name: "Duonox Agency", location: "Accra, Ghana", phone: "+233 26 519 6607" },
  lines: [
    { desc: "Website Design", detail: "Custom UI/UX design up to 3–4 pages", qty: 1, unit: 370 },
    { desc: "Website Development", detail: "Front-end & back-end coding, CMS setup, responsive", qty: 1, unit: 300 },
    { desc: "Tracking System Integration", detail: "Setup, configuration, workflow implementation, testing", qty: 1, unit: 85 },
    { desc: "Deployment & Launch Support", detail: "Hosting setup, DNS, and go-live assistance", qty: 1, unit: 75 },
    { desc: "Social Media Setup", detail: "Cover design, Instagram, TikTok and Facebook pages", qty: 1, unit: 50 },
  ],
  // Account number masked for the public demo — restore the full number for real use.
  bank: { name: "Ecobank", account: "Fred Kouassi Pomevo", number: "•••• •••• 5998", swift: "ECOCGHAC", reference: "Website & RS" },
  activity: [
    { icon: "bell", title: "Second reminder sent", sub: "leon@capitallogistic.cd", when: "22 Sep" },
    { icon: "bell", title: "Reminder sent", sub: "leon@capitallogistic.cd", when: "02 Sep" },
    { icon: "eye", title: "Invoice viewed", sub: "Opened twice", when: "07 Aug" },
    { icon: "send", title: "Invoice sent", sub: "leon@capitallogistic.cd", when: "05 Aug" },
  ],
};

export const agency = {
  name: "Duonox Agency",
  email: "hello@duonoxx.com",
  phone: "+233 26 519 6607",
  location: "Accra, Ghana",
  invoicePrefix: "2026",
  bank: "Ecobank",
  siteKey: "dx_12758b97d7da38b4",
  user: { name: "Fred Pomevo", role: "Duonox Agency", avatar: "/images/avatars/a7.jpg" },
};

export function money(n: number, decimals = false) {
  return "$" + n.toLocaleString("en-US", {
    minimumFractionDigits: decimals ? 2 : 0,
    maximumFractionDigits: decimals ? 2 : 0,
  });
}
