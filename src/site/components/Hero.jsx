import { Fragment, useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero } from "../content";
import { BookingButton } from "./Booking";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 56]);
  return (
    <section className="hero" ref={ref}>
      <div className="frame hero__grid">
        <div className="hero__copy">
          <h1>
            {hero.title.split(" ").map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <span className="word">
                  <span style={{ "--i": index }}>{word}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="hero__body rise">{hero.body}</p>
          <div className="hero__actions rise rise--late">
            <BookingButton label={hero.primary} location="hero" />
            <a className="btn btn--ghost" href="#testimonials">
              <span className="btn__label">{hero.secondary}</span>
              <span className="btn__icon btn__icon--down" aria-hidden="true">
                <ArrowDown />
                <ArrowDown />
              </span>
            </a>
          </div>
        </div>
        <div className="hero__panel">
          <m.img
            style={{ y }}
            src="/img/hero-1200.webp"
            srcSet="/img/hero-480.webp 480w, /img/hero-800.webp 800w, /img/hero-1200.webp 1200w"
            sizes="(max-width: 899px) 100vw, 44vw"
            width="1200"
            height="1576"
            alt="Precious Evans smiling, wearing round glasses and a black knit polo"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
