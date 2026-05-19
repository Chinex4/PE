import MultiStepReachOutForm from "../components/reachout/MultiStepReachOutForm";

const ReachOut = () => {
  return (
    <main className="px-4 pb-16 pt-8 lg:px-[10rem] lg:pb-24 lg:pt-16">
      <section className="mx-auto max-w-4xl">
        <div className="mb-8 text-center lg:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Brand Application
          </p>
          <h1 className="font-heading text-[34px] font-bold leading-[0.98] text-[#F5E9DC] sm:text-[44px] lg:text-[56px]">
            Let&apos;s see if your personal brand is ready to scale.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-300 sm:text-base">
            Answer a few focused questions so I can understand your business,
            goals, timing, and the best next step before we speak.
          </p>
        </div>

        <MultiStepReachOutForm />
      </section>
    </main>
  );
};

export default ReachOut;
