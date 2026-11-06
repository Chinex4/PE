import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { calLinkFrom } from "../booking";
import { config, trackBooking } from "../config";

const calLink = calLinkFrom(config.bookingUrl);
let calendar;

// Loads Cal.com once, on first intent, so it adds nothing to the page load.
function loadCalendar() {
  calendar ??= import("@calcom/embed-react").then(async ({ getCalApi }) => {
    const api = getCalApi();
    const script = document.querySelector('script[src*="cal.com/embed/"]');
    await new Promise((resolve, reject) => {
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", reject, { once: true });
    });
    const cal = await api;
    cal("ui", {
      theme: "dark",
      layout: "month_view",
      cssVarsPerTheme: {
        dark: { "cal-brand": "#fac898", "cal-brand-text": "#000000" },
      },
    });
    return cal;
  });
  return calendar;
}

export function Modal({ open, onClose, title, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby={`${title}-title`}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && onClose()}
    >
      <div className="modal__panel">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          <X aria-hidden="true" />
        </button>
        <h2 id={`${title}-title`}>{title}</h2>
        {children}
      </div>
    </dialog>
  );
}

// Every booking button is a real link, so it still reaches the calendar if
// the popup is blocked or the visitor opens it in a new tab.
export function BookingButton({
  label,
  location,
  variant = "peach",
  className = "",
  icon = true,
}) {
  function openCalendar(event) {
    trackBooking(location);
    if (!calLink || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    loadCalendar()
      .then((cal) =>
        cal("modal", {
          calLink,
          config: { theme: "dark", layout: "month_view" },
        }),
      )
      .catch(() => window.location.assign(config.bookingUrl));
  }

  function prepareCalendar() {
    if (calLink) loadCalendar().catch(() => {});
  }

  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={config.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={openCalendar}
      onPointerEnter={prepareCalendar}
      onFocus={prepareCalendar}
    >
      <span className="btn__label">{label}</span>
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      )}
    </a>
  );
}
