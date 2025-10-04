import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="text-[#F5E9DC] mt-16 lg:mt-28 flex flex-col lg:flex-row items-center justify-between lg:justify-start lg:gap-52">
      {/* Text Content */}
      <div className="max-w-xl text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 font-dela">
          Thoughts on Clarity, Potential & Purposeful Growth
        </h2>
        <p className="text-navGray text-base md:text-lg mb-8">
          For individuals, founders, and creators ready to reach their full
          potential. Sharing my insights on personal branding, clarity, and
          mindset to help you grow with purpose, not pressure.
        </p>

        <MyButton
          label="Subscribe Now"
          href="https://substack.com/@preciousevans"
        />
      </div>

      {/* Image */}
      <div className="mb-10 lg:mb-0 lg:ml-10">
        <img
          loading="lazy"
          src="/images/pawn.svg"
          alt="Newsletter Envelope"
          className="max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
};

export default HeroSection;
