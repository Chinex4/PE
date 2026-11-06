import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { hero } from "../content";
import { BookingButton } from "./Booking";

// Shows once scrolling starts and steps aside where the closing box takes over.
export default function StickyCta() {
  const [scrolled, setScrolled] = useState(false);
  const [atEnd, setAtEnd] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const seen = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.isIntersecting ? seen.add(entry.target) : seen.delete(entry.target),
      );
      setAtEnd(seen.size > 0);
    });
    document
      .querySelectorAll("#book, #footer")
      .forEach((target) => observer.observe(target));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <AnimatePresence>
      {scrolled && !atEnd && (
        <m.div
          className="sticky-cta"
          initial={{ y: 96, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        >
          <BookingButton label={hero.primary} location="sticky" />
        </m.div>
      )}
    </AnimatePresence>
  );
}
