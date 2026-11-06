import { about } from "../content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="about section light" id="about">
      <div className="frame">
        <Reveal as="h2" className="display">
          {about.title}
        </Reveal>
        <div className="about__grid">
          <Reveal className="about__photo">
            <img
              src="/img/about-900.webp"
              srcSet="/img/about-560.webp 560w, /img/about-900.webp 900w"
              sizes="(max-width: 899px) 100vw, 42vw"
              width="900"
              height="1125"
              alt="Precious Evans speaking on stage with a microphone"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <div className="about__copy">
            <Reveal as="p" className="about__name">
              {about.name}
            </Reveal>
            <Reveal as="p" className="lead">
              {about.role}
            </Reveal>
            <Reveal as="p" className="about__belief">
              {about.belief}
            </Reveal>
            {about.paragraphs.map((paragraph) => (
              <Reveal as="p" key={paragraph}>
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
