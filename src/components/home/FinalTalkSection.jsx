import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const reminders = [
  "The real you is already enough to build from.",
  "Visibility is easier when the brand finally sounds like you.",
  "The right moment starts when you stop waiting for permission.",
];

const FinalTalkSection = () => {
  return (
    <section className="mx-auto py-16 text-[#F5E9DC] lg:py-20">
      <div className="grid gap-10 bg-[#171717] py-10 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:px-12 lg:py-14">
        <div className="relative hidden overflow-hidden md:block">
          <img
            src="/images/icons/end-pic.jpeg"
            alt="Precious Evans"
            className="absolute bottom-0 left-1/2 h-[110%] w-auto -translate-x-1/2 object-contain object-bottom"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-primary">
            Still here?
          </p>

          <h2 className="mt-3 max-w-[36rem] text-[2rem] font-extrabold leading-[1.04] tracking-normal text-[#F5E9DC] sm:text-[2.5rem]">
            You've read this far{" "}
            <span className="font-serif italic text-primary">
              for a reason.
            </span>
          </h2>

          <div className="mt-7 max-w-[40rem] space-y-5 text-sm  leading-snug text-[#F5E9DC]">
            <p>
              Something on this page spoke to you. Maybe it was the part about
              hiding behind a polished persona. Maybe it was the realisation
              that your brand exists, it just hasn't been built around the real
              you yet.
            </p>

            <p className="font-extrabold text-[#F5E9DC]">
              Whatever it was, don't ignore it.
            </p>

            <p>
              The experts who stay invisible aren't less talented. They're just
              still waiting. Waiting until they feel ready. Waiting until it
              feels safer. Waiting for the right moment that never quite
              arrives.
            </p>

            <p className="font-extrabold text-[#F5E9DC]">
              You've already waited long enough.
            </p>

            <p>
              The world doesn't need another perfectly curated version of
              someone. It needs you, your story, your voice, your perspective,
              offered without apology and without fear.
            </p>

            <p>
              That's not just good branding. That's{" "}
              <span className="font-extrabold text-primary">freedom</span> and
              it's closer than you think.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 mb-4">
            {reminders.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[1.25rem_1fr] gap-4 text-sm  leading-tight text-[#F5E9DC]"
              >
                <span className="flex h-5 w-5 items-center justify-center bg-primary text-xs font-black text-black">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <MyButton to="/reach-out?type=homepage-cta" label="Let's talk >" className="mx-auto mt-[31px] flex h-[46px] w-[222px] items-center justify-center rounded-[2px] bg-primary text-[14px] font-medium uppercase text-black transition hover:bg-[#f5ad73] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#151515]" />
        </div>
      </div>
    </section>
  );
};

export default FinalTalkSection;
