"use client";

import { useState } from "react";
import { Copy, Check } from "@/components/icons";

export function CopyBlock({ code, mono = true }: { code: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard blocked — no-op */
    }
  };
  return (
    <div className="relative rounded-xl bg-[#0b0d1c] p-4 pr-24">
      <pre className={`overflow-x-auto whitespace-pre-wrap text-[0.8rem] leading-relaxed text-white/85 ${mono ? "font-mono" : ""}`}>
        {code}
      </pre>
      <button
        onClick={copy}
        className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-[0.78rem] font-medium text-white transition-colors hover:bg-white/20"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
