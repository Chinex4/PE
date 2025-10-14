import React from "react";
import MyButton from "../ui/Button";

const CommunitySection = () => {
  return (
    <div className="text-[#F5E9DC] py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            loading="lazy"
            src="/images/newsss.jpg" // Replace with the actual image path
            alt="Community"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-2xl font-bold mb-4 uppercase font-dela">
            Thoughts on Clarity, Potential & Purposeful Growth
          </h3>
          <p className="mb-6 flex flex-col gap-3">
            <span className="text-navGray">
              For individuals, founders, and creators ready to reach their full
              potential. Sharing my insights on personal branding, clarity, and
              mindset to help you grow with purpose, not pressure.
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <MyButton
              label="Subscribe Now For Free"
              to="/limitlesswithevansprecious/complete-your-subscription"
            />
            <MyButton label="Learn More" to="/newsletter" sec={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
