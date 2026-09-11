"use client";

import { useBooking } from "./BookingProvider";
import { ArrowRight } from "@/components/icons";

export function BookDiscoveryButton({
  className = "btn btn-primary",
  label = "Book a discovery call",
}: {
  className?: string;
  label?: string;
}) {
  const { open } = useBooking();
  return (
    <button type="button" onClick={open} className={className}>
      {label} <ArrowRight className="h-4 w-4" />
    </button>
  );
}
