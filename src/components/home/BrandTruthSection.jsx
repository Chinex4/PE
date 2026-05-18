import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const painPoints = [
  "You show up as a polished, over-packaged version of yourself and it feels hollow",
  "You know you have something powerful to share but you don't know how to shape it",
  "You're afraid that if people see the real you, they'll judge, dismiss, or scroll past",
  "You've tried templates and tactics but nothing feels authentically yours",
];

const BrandTruthSection = () => {
  return (
    <section className="mx-auto py-16 text-white">
      <div className="relative grid min-h-[27rem] items-end gap-8 overflow-hidden lg:grid-cols-[1fr_0.95fr]">
        <div className="relative z-10 pb-7 pt-8 lg:max-w-[38rem] lg:pt-0">
          <h2 className="max-w-[35rem] text-[2rem] font-extrabold leading-[1.08] tracking-normal sm:text-[2.25rem] lg:text-[2.5rem]">
            Stop hiding behind your profession. It is killing{" "}
            <span className="text-primary">your brand.</span>
          </h2>

          <p className="mt-5 max-w-[22rem] text-sm leading-snug text-white">
            You've put in the work and you know your field. But when it comes to
            showing up online, something holds you back.
          </p>

          <ul className="mt-8 space-y-6">
            {painPoints.map((point) => (
              <li
                key={point}
                className="grid grid-cols-[0.9rem_1fr] gap-4 text-sm font-medium leading-snug text-white"
              >
                <span className="mt-[0.45rem] h-[0.18rem] w-3 rounded-full bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[24rem] lg:min-h-[33rem]">
          <img
            src="/images/icons/smiley1.png"
            alt="Precious Evans"
            className="absolute bottom-0 left-1/2 h-full max-h-[43rem] w-auto -translate-x-1/2 object-contain object-bottom lg:left-[48%]"
          />
        </div>
      </div>

      <div className="grid gap-8 bg-[#F5E9DC] px-6 py-8 text-black sm:px-10 lg:grid-cols-[1fr_0.75fr] lg:px-14 lg:py-10">
        <div className="max-w-[26rem]">
          <p className="text-sm md:text-[19px] leading-tight">
            The problem isn't your expertise. It's that no one has helped you
            discover{" "}
            <span className="font-extrabold">
              the right path to build your personal brand.
            </span>
          </p>

          <blockquote className="mt-4 border-l-2 border-black pl-4 font-serif text-2xl font-bold italic leading-[0.95]">
            The most magnetic personal brands aren't the most polished ones.
            They're the most real ones.
          </blockquote>

          <p className="mt-7 text-sm leading-tight">
            When you show up as your true self without apology or a mask, the
            right people don't just notice you. They trust you, choose you and
            refer you.
          </p>

          <p className="mt-7 text-sm font-extrabold leading-tight">
            That's what I help you unlock.
          </p>

          <Link
            to="/reach-out?type=homepage-cta"
            className="mt-6 inline-flex h-10 min-w-[8.9rem] items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium uppercase text-black transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#F5E9DC]"
          >
            Book a call &gt;
          </Link>
        </div>

        <button
          type="button"
          aria-label="Play brand video"
          className="flex aspect-[0.69] min-h-[18rem] w-full items-center justify-center bg-[#171717] text-black transition hover:bg-[#202020] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#F5E9DC] sm:aspect-video lg:aspect-auto lg:min-h-full"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <Play className="ml-1 h-8 w-8 fill-black text-black" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default BrandTruthSection;
