import { Link } from "react-router-dom";
import MyButton from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#171717] text-[#F5E9DC]">
      <div className="mx-auto flex w-full flex-col px-4 sm:px-12 lg:px-0">
        <div className="relative py-[5rem] lg:py-[10rem]">
          <img
            src="/images/icons/infinity-icon.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute sm:left-0 lg:left-[17rem] top-[53%] hidden w-[83px] -translate-y-1/2 object-contain sm:block"
          />

          <img
            src="/images/icons/star-icon.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute sm:right-0 lg:right-[18rem] top-[45%] hidden w-[33px] object-contain sm:block"
          />

          <div className="mx-auto lg:max-w-2xl mt-[6px] text-center">
            <p className="mb-[18px] text-[14px] leading-none text-[#F5E9DC]">
              You have the expertise, <br /> the experience, the story...
            </p>

            <h1 className=" text-[33px] font-extrabold leading-[0.98] tracking-[0.01em] text-[#F5E9DC] sm:text-[48px]">
              Now{" "}
              <span className="text-[#F4A261]">
                show up as who you actually are
              </span>{" "}
              and watch everything change.
            </h1>

            <p className="mx-auto lg:max-w-lg my-[20px] text-[15px] leading-[1.25] text-[#F5E9DC]/90">
              You don't need a new persona. You need permission to be yourself,
              a clear path to build your personal brand around it, and someone
              who'll help you discover exactly how to get there.
            </p>

            <MyButton to="/reach-out?type=homepage-cta" label="Book a call &gt;" className="mx-auto mt-[31px] flex h-[46px] w-[222px] items-center justify-center rounded-[2px] bg-primary text-[14px] font-medium uppercase text-black transition hover:bg-[#f5ad73] focus:outline-none focus:ring-2 focus:ring-[#F4A261] focus:ring-offset-2 focus:ring-offset-[#151515]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;