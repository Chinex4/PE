import React from 'react';

const PrinciplesSection = () => {
	return (
		<section className=' mt-32 lg:mt-[10rem] text-[#F5E9DC] flex flex-col gap-10 lg:gap-20'>
			{/* Left Side */}
			<div className=' lg:flex lg:justify-center lg:gap-24'>
				<h2 className='text-2xl md:text-3xl font-bold uppercase leading-snug mb-8'>
					NOT JUST EXPERIENCES,
					<br />
					NOT JUST LAWS BUT
					<br />
					<span className='text-[#F4A261] pb-1 inline-block'>
						SIMPLE PRINCIPLES
					</span>
				</h2>

				<ul className='space-y-4 text-base'>
					{[
						'Get 30% off our Courses',
						'Community Access to Master Minds',
						'Get your brand featured as Case Studies',
					].map((text, index) => (
						<li
							key={index}
							className='flex items-center gap-3'>
							{/* <CheckCircle2 className='text-green-500 w-5 h-5' /> */}
							<span>
								 <img loading="lazy"
									src='/images/thumbs.png'
									alt='thumbs up'
								/>
							</span>
							<span>{text}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Right Side */}
			<div className='lg:text-center lg:max-w-xl lg:mx-auto  text-navGray text-sm md:text-base space-y-5'>
				<p>
					It started with a simple observation.... <br /> Too many founders and
					creators are sprinting toward growth, chasing speed, hacks, and hype,
					without truly understanding what makes a brand stand out or a business
					sustainable.
				</p>
				<p>
					I kept seeing talented people building without clarity. Launching
					offers with no real positioning. Scaling businesses with shaky
					foundations. And I knew what was missing, principles.
				</p>
				<p>
					Not just more tactics. <br />
					Not just another how-to thread. <br />
					But deeper thinking. Better questions. <br />
					Clarity that creates confidence. <br />
				</p>
				<p>
					So I built Mind & Market, a weekly letter for founders, brand
					builders, and creators who want to scale with substance.
				</p>
				<p>
					Each week, I study what works and what doesn’t in branding, marketing,
					strategy, and mindset. Then I distill it into clear, thoughtful
					insights you can use. Real lessons. No fluff. The kind of mental
					shifts and frameworks that change how you build.
				</p>
				<p>
					Because sometimes, what you need isn’t more noise, it’s sharper
					thinking. Whether you're defining your brand, launching your next
					offer, or shifting your mindset for growth, Join the letter list
					today by subscribing.
				</p>
			</div>
		</section>
	);
};

export default PrinciplesSection;
