import { useState } from "react";
import { testimonials } from "../content";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { items, title } = testimonials;
  return (
    <section className="testimonials section" id="testimonials">
      <div className="frame">
        <div className="testimonials__top">
          <Reveal as="h2">{title}</Reveal>
          <Reveal className="quotes" delay={0.1}>
            {items.map((item, index) => (
              <figure
                className="quote"
                key={item.name}
                data-active={index === active}
                aria-hidden={index !== active}
              >
                <blockquote>{item.quote}</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
        <Reveal className="strip" role="group" aria-label="Choose a testimonial">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className="strip__item"
              aria-pressed={index === active}
              aria-label={`Read ${item.name}’s testimonial`}
              onClick={() => setActive(index)}
              onPointerEnter={(event) =>
                event.pointerType === "mouse" && setActive(index)
              }
            >
              <img
                src={item.image}
                alt=""
                width="500"
                height="620"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
