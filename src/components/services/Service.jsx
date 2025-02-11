import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div class='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
				{/* <!-- Service 1 --> */}
				<div class='bg-[#F5E9DC] text-black p-6 rounded-lg shadow-lg'>
					<h3 class='font-semibold text-lg md:text-xl mb-2'>
						01 - Brand Strategy & Positioning
					</h3>
					<p class='text-gray-700 mb-4 text-sm'>
						Build a powerful foundation for your brand with a tailored strategy
						that aligns with your goals and vision. Together, we'll dive deep
						into understanding your audience, defining your unique brand
						identity, and crafting a roadmap that sets you apart from the
						competition.
					</p>
					<div class='mt-6 md:mt-0 flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-sm'>
						<Link class='bg-primary py-2 px-4 rounded-lg'>
							Get Started
						</Link>
						<Link class='border hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg'>
							Explore The Process
						</Link>
					</div>
				</div>

				{/* <!-- Service 2 --> */}
				<div class='border bg-[#191919] border-[#F5E9DC] p-6 rounded-lg'>
					<h3 class='font-semibold text-lg md:text-xl mb-2'>
						02 - Personal Branding
					</h3>
					<p class='text-gray-300 mb-4 text-sm'>
						Uncover your authentic brand voice and learn how to leverage it for
						influence and impact. My personal brand coaching sessions guide you
						through establishing a memorable and credible presence that
						resonates with your audience.
					</p>
					<div class='mt-6 md:mt-0 flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-xs'>
						<Link class='bg-primary text-black py-2 px-4 rounded-lg'>
							Request Coaching
						</Link>
						<Link class='border  hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg'>
							How Coaching Works
						</Link>
					</div>
				</div>

				{/* <!-- Service 3 --> */}
				<div class='border bg-[#191919] border-[#F5E9DC] p-6 rounded-lg'>
					<h3 class='font-semibold text-lg md:text-xl mb-2'>03 - Consultation Calls</h3>
					<p class='text-gray-300 mb-4 text-sm'>
						Need guidance on a specific brand challenge? My one-on-one
						consultation calls offer targeted support tailored to your unique
						needs. Whether you’re looking to strengthen your brand positioning
						or overcome specific challenges, I’ll help you with actionable
						insights.
					</p>
					<div class='mt-6 md:mt-0 flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-sm'>
						<Link class='bg-primary text-black py-2 px-4 rounded-lg'>
							Book A Call
						</Link>
						<Link class='border hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg'>
							View More Details
						</Link>
					</div>
				</div>

				{/* <!-- Service 4 --> */}
				<div class='bg-[#F5E9DC] text-black p-6 rounded-lg shadow-lg'>
					<h3 class='font-semibold text-lg md:text-xl mb-2'>04 - Speaking Engagements</h3>
					<p class='text-gray-700 mb-4 text-sm'>
						Looking for an engaging, knowledgeable speaker on branding,
						entrepreneurship, or business growth? I bring years of experience
						and a deep passion for helping brands thrive. Let’s inspire and
						equip your attendees with the tools they need to elevate their own
						brands.
						<br className='hidden lg:block'/>
						<br />
						<br />
					</p>
					<div class='flex flex-col lg:flex-row gap-4 text-center whitespace-nowrap text-sm'>
						<Link class='bg-primary text-black py-2 px-4 rounded-lg'>
							Request Availability
						</Link>
						<Link class='border hover:bg-primary hover:text-black transition-all duration-300 border-primary text-primary py-2 px-4 rounded-lg'>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
