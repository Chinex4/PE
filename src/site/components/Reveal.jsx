import { m } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ as = "div", delay = 0, y = 28, ...props }) {
  const Tag = m[as];
  return (
    <Tag
      className={props.className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, delay, ease }}
      data-reveal=""
      {...props}
    />
  );
}
