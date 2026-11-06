import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { potential } from "../content";
import Reveal from "./Reveal";

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <m.span style={{ opacity }}>{children} </m.span>;
}

function ScrollWords({ text, start, end, progress, reduced }) {
  const words = text.split(" ");
  if (reduced) return <p>{text}</p>;
  return (
    <p className="scroll-words" aria-label={text}>
      {words.map((word, index) => {
        const from = start + ((end - start) * index) / words.length;
        const to = from + (end - start) / words.length;
        return (
          <Word key={index} progress={progress} range={[from, to]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

export default function Potential() {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.75"],
  });
  return (
    <section className="potential light">
      <div className="frame">
        <Reveal as="h2">{potential.title}</Reveal>
        <div className="potential__body" ref={ref}>
          <ScrollWords
            text={potential.paragraphs[0]}
            start={0}
            end={0.45}
            progress={scrollYProgress}
            reduced={reduced}
          />
          <ScrollWords
            text={potential.paragraphs[1]}
            start={0.45}
            end={0.95}
            progress={scrollYProgress}
            reduced={reduced}
          />
        </div>
        <Reveal as="p" className="potential__closing">
          {potential.closing}
        </Reveal>
      </div>
    </section>
  );
}
