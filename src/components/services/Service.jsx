import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className=" text-[#F5E9DC] py-16 px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* <!-- Service 1 --> */}
        <div class="bg-[#F5E9DC] text-black p-6 rounded-lg shadow-lg">
          <h3 class="font-semibold text-lg md:text-xl mb-2">
            01 - Brand Strategy & Positioning
          </h3>
          <p class="text-navGray mb-4 text-sm">
            Build a brand with clarity, confidence, and purpose. Together, we’ll
            craft a tailored strategy that aligns with your goals, connects with
            your audience, and positions you to stand out, not just look good,
            but be understood.
          </p>
          <div class="mt-6 md:mt-0 flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-sm">
            <Link class="bg-primary py-2 px-4 rounded-lg">Get Started</Link>
            <Link class="border hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg">
              Explore The Process
            </Link>
          </div>
        </div>

        {/* <!-- Service 2 --> */}
        <div class="border bg-[#191919] border-[#F5E9DC] p-6 rounded-lg">
          <h3 class="font-semibold text-lg md:text-xl mb-2">
            02 - Personal Branding
          </h3>
          <p class="text-gray-300 mb-4 text-sm">
            Your personal brand is your most powerful asset. Through one-on-one
            sessions, we’ll uncover your authentic voice, define your message,
            and create a strong presence that communicates your value and drives
            real opportunities.
          </p>
          <div class="mt-6 md:mt-0 flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-xs">
            <Link class="bg-primary text-black py-2 px-4 rounded-lg">
              Request Coaching
            </Link>
            <Link class="border  hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg">
              How Coaching Works
            </Link>
          </div>
        </div>

        {/* <!-- Service 3 --> */}
        <div class="border bg-[#191919] border-[#F5E9DC] p-6 rounded-lg">
          <h3 class="font-semibold text-lg md:text-xl mb-2">
            03 - Clarity & Consultation Calls
          </h3>
          <p class="text-gray-300 mb-4 text-sm">
            If you’re feeling stuck or unsure about your next move, this session
            is for you. These focused calls are designed to help you gain
            instant clarity, solve specific brand challenges, and take
            actionable steps toward your goals.
          </p>
          <div class="mt-6 md:mt-[52px] flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-sm">
            <Link to={"/reach-out?type=services-page"} class="bg-primary text-black py-2 px-4 rounded-lg">
              Book A Call
            </Link>
            <Link class="border hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg">
              View More Details
            </Link>
          </div>
        </div>

        {/* <!-- Service 4 --> */}
        <div class="bg-[#F5E9DC] text-black p-6 rounded-lg shadow-lg">
          <h3 class="font-semibold text-lg md:text-xl mb-2">
            04 - Speaking Engagements
          </h3>
          <p class="text-navGray mb-4 text-sm">
            Inspire and educate your audience with practical insights on
            branding, entrepreneurship, and clarity-driven growth. My sessions
            are crafted to challenge perspectives, spark action, and equip
            people to build authentic, impactful brands.
            <br className="hidden lg:block" />
            <br />
            <br />
          </p>
          <div class="flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-sm">
            <Link class="bg-primary text-black py-2 px-4 rounded-lg">
              Request Availability
            </Link>
            <Link class="border hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
