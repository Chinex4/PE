import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const methodSteps = [
  {
    label: "Truth",
    text: "We excavate who you really are beneath the polished persona. Your story, values and lived experience, the raw material of a brand that can't be copied.",
  },
  {
    label: "Reveal",
    text: "We identify your unique angle, your audience, and the message only you can own. This is where your positioning becomes undeniable.",
  },
  {
    label: "Unapologetic",
    text: "We strip away the fear of judgement and build the language, tone, and presence that sounds unmistakably like you, not a template nor trend.",
  },
  {
    label: "Express",
    text: "We bring it all to life. Your messaging, content pillars and brand voice, a complete system for showing up fully and consistently.",
  },
];

const outcomes = [
  {
    phase: "After Truth",
    result:
      "A comprehensive brand story document that finally captures who you truly are",
  },
  {
    phase: "After Reveal",
    result:
      "A positioning statement and audience profile that's razor sharp",
  },
  {
    phase: "After Unapologetic",
    result:
      "You understand your tone of voice with a guide and your messaging pillars",
  },
  {
    phase: "After Reveal",
    result: "A complete brand blueprint, ready to build on",
  },
];

const TrueMethodSection = () => {
  return (
    <section className="mx-auto grid gap-12 py-20 text-[#F5E9DC] lg:grid-cols-[1fr_0.87fr] lg:gap-20 lg:py-24">
      <div>
        <p className="text-sm leading-none text-[#F5E9DC]">Authenticity Framework</p>

        <h2 className="mt-3 text-[2.2rem] font-extrabold leading-none tracking-normal sm:text-[2.6rem]">
          The{" "}
          <span className="font-serif italic text-primary">TRUE</span> Method
        </h2>

        <p className="mt-4 max-w-[27rem] text-lg  leading-tight text-[#F5E9DC]">
          The framework that gives you a legacy and builds your brand around the
          only thing no one can copy, which is YOU.
        </p>

        <div className="mt-10 space-y-8">
          {methodSteps.map((step) => (
            <p
              key={step.label}
              className="max-w-[27rem] text-lg  leading-tight text-[#F5E9DC]"
            >
              <span className="font-serif text-3xl font-bold italic text-primary">
                {step.label.charAt(0)}
              </span>
              <span className="italic">{step.label.slice(1)}:</span> {step.text}
            </p>
          ))}
        </div>
      </div>

      <div className="bg-[#F5E9DC] px-7 py-10 text-black sm:px-9 lg:px-10">
        <h3 className="max-w-[20rem] text-2xl font-extrabold leading-tight tracking-normal">
          Here's what you walk away with after each phase:
        </h3>

        <div className="mt-5 border-t border-black/15 pt-8">
          <dl className="space-y-8">
            {outcomes.map((outcome, index) => (
              <div
                key={`${outcome.phase}-${index}`}
                className="grid gap-3 sm:grid-cols-[6.75rem_1fr] sm:gap-7"
              >
                <dt className="text-lg font-medium italic leading-none">
                  {outcome.phase}
                </dt>
                <dd className="text-sm leading-none">
                  {outcome.result}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 border-t border-black/15 pt-5">
          <p className="max-w-[20rem] text-sm mb-3 leading-tight">
            After this, we build your personal brand with you together, holding
            your hand at every stage till you can stand strong.
          </p>

          <MyButton to="/reach-out?type=homepage-cta" label="Book a call &gt;" className="mx-auto mt-[31px] flex h-[46px] w-[222px] items-center justify-center rounded-[2px] bg-primary text-[14px] font-medium uppercase text-black transition hover:bg-[#f5ad73] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#151515]" />

        </div>
      </div>
    </section>
  );
};

export default TrueMethodSection;
