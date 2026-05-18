import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const isFor = [
  "You're tired of performing and ready to simply be",
  "You have results and experience but feel unseen or misunderstood online",
  "You know your brand should feel more like you - you just don't know how",
  "You're ready to show up with full confidence, no filter, no fear of judgement",
  "You want to build something that lasts - not just content that gets likes",
];

const notFor = [
  "You want a quick fix or a copy-paste template",
  "You're not willing to do the inner and outer work",
  "You want to build a brand that looks good but doesn't feel true",
  "You're not ready to be fully seen",
];

const WhoThisIsForSection = () => {
  return (
    <section className="mx-auto py-16 text-[#F5E9DC] lg:py-20">
      <div className="bg-[#F5E9DC] px-6 py-10 text-black sm:px-10 lg:px-14 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <p className="font-serif text-2xl leading-none">Who is this for?</p>
            <h2 className="mt-3 max-w-[36rem] text-[2.05rem] font-extrabold leading-[1.05] tracking-normal sm:text-[2.7rem]">
              This is for you if your brand doesn't feel like home yet.
            </h2>
          </div>

          <p className="max-w-[27rem] text-sm  leading-tight lg:pt-4">
            This is for you if you're a corporate professional, entrepreneur, or
            coach who has built real expertise - but something about your brand
            doesn't feel like home yet.
          </p>
        </div>

        <div className="mt-10 overflow-hidden border border-black/20">
          <div className="grid lg:grid-cols-2">
            <div>
              <h3 className="border-b border-black/20 px-5 py-4 text-center font-serif text-xl font-bold">
                This is NOT for you if...
              </h3>

              <ul>
                {notFor.map((item) => (
                  <li
                    key={item}
                    className="grid min-h-[4.1rem] grid-cols-[1.5rem_1fr] gap-4 border-b border-black/20 px-4 py-4 last:border-b-0 lg:border-r"
                  >
                    <span className="flex h-4 w-4 items-center justify-center bg-black/20 text-xs font-black leading-none text-[#F5E9DC]">
                      x
                    </span>
                    <span className="text-sm  leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#171717] text-[#F5E9DC]">
              <h3 className="border-b border-white/15 px-5 py-4 text-center font-serif text-xl font-bold text-primary">
                This IS for you if...
              </h3>

              <ul>
                {isFor.map((item) => (
                  <li
                    key={item}
                    className="grid min-h-[4.1rem] grid-cols-[1.5rem_1fr] gap-4 border-b border-white/15 px-4 py-4 last:border-b-0"
                  >
                    <span className="flex h-4 w-4 items-center justify-center bg-primary text-xs font-black leading-none text-black">
                      ✓
                    </span>
                    <span className="text-sm  leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm font-extrabold mb-3">
            Sound like you? Let's build your brand around who you really are.
          </p>

          <MyButton to="/reach-out?type=homepage-cta" label="Book a call &gt;" className="mx-auto mt-[31px] flex h-[46px] w-[222px] items-center justify-center rounded-[2px] bg-primary text-[14px] font-medium uppercase text-black transition hover:bg-[#f5ad73] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#151515]" />
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsForSection;
