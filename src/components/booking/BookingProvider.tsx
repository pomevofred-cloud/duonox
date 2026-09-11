"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { BookingModal } from "./BookingModal";

const BookingContext = createContext<{ open: () => void }>({ open: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={{ open: () => setOpen(true) }}>
      {children}
      {isOpen && <BookingModal onClose={() => setOpen(false)} />}
    </BookingContext.Provider>
  );
}
