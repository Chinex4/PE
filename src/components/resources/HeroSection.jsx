import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4'>
					Empower Your Brand with Resources Designed to Drive Growth
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					Explore a curated collection of resources tailored to help you
					simplify brand strategy, grow your audience, and increase revenue.
				</p>
				<a href='#resourceform' className='btn bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Request for a Resource
				</a>
			</div>
			<div className='mt-8'>
				<img
					src={'/images/resourceflash.png'}
					alt='Resource Icon'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
