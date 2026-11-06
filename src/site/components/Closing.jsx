import { closing } from "../content";
import { BookingButton } from "./Booking";
import Reveal from "./Reveal";

export default function Closing() {
  return (
    <section className="closing" id="book">
      <div className="frame">
        <Reveal className="closing__box light">
          <h2>{closing.title}</h2>
          <div className="closing__side">
            <p>{closing.body}</p>
            <BookingButton
              label={closing.button}
              location="closing"
              variant="black"
            />
            <p className="closing__note">{closing.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
