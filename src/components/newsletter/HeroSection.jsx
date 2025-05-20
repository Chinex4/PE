import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-between'>
			{/* Text Content */}
			<div className='max-w-xl text-center lg:text-left'>
				<h2 className='text-3xl md:text-4xl font-semibold mb-4'>
					Get Letters On Strategy & Thought, Built On Principles, Not Just Laws
				</h2>
				<p className='text-navGray text-base md:text-lg mb-8'>
					For founders, creators, and brand builders who value depth over hype,
					offering thoughtful strategies, brand insight, and mental clarity to
					grow sustainably.
				</p>

				<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
					<button className='bg-[#F4A261] text-black font-medium py-3 px-6 rounded-md hover:bg-[#f4a261cc] transition'>
						Subscribe
					</button>
					<button className='border border-[#F4A261] text-[#F5E9DC] font-medium py-3 px-6 rounded-md hover:bg-[#f4a2611a] transition'>
						View Plans
					</button>
				</div>
			</div>

			{/* Image */}
			<div className='mb-10 lg:mb-0 lg:ml-10'>
				<img
					src='/images/envelope.png'
					alt='Newsletter Envelope'
					className='max-w-xs md:max-w-sm'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
