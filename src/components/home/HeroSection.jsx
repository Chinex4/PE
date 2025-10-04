import React from "react";
import smiley from "/images/smileyyy.svg";
import MyButton from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="text-[#F5E9DC] mt-16 lg:mt-28 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
      <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-3xl md:text-[28px] md:text-4xl font-bold mb-4 uppercase font-dela">
          The Difference Between Where You Are & Where You Dream To Be is
          Clarity & Action.
        </h1>
        <p className="text-lg mb-8 text-navGray">
          I know exactly how it feels, having so much potential yet feeling like
          you aren’t doing enough, or not even knowing where to start. Feeling
          completely lost. Book a call, let’s talk about it.
        </p>
        <div className="">
          <MyButton label="Book a Call" to="/reach-out?type=homepage-cta" />
        </div>
      </div>
      <div className="mt-8">
        <img
          loading="lazy"
          src={smiley}
          alt="Entrepreneur"
          className="w-full lg:w-[83rem]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
