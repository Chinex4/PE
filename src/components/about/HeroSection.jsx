import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4'>Hi, I am Precious Evans</h1>
				<p className='text-lg mb-8 text-navGray'>
					I am a brand strategist and passionate user/customer experience
					designer with a unique desire for solving both simple & complex
					problems every day of my life. Over my years pf experience, I have
					been equipped with a communication skill which help me interpret
					entrepreneurs dreams & desires to its simplest form and problem
					solving skills that help me walk them through the path of achieving
					their desires.
				</p>
				<Link className='btn bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Know More About Me
				</Link>
			</div>
			<div className='mt-8'>
				<img
					src={'/images/smileys.png'}
					alt='Service Icon'
				/>
			</div>
		</div>
	);
};

export default HeroSection;