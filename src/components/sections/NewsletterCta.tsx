"use client";

import Image from "next/image";
import { useState } from "react";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Stars } from "@/components/ui/Stars";

const avatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a6.jpg",
  "/images/avatars/a3.jpg",
  "/images/avatars/a2.jpg",
];

export function NewsletterCta() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-canvas py-16 md:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-7 py-12 text-white md:px-14 md:py-16">
          <Image
            src="/images/waves-blue.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050510_0%,rgba(5,5,16,0.55)_45%,rgba(5,5,16,0.05)_100%)]" />

          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 py-1.5 pl-1.5 pr-4 text-ink">
                <AvatarStack avatars={avatars} size={24} />
                <span className="text-[0.8rem] font-medium">Trusted by 40+ founders</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Stars value={5} size={16} />
                <span className="text-sm text-white/70">(4.9)</span>
              </div>
            </div>

            <h2 className="display mt-8 max-w-[16ch] text-4xl text-white md:text-6xl">
              Let&apos;s create something exceptional together
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSent(true);
              }}
              className="mt-8 flex w-full max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-lg"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-[0.95rem] text-ink outline-none placeholder:text-muted-2"
              />
              <button type="submit" className="btn btn-primary px-6">
                {sent ? "Sent ✓" : "Send"}
              </button>
            </form>
            {sent && (
              <p className="mt-3 text-[0.85rem] text-white/70">
                Thanks — your first letter is on its way. We reply within two working days.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
