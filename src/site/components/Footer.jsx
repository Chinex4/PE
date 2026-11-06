import { useRef, useState } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { config } from "../config";
import { footer, navigation } from "../content";
import { Modal } from "./Booking";
import Logo from "./Logo";

export default function Footer() {
  const ref = useRef(null);
  const [privacy, setPrivacy] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0.25, 1], ["28%", "0%"]);
  return (
    <footer className="footer" ref={ref} id="footer">
      <div className="frame footer__top">
        <div className="footer__brand">
          <Logo className="footer__logo" />
          <p>{footer.statement}</p>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          {navigation.map((item) => (
            <a className="link" key={item.href} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="footer__connect">
          <h2>Connect</h2>
          {config.socialLinks.map((social) => (
            <a
              className="link"
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          {config.ourtalentoUrl && (
            <a
              className="link"
              href={config.ourtalentoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ourtalento
              <ArrowUpRight aria-hidden="true" />
            </a>
          )}
          {config.email && (
            <a className="link" href={`mailto:${config.email}`}>
              {config.email}
            </a>
          )}
        </div>
      </div>
      <div className="footer__name" aria-hidden="true">
        <m.svg viewBox="0 0 1000 158" style={{ y }}>
          <text
            x="0"
            y="128"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
          >
            Precious Evans
          </text>
        </m.svg>
      </div>
      <div className="frame footer__bottom">
        <span>© {new Date().getFullYear()} Precious Evans</span>
        <span className="footer__tagline">{footer.tagline}</span>
        <button type="button" onClick={() => setPrivacy(true)}>
          Privacy notice
        </button>
        <a href="#main" aria-label="Back to top">
          <span className="footer__back">Back to top</span>
          <ArrowUp aria-hidden="true" />
        </a>
      </div>
      <Modal
        open={privacy}
        onClose={() => setPrivacy(false)}
        title="Privacy notice"
      >
        <div className="modal__prose">
          <p>
            The booking form collects the details you provide, including your
            phone number, so Precious Evans can prepare for your session and
            contact you. Your request is delivered through EmailJS and the
            connected email service.
          </p>
          <p>
            You then choose a time on a calendar provided by Cal.com. Your name
            and email are passed to it to save you retyping them, and the
            details you enter there are handled under Cal.com’s privacy terms.
          </p>
          <p>
            Your information is used to arrange and hold the session you book.
            It is not added to a marketing list through this booking.
          </p>
          <p>
            Booking button clicks can be measured when analytics is enabled. The
            event contains the button’s location on the page, without your
            booking details.
          </p>
        </div>
      </Modal>
    </footer>
  );
}
