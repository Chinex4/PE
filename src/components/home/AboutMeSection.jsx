import { Link } from "react-router-dom";

const AboutMeSection = () => {
  return (
    <section className="mx-auto py-16 text-[#F5E9DC] lg:py-20">
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="relative z-10 py-10 lg:py-14">
            <p className="text-sm font-semibold uppercase tracking-normal text-primary">
              About
            </p>

            <h2 className="mt-3 max-w-[32rem] text-[2.35rem] font-extrabold leading-[1.04] tracking-normal text-white sm:text-[3.1rem]">
              I'm{" "}
              <span className="font-serif italic text-primary">
                Precious Evans
              </span>
              .
            </h2>

            <div className="mt-8 max-w-[35rem] space-y-5 text-base font-medium leading-snug text-[#F5E9DC]">
              <p>
                I'm Precious Evans, and the people I work with aren't struggling
                because they lack expertise.
              </p>

              <p>
                They're struggling because they've spent so long translating
                themselves for other people that they've forgotten what their
                unfiltered voice even sounds like.
              </p>

              <p className="font-extrabold text-white">
                My responsibility is to help you find it again.
              </p>

              <p>
                Not the version of you that got the qualification nor the
                version that knows how to work the room but that version that
                exists when no one is watching, the one with the opinions, the
                stories, the perspective that actually makes you worth
                following.
              </p>

              <p>
                That's the version your audience has been waiting for. It is the
                version we build your brand around.
              </p>

              <p>
                No judgement, no mould, no performing. Just you, finally seen,
                finally heard, finally home.
              </p>
            </div>

            <Link
              to="/reach-out?type=about-me"
              className="mt-9 inline-flex h-12 min-w-[10.5rem] items-center justify-center rounded-sm bg-primary px-8 text-sm font-extrabold uppercase text-black transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#171717]"
            >
              Let's talk
            </Link>
          </div>

          <div className="relative min-h-[28rem] lg:min-h-[52rem]">
            <div className="absolute inset-x-0 bottom-0 top-10 lg:left-10" />
            <img
              src="/images/prepic.png"
              alt="Precious Evans"
              className="relative mx-auto h-full max-h-[50rem] w-auto object-contain object-bottom lg:absolute lg:bottom-0 lg:right-[-2rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
