import React from 'react';
import { Link } from 'react-router-dom';
import smiley from '../../assets/SMILEY.png'

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4'>
					Helping Entrepreneurs Scale Their Brands With Personalized Strategies
					To Drive Revenue Growth
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					I create tailored brand strategies that position your business for
					sustainable growth, stronger customer connections, and consistent
					revenue.
				</p>
				<a href='https://forms.gle/RBLA2MLGCuYBPb9Y8' className='btn rounded-md bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Book A Free Call Today!
				</a>
			</div>
			<div className='mt-8'>
				<img
					src={smiley}
					alt='Entrepreneur'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
