import MyButton from "../ui/Button";

const AboutMeSection = () => {
  return (
    <section className="mx-auto py-16 text-[#F5E9DC]">
      <div className="relative overflow-hidden bg-[#171717]">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-12">
          <div className="w-full shrink-0 md:w-[50%] xl:w-[48%]">
            <img
              src="/images/icons/smiley-on-stage.jpg"
              alt="Precious Evans"
              className="mx-auto w-full max-w-[460px] object-contain object-bottom md:max-w-[500px]"
            />
          </div>

          <div className="relative z-10 w-full py-10 md:px-0 md:py-14">
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

            <div className="mb-3 mt-8 max-w-[35rem] space-y-5 text-base leading-snug text-[#F5E9DC]">
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

            <MyButton
              to="/reach-out?type=homepage-cta"
              label="Let's talk >"
              className="mt-[31px] flex h-[46px] w-[222px] items-center justify-center rounded-[2px] bg-primary text-[14px] font-medium uppercase text-black transition hover:bg-[#f5ad73] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#151515]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;