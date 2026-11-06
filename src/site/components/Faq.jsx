import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "../content";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq section" id="faq">
      <div className="frame faq__grid">
        <Reveal as="h2">{faq.title}</Reveal>
        <Reveal className="faq__list" delay={0.1}>
          {faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div className="faq__item" data-open={isOpen} key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a${index}`}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    {item.question}
                    <Plus aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq__answer"
                  id={`faq-a${index}`}
                  role="region"
                  aria-labelledby={`faq-q${index}`}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
