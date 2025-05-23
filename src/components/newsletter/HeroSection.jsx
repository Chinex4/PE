import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../ui/Button';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] mt-16 flex flex-col lg:flex-row items-center justify-between'>
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


				<MyButton label='View Plans' href='#plans' />
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
