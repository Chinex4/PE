import React from "react";
import smiley from "../../assets/smiley2.png";
import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const BrandStrategist = () => {
  return (
    <div className="text-[#F5E9DC] text-center ">
      <div className="max-w-2xl mx-auto bg-[#272727]/30 shadow-[0_20px_80px_rgba(0,0,0,0.55)] px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 rounded-3xl">
        <h1 className="text-2xl font-bold mb-4 uppercase font-dela">
          WHY MOST PEOPLE STAY STUCK (AND WHAT ACTUALLY WORKS)
        </h1>
        <p className="flex flex-col gap-3 text-sm mb-8 text-navGray">
          <span>
            Many people think the answer to moving forward is working harder,
            trying new things, or rebranding themselves over and over again. But
            without clarity, every move feels like motion without direction.
          </span>
          <span>
            The truth is, it’s not about doing more, it’s about doing what
            matters. You don’t need another trend or template. You need
            alignment between who you are, what you offer, and how you show up.
          </span>
          <span>
            When you gain clarity and take intentional action, everything
            changes. You attract the right opportunities, communicate with
            confidence, and build a personal brand that actually moves you
            closer to your full potential.
          </span>
        </p>
        <MyButton to="/reach-out" label="Book A Clarity Call" />
      </div>
    </div>
  );
};

export default BrandStrategist;
