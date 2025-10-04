import React from "react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  return (
    <section className=" text-[#F5E9DC] py-16 px-4">
      <div class="">
        <h2 className="text-center text-2xl font-bold mb-12 uppercase">
          Case Study Spotlight
          <span className="text-5xl text-primary">.</span>
        </h2>

        <div class="flex flex-col md:flex-row items-center rounded-lg shadow-lg">
          {/* <!-- Logo/Image --> */}
          <div class="w-full md:w-1/2 lg:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              loading="lazy"
              src="/images/mary-voice.png"
              alt="Xquisite Logo"
              class="w-full h-auto"
            />
          </div>

          {/* <!-- Text Content --> */}
          <div class="w-full md:w-2/3 lg:w-1/2 md:pl-8 text-center md:text-left">
            <h3 class="text-xl font-semibold mb-2">
              Meet Mary With The Voice (Therapist, Storyteller, Speaker)
            </h3>
            <p class="mb-4">
              She is a global voice of healing and intimacy, helping individuals
              and communities heal, reconnect with themselves, their emotions,
              and others. Her work sits at the intersection of psychology,
              culture, and emotional wellness, blending African narratives with
              modern healing practices to help people move from silent struggles
              to authentic wholeness.
            </p>
            <p class="mb-6">
              Click the link below to see how I helped her win!
            </p>

            {/* <!-- Call-to-Action Button --> */}
            <Link
              to={"/mary-with-the-voice"}
              class="bg-primary text-black py-2 px-8 rounded-lg"
            >
              View Full Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
