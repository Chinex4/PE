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
import { config, trackBooking } from "../config";
import { TOPICS, deliverEnquiry, validateEnquiry } from "../enquiry";

const BookingContext = createContext(null);

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

function BookingForm({ topic, onSent }) {
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
      const result = await deliverEnquiry(
        values,
        config.emailjs,
        async (...args) => {
          const { send } = await import("@emailjs/browser");
          return send(...args);
        },
      );
      if (result.sent) {
        form.reset();
        onSent();
      }
    } catch (failure) {
      setStatus(failure.message);
    } finally {
      setBusy(false);
    }
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
      <label>
        Where are you right now?
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={4}
        />
      </label>
      <div className="form__trap" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="btn btn--peach btn--block" disabled={busy}>
        <span className="btn__label">{busy ? "Sending…" : "Send request"}</span>
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
  const [sent, setSent] = useState(false);
  const open = useCallback((topic = "") => {
    setSent(false);
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
        intro={
          sent
            ? ""
            : "Tell me a little about where you are, and I’ll reply by email to arrange a time."
        }
      >
        {sent ? (
          <p className="modal__intro">
            Thank you. Your request has been sent and I’ll be in touch by email.
          </p>
        ) : (
          <BookingForm topic={request.topic} onSent={() => setSent(true)} />
        )}
      </Modal>
    </BookingContext.Provider>
  );
}

// Opens the calendar when VITE_BOOKING_URL is set, otherwise the request form.
export function BookingButton({
  label,
  location,
  topic,
  variant = "peach",
  className = "",
  icon = true,
}) {
  const { open } = useContext(BookingContext);
  const classes = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span className="btn__label">{label}</span>
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          <ArrowUpRight />
          <ArrowUpRight />
        </span>
      )}
    </>
  );
  if (config.bookingUrl)
    return (
      <a
        className={classes}
        href={config.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackBooking(location)}
      >
        {inner}
      </a>
    );
  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        trackBooking(location);
        open(topic);
      }}
    >
      {inner}
    </button>
  );
}
