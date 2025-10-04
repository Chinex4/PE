import React from "react";
import MyButton from "../ui/Button";

const PrinciplesSection = () => {
  return (
    <section className=" mt-32 lg:mt-[10rem] text-[#F5E9DC] flex flex-col gap-10">
      {/* Left Side */}
      <div className=" lg:flex lg:justify-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase leading-snug font-dela text-center">
          NOT JUST MOTIVATION,
          <br />
          NOT JUST STRATEGY, BUT
          <br />
          <span className="text-[#F4A261] pb-1 inline-block">
            CLARITY THAT TRANSFORMS
          </span>
        </h2>

        {/* <ul className='space-y-4 text-base'>
					{[
						'Get 30% off our Courses',
						'Community Access to Master Minds',
						'Get your brand featured as Case Studies',
					].map((text, index) => (
						<li
							key={index}
							className='flex items-center gap-3'>
							<span>
								 <img loading="lazy"
									src='/images/thumbs.png'
									alt='thumbs up'
								/>
							</span>
							<span>{text}</span>
						</li>
					))}
				</ul> */}
      </div>

      <div className="text-center lg:max-w-xl lg:mx-auto  text-navGray text-sm md:text-base space-y-5">
        <p>
          It started with a simple realization.... <br /> Too many people,
          founders, creators, and professionals, are chasing growth, speed, and
          visibility without true clarity. Everyone wants to grow fast, but few
          stop to ask what foundation are they really building on?
        </p>
        <p>
          I kept seeing talented people with big dreams but no direction.
          Launching ideas without alignment. Creating brands without a message.
          Scaling without a solid foundation. And I realized what was missing,
          clarity and principles.
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
      <div className="-mt-2 text-center">
        <MyButton
          label="Join Limtless"
          href="https://substack.com/@preciousevans"
        />
      </div>
    </section>
  );
};

export default PrinciplesSection;
