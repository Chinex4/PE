import React from "react";
import { Link } from "react-router-dom";

const UltimateMission = () => {
  return (
    <section className=" text-[#F5E9DC] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden">
          {/* Logo/Image */}
          <div className="w-full lg:w-1/2 flex justify-center md:justify-start">
            <img
              loading="lazy"
              src="/images/me.png"
              alt="me"
              className="w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-2/3 md:pl-8 text-center md:text-left py-6 lg:p-6">
            <h3 className="text-xl font-semibold mb-4">My Ultimate Mission</h3>
            <p className="mb-6">
              My ultimate mission is to help people build personal brands that
              reflect who they truly are and position them to reach their full
              potential. I believe clarity and authenticity are the roots of
              lasting growth, not just for businesses, but for individuals who
              want to make meaningful impact.
              <br /> <br />
              I’m deeply passionate about seeing more people in Africa rise with
              purpose, build influence with integrity, and create brands that
              change how the world perceives them. Every step I take in this
              journey is about helping others step into theirs, with confidence,
              clarity, and action.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="https://forms.gle/tEcaehopTEzFoKLB8"
              className="bg-primary inline-block mt-8 text-black py-4 px-8 rounded-lg"
            >
              Let's Talk About Your Brand
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateMission;
