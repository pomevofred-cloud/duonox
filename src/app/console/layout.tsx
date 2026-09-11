import type { Metadata } from "next";
import { ConsoleShell } from "@/components/console/ConsoleShell";

export const metadata: Metadata = {
  title: "Console",
  description: "The Duonox Console — invoices, clients, payments and website analytics.",
  robots: { index: false, follow: false },
};

export default function ConsoleLayout({ children }: { children: React.ReactNode }) {
  return <ConsoleShell>{children}</ConsoleShell>;
}
