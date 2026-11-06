import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ArrowUpRight, X } from "lucide-react";
import { calLinkFrom } from "../booking";
import { config, trackBooking } from "../config";
import { TOPICS, deliverEnquiry, validateEnquiry } from "../enquiry";

const BookingContext = createContext(null);
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

function prepareCalendar() {
  if (calLink) loadCalendar().catch(() => {});
}

// Opens the calendar with the visitor's details already filled in.
async function openCalendar({ name, email }) {
  try {
    if (!calLink) throw new Error("Not a Cal.com link");
    const cal = await loadCalendar();
    cal("modal", {
      calLink,
      config: { theme: "dark", layout: "month_view", name, email },
    });
  } catch {
    window.location.assign(config.bookingUrl);
  }
}

export function Modal({ open, onClose, title, intro, children }) {
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
        {intro && <p className="modal__intro">{intro}</p>}
        {children}
      </div>
    </dialog>
  );
}

function BookingForm({ topic, onDone }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const error = validateEnquiry(values);
    if (error === "spam") return;
    if (error) {
      setStatus(error);
      return;
    }
    setBusy(true);
    setStatus("");
    try {
      await deliverEnquiry(values, config.emailjs, async (...args) => {
        const { send } = await import("@emailjs/browser");
        return send(...args);
      });
    } catch {
      // A failed notification must not stop someone from booking. Cal.com
      // still tells Precious about the booking itself.
    }
    form.reset();
    setBusy(false);
    onDone({
      name: values.user_name.trim(),
      email: values.user_email.trim(),
    });
  }

  return (
    <form className="form" onSubmit={submit}>
      <label>
        Full name
        <input
          name="user_name"
          required
          minLength={2}
          maxLength={200}
          autoComplete="name"
        />
      </label>
      <label>
        Email address
        <input
          name="user_email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
        />
      </label>
      <label>
        Phone number
        <input
          name="user_phone"
          type="tel"
          required
          maxLength={24}
          autoComplete="tel"
          placeholder="+234 800 000 0000"
        />
      </label>
      <label>
        What would you like to focus on?
        <select
          key={topic}
          name="enquiry_type"
          required
          defaultValue={topic || ""}
        >
          <option value="" disabled>
            Choose one
          </option>
          {TOPICS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <div className="form__trap" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="btn btn--peach btn--block" disabled={busy}>
        <span className="btn__label">
          {busy ? "One moment…" : "Continue to choose a time"}
        </span>
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      </button>
      <p className="form__status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

export function BookingProvider({ children }) {
  const [request, setRequest] = useState({ open: false, topic: "" });
  const open = useCallback((topic = "") => {
    prepareCalendar();
    setRequest({ open: true, topic });
  }, []);
  const close = useCallback(
    () => setRequest((current) => ({ ...current, open: false })),
    [],
  );
  const value = useMemo(() => ({ open }), [open]);
  return (
    <BookingContext.Provider value={value}>
      {children}
      <Modal
        open={request.open}
        onClose={close}
        title="Book a Clarity Call Session"
        intro="Tell me a little about you, then choose a time that works."
      >
        <BookingForm
          topic={request.topic}
          onDone={(details) => {
            close();
            openCalendar(details);
          }}
        />
      </Modal>
    </BookingContext.Provider>
  );
}

// Every booking button opens the form, then the calendar. Each one is also a
// real link, so it still reaches the calendar if the page script fails.
export function BookingButton({
  label,
  location,
  topic,
  variant = "peach",
  className = "",
  icon = true,
}) {
  const { open } = useContext(BookingContext);
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={config.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        event.preventDefault();
        trackBooking(location);
        open(topic);
      }}
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
