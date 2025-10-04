import React from "react";

export default function PersonalBrandHero({
  courseLink = "https://selar.com/7q87935pb5",
}) {
  return (
    <section className="relative overflow-hidden text-[#F5E9DC]">
      {/* Decorative vectors */}
      <img
        src="/images/infinity-vector.png" /* <- replace path */
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute left-[24%] top-1/3 w-20 opacity-80"
      />
      <img
        src="/images/x-clip.png" /* <- replace path */
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden sm:block absolute right-[24%] bottom-[18%] w-10 opacity-80"
      />
      <img
        src="/images/arrow-curved.png" /* <- replace path */
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none hidden md:block absolute right-[21%] top-[26%] w-44 rotate-[8deg] opacity-90"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 mt-8 lg:mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-extrabold leading-tight tracking-tight font-dela">
            <span className="block text-2xl md:text-3xl lg:text-5xl sm:text-4xl">
              Your Personal Brand Is
            </span>
            <span className="block text-2xl md:text-3xl lg:text-5xl sm:text-4xl">
              Your Biggest Currency
            </span>
            <span className="block text-2xl md:text-3xl lg:text-5xl sm:text-4xl">
              When You Can Use It.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-navGray leading-relaxed">
            An interactive course & guide that helps you understand personal
            branding, create your unique identity, and turn it into consistent
            income.
          </p>

          <div className="mt-6">
            <a
              href={courseLink}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition
                         hover:translate-y-0.5 hover:shadow-[0_10px_35px_rgba(0,0,0,0.45)]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              Join the Waitlist Now
            </a>
          </div>

          <div className="mt-8 lg:mt-6 flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center font-dela">
            <p className="text-primary text-xl font-semibold ">
              NGN 34,999 ($23)
            </p>
            <p className=" line-through">NGN 45,000 ($30)</p>
          </div>
        </div>

        {/* Product mockup */}
        <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 flex justify-center">
          <div className="relative">
            <img
              src="/images/personbrand.png" /* <- replace path */
              alt="The Personal Brand Profit System box set"
              className="w-[84vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            />
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-primary/20 rounded-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
