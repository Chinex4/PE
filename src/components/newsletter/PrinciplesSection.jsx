import React from 'react';

const PrinciplesSection = () => {
	return (
		<section className='mt-32 lg:mt-[10rem] text-white flex flex-col lg:flex-row gap-10 lg:gap-20'>
			{/* Left Side */}
			<div className='flex-1'>
				<h2 className='text-2xl md:text-3xl font-bold uppercase leading-snug mb-8'>
					NOT JUST EXPERIENCES,
					<br />
					NOT JUST LAWS BUT
					<br />
					<span className='text-[#F4A261] border-b-2 border-[#F4A261] pb-1 inline-block'>
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
                                <img src="/images/thumbs.png" alt="thumbs up" />
                            </span>
							<span>{text}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Right Side */}
			<div className='flex-1 text-navGray text-sm md:text-base space-y-5'>
				<p>
					<b>Mind & Market</b> is a weekly letter for founders, creators, and
					brand builders who want to scale with substance, not just speed.
				</p>
				<p>
					Each edition blends insight from branding, marketing, business
					strategy, and personal development. But this isn’t just another
					“how-to” newsletter. It’s built on principles, not just playbooks,
					designed to sharpen your thinking and elevate the way you build.
				</p>
				<p>
					We study what makes brands stand out and why businesses grow or don’t.
					Then we break it down into clear, practical insights you can apply.
				</p>
				<p>
					Whether you’re defining your brand, launching your next offer, or
					reworking your mindset for growth, Mind & Market delivers what you
					need to think clearer, move smarter, and scale better.
				</p>
			</div>
		</section>
	);
};

export default PrinciplesSection;
