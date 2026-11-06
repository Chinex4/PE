import { Check } from "lucide-react";
import { work } from "../content";
import { BookingButton } from "./Booking";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="frame">
        <Reveal as="h2" className="display">
          {work.title}
        </Reveal>
        <div className="offers">
          {work.offers.map((offer, index) => (
            <article
              className={`offer ${index === 1 ? "offer--light light" : ""}`}
              key={offer.title}
            >
              <div className="offer__head">
                <h3>{offer.title}</h3>
                <p className="offer__tagline">{offer.tagline}</p>
              </div>
              <div className="offer__body">
                {offer.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <h4>{work.listTitle}</h4>
                <ul>
                  {offer.list.map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <BookingButton
                  label={offer.button}
                  location={`offer-${index + 1}`}
                  variant={index === 1 ? "black" : "peach"}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
