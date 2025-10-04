import React from "react";
import MyButton from "../ui/Button";

const PrinciplesSection = () => {
  return (
    <section className=" mt-[3rem] lg:mt-[10rem] text-[#F5E9DC] flex flex-col gap-10">
      {/* Left Side */}
      <div className="rounded-[28px] border border-white/5 bg-[#272727]/30 shadow-[0_20px_80px_rgba(0,0,0,0.55)] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14">
        <div className=" lg:flex ">
          <h2 className="text-2xl md:text-3xl font-bold uppercase leading-snug font-dela">
            NOT JUST MOTIVATION,
            <br />
            NOT JUST STRATEGY, BUT
            <br />
            <span className="text-[#F4A261] pb-1 inline-block">
              CLARITY THAT TRANSFORMS
            </span>
          </h2>
        </div>

        <div className="lg:mx-auto mt-6 text-navGray text-sm md:text-base space-y-5">
          <p>
            It started with a simple realization.... <br /> Too many people,
            founders, creators, and professionals, are chasing growth, speed,
            and visibility without true clarity. Everyone wants to grow fast,
            but few stop to ask what foundation are they really building on?
          </p>
          <p>
            I kept seeing talented people with big dreams but no direction.
            Launching ideas without alignment. Creating brands without a
            message. Scaling without a solid foundation. And I realized what was
            missing, clarity and principles.
          </p>
          <p>
            Not just more tactics. <br />
            Not just another trend. <br />
            But deeper thinking. Better questions. <br />
            Clarity that creates confidence. <br />
          </p>
          <p>
            That’s why I built Limitless, a weekly letter for those who want to
            grow with intention, not hype.
          </p>
          <p>
            Each week, I share grounded insights on personal branding, mindset,
            and strategy, lessons that help you think deeper, act clearer, and
            build brands (and lives) that actually last.
          </p>
          <p>
            Because sometimes, what you need isn’t more noise, it’s sharper
            thinking and meaningful direction. If you’re ready to grow with
            clarity and become limitless, join the list today.
          </p>
        </div>
        <div className="mt-8">
          <MyButton
            label="Join Limtless"
            href="https://substack.com/@preciousevans"
          />
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
