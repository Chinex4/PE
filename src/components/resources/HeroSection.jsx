import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../ui/Button';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4 uppercase'>
					Tools to Build a Profitable & Sustainable Brand.
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					Access checklists, templates, and guides that help you simplify your
					message, attract more customers, and grow with clarity.
				</p>
				<MyButton label='Request for a Resource' href='#resourceform' />
			</div>
			<div className='mt-8 mb-16'>
				 <img loading="lazy"
					src={'/images/resourceflash.png'}
					alt='Resource Icon'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
