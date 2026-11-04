import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { config } from "./config";
import { deliverEnquiry, validateEnquiry } from "./enquiry";
export default function EnquiryForm({ kind = "contact" }) {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const lock = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (lock.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    if (!form.reportValidity()) return;
    const error = validateEnquiry(values, kind);
    if (error === "spam") return;
    if (error) {
      setStatus(error);
      return;
    }
    lock.current = true;
    setBusy(true);
    setStatus("");
    try {
      const result = await deliverEnquiry(
        values,
        kind,
        config.emailjs,
        emailjs.send,
      );
      if (result.sent) {
        setStatus("Thank you. Your message has been sent.");
        form.reset();
      }
    } catch (error) {
      setStatus(error.message);
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }

  const field = (name, label, type = "text", extra = {}) => (
    <label key={name} htmlFor={`${kind}-${name}`}>
      {label}
      <input
        id={`${kind}-${name}`}
        name={name}
        type={type}
        required
        maxLength={200}
        {...extra}
      />
    </label>
  );
  return (
    <form
      onSubmit={submit}
      className="enquiry-form"
      aria-label={`${kind} enquiry`}
    >
      {field("user_name", kind === "speaking" ? "Name" : "Full name", "text", {
        autoComplete: "name",
        minLength: 2,
      })}
      {kind === "speaking" &&
        field("organisation", "Organisation", "text", {
          autoComplete: "organization",
        })}
      {field("user_email", "Email address", "email", { autoComplete: "email" })}
      {kind === "speaking" ? (
        <>
          {field("event_date", "Event date", "date")}
          {field("audience", "Audience")}
          {field("topic", "Topic")}
        </>
      ) : (
        <>
          {kind === "contact" && (
            <label htmlFor="contact-subject">
              What are you reaching out about?
              <select
                id="contact-subject"
                name="enquiry_type"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                {[
                  "Coaching",
                  "Personal branding strategy",
                  "Speaking",
                  "Collaborations",
                  "General enquiries",
                ].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
          )}
          <label htmlFor={`${kind}-message`}>
            A short message
            <textarea
              id={`${kind}-message`}
              name="message"
              required
              minLength={10}
              maxLength={5000}
              rows={5}
            />
          </label>
        </>
      )}
      <div className="honeypot" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="form-note">
        Your details are used to respond to your enquiry.{" "}
        <Link to="/privacy">Privacy notice</Link>
      </p>
      <button type="submit" className="submit-button" disabled={busy}>
        {busy ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span>
      </button>
      <p role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
