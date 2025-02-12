import React from 'react';
import { Link } from 'react-router-dom';
import smiley from '../../assets/SMILEY.png';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4 uppercase'>
					5x Your Brand's Revenue in just 16 weeks!
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					I offer Proven brand strategies, product design & automation and marketing
					systems to 5X your revenue in just 16 weeks, together with
					sustainability tools. No guesswork or wasted effort. From strategy to
					execution.
				</p>
				<Link
					to='/reach-out'
					className='btn rounded-md bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Book A Free Brand Audit!
				</Link>
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
