"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import {
  CloseIcon, Clock, Video, Globe, User, Check,
  ChevronLeft, ChevronRight, Calendar,
} from "@/components/icons";

const MONTH = "September 2026";
// Sept 1, 2026 is a Tuesday → leading blanks for Sun, Mon.
const LEADING = 2;
const DAYS = 30;
const AVAILABLE = new Set(
  Array.from({ length: DAYS }, (_, i) => i + 1).filter((d) => {
    const dow = (LEADING + d - 1) % 7; // 0 Sun .. 6 Sat
    return dow !== 0 && dow !== 6 && d >= 8; // weekdays from the 8th
  })
);
const TIMES = [
  { t: "09:00", disabled: false },
  { t: "10:00", disabled: true },
  { t: "11:30", disabled: false },
  { t: "14:00", disabled: false },
  { t: "15:30", disabled: true },
  { t: "16:30", disabled: false },
];

export function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [day, setDay] = useState(10);
  const [time, setTime] = useState("14:00");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const dateLabel = `Thu 10 Sep`;
  const longDate = `Thursday 10 September`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-float md:flex-row">
        {/* Left rail */}
        <aside className="shrink-0 bg-brand-600 p-7 text-white md:w-[38%] md:p-8">
          <Logo size={22} className="text-white" as="span" />
          <h3 className="display mt-6 text-2xl md:text-3xl">Discovery call</h3>
          <p className="mt-2 text-[0.9rem] leading-relaxed text-white/75">
            Thirty minutes with the founder. No deck and no pitch, just the brief.
          </p>
          <ul className="mt-6 space-y-3 text-[0.9rem]">
            <Meta icon={Clock}>30 minutes</Meta>
            <Meta icon={Video}>Google Meet</Meta>
            <Meta icon={Globe}>Africa/Accra (GMT)</Meta>
            <Meta icon={User}>With the founder</Meta>
          </ul>
          <div className="mt-7 border-t border-white/15 pt-6">
            <p className="text-[0.9rem] font-medium">What we cover</p>
            <ul className="mt-3 space-y-2.5 text-[0.88rem] text-white/85">
              {["Where the brand is now", "What the brief actually needs", "Scope, timing and next steps"].map((c) => (
                <li key={c} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right panel */}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-4 px-6 pt-5 md:px-8">
            <Steps step={step} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-canvas text-muted hover:text-ink"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 md:px-8">
            {step === 0 && (
              <>
                <h4 className="text-xl font-semibold text-ink">Pick a date and time</h4>
                <div className="mt-5 grid gap-6 sm:grid-cols-[1.5fr_1fr]">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-ink">{MONTH}</p>
                      <div className="flex gap-1.5">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
                          <ChevronLeft className="h-4 w-4" />
                        </span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-white">
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-7 gap-y-1 text-center text-[0.72rem] text-muted-2">
                      {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                    </div>
                    <div className="mt-1 grid grid-cols-7 gap-1 text-center text-[0.85rem]">
                      {Array.from({ length: LEADING }).map((_, i) => <span key={`b${i}`} />)}
                      {Array.from({ length: DAYS }, (_, i) => i + 1).map((d) => {
                        const avail = AVAILABLE.has(d);
                        const sel = d === day;
                        return (
                          <button
                            key={d}
                            type="button"
                            disabled={!avail}
                            onClick={() => setDay(d)}
                            className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                              sel
                                ? "bg-brand-500 text-white"
                                : avail
                                  ? "bg-brand-50 text-brand-700 hover:bg-brand-100"
                                  : "text-muted-2"
                            }`}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-ink">{longDate.replace("Thursday", "Thursday")}</p>
                    <div className="mt-4 space-y-2">
                      {TIMES.map((s) => (
                        <button
                          key={s.t}
                          type="button"
                          disabled={s.disabled}
                          onClick={() => setTime(s.t)}
                          className={`w-full rounded-xl border py-2.5 text-center text-[0.9rem] transition-colors ${
                            time === s.t
                              ? "border-brand-500 bg-brand-500 text-white"
                              : s.disabled
                                ? "border-line bg-canvas text-muted-2"
                                : "border-line bg-white text-ink hover:border-brand-300"
                          }`}
                        >
                          {s.t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h4 className="text-xl font-semibold text-ink">Where should we send the invite?</h4>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-lavender-bg px-4 py-3 text-[0.9rem] text-brand-700">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> {dateLabel}, {time} · 30 minutes · GMT
                  </span>
                  <button type="button" onClick={() => setStep(0)} className="font-medium text-brand-500">
                    Change
                  </button>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" placeholder="Ada Mensah" />
                  <Field label="Email" placeholder="you@company.com" type="email" />
                </div>
                <Field label="Organisation" placeholder="Company or project name" className="mt-4" />
                <div className="mt-4">
                  <label className="mb-2 block text-[0.85rem] font-medium text-ink-soft">
                    What are you hoping to do?
                  </label>
                  <textarea
                    className="min-h-[110px] w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] outline-none focus:border-brand-400"
                    placeholder="A paragraph is plenty."
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <div className="flex flex-col items-center py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-paid text-white">
                  <Check className="h-8 w-8" />
                </div>
                <h4 className="mt-5 text-2xl font-semibold text-ink">You&apos;re booked</h4>
                <p className="mt-2 max-w-sm text-[0.95rem] text-muted">
                  A calendar invite with the meeting link is on its way to your inbox.
                </p>
                <div className="mt-6 w-full max-w-sm space-y-2 rounded-xl bg-canvas p-4 text-left text-[0.9rem] text-ink-soft">
                  <p className="flex items-center gap-2.5"><Calendar className="h-4 w-4 text-muted" /> {longDate}</p>
                  <p className="flex items-center gap-2.5"><Clock className="h-4 w-4 text-muted" /> {time} - 30 minutes (GMT)</p>
                  <p className="flex items-center gap-2.5"><Video className="h-4 w-4 text-muted" /> Google Meet link in the invite</p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 border-t border-line px-6 py-4 md:px-8">
            {step === 0 && (
              <>
                <p className="text-[0.85rem] text-muted">
                  <span className="font-medium text-ink">{dateLabel}, {time}</span>
                  <span className="block text-[0.78rem] text-muted-2">30 minutes, Google Meet</span>
                </p>
                <button type="button" onClick={() => setStep(1)} className="btn btn-primary">
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            {step === 1 && (
              <>
                <button type="button" onClick={() => setStep(0)} className="btn btn-ghost">Back</button>
                <button type="button" onClick={() => setStep(2)} className="btn btn-primary">
                  Confirm booking <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <button type="button" className="btn btn-ghost">Add to calendar</button>
                <button type="button" onClick={onClose} className="btn btn-primary">Done</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ icon: Icon, children }: { icon: typeof Clock; children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2.5 text-white/90">
      <Icon className="h-4 w-4 shrink-0 text-white/80" /> {children}
    </li>
  );
}

function Steps({ step }: { step: number }) {
  const labels = ["Date & time", "Your details", "Confirmed"];
  return (
    <div className="flex items-center gap-2 text-[0.82rem]">
      {labels.map((l, i) => (
        <div key={l} className="flex items-center gap-2">
          <span
            className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[0.72rem] font-semibold ${
              i <= step ? "bg-brand-500 text-white" : "bg-canvas text-muted-2"
            }`}
          >
            {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
          </span>
          <span className={`hidden sm:inline ${i === step ? "text-ink" : "text-muted-2"}`}>{l}</span>
          {i < 2 && <span className="mx-1 h-px w-5 bg-line" />}
        </div>
      ))}
    </div>
  );
}

function Field({
  label, placeholder, type = "text", className = "",
}: { label: string; placeholder: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[0.85rem] font-medium text-ink-soft">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] outline-none focus:border-brand-400"
      />
    </div>
  );
}
