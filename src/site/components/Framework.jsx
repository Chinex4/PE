import { useEffect, useRef, useState } from "react";
import { framework } from "../content";
import { BookingButton } from "./Booking";
import Reveal from "./Reveal";

export default function Framework() {
  const [active, setActive] = useState(0);
  const steps = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.step));
        }),
      { rootMargin: "-42% 0px -52% 0px" },
    );
    steps.current.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);
  return (
    <section className="framework section" id="framework">
      <div className="frame">
        <div className="framework__intro">
          <Reveal>
            <p className="eyebrow">{framework.eyebrow}</p>
            <h2>
              {framework.title}
              <sup>™</sup>
            </h2>
          </Reveal>
          <Reveal className="framework__copy" delay={0.1}>
            <p className="lead">{framework.lead}</p>
            <p>{framework.body}</p>
          </Reveal>
        </div>
        <div className="framework__stage">
          <div className="framework__letters" aria-hidden="true">
            <div className="framework__letter">
              {framework.steps.map((step, index) => (
                <span key={step.letter} data-active={index === active}>
                  {step.letter}
                </span>
              ))}
            </div>
            <div className="framework__track">
              {framework.steps.map((step, index) => (
                <span key={step.letter} data-active={index <= active} />
              ))}
            </div>
          </div>
          <ol className="framework__steps">
            {framework.steps.map((step, index) => (
              <li
                key={step.letter}
                className="step"
                data-step={index}
                data-active={index === active}
                ref={(node) => {
                  steps.current[index] = node;
                }}
              >
                <span className="step__letter" aria-hidden="true">
                  {step.letter}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <Reveal className="framework__cta">
          <BookingButton label={framework.button} location="framework" />
        </Reveal>
      </div>
    </section>
  );
}
