import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const CaseStudy = () => {
  return (
    <section className="text-[#F5E9DC] py-16 px-4">
      <div class="">
        <h2 className="text-center text-2xl font-bold mb-12 uppercase">
          Case Studies
          <span className="text-5xl text-primary">.</span>
        </h2>

        <div class="flex flex-col md:flex-row items-center rounded-lg">
          {/* <!-- Logo/Image --> */}
          <div class="w-full md:w-1/2 lg:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              loading="lazy"
              src="/images/mary-voice.png"
              alt="Mary with voice Logo"
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
              to authentic wholeness. <br /> <br /> Through her talks, podcast, and private
              sessions, Mary creates safe spaces for reflection, healing, and
              reconnection, one story, one conversation, one heart at a time.
            </p>

            {/* <!-- Call-to-Action Button --> */}
            <MyButton to="/case-studies" label="View More Case Studies" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
