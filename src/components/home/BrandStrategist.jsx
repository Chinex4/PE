import React from 'react';
import smiley from '../../assets/smiley2.png';
import { Link } from 'react-router-dom';

const BrandStrategist = () => {
	return (
		<section className='mt-[5rem] mb-12 bg-primary p-8 rounded-lg shadow-lg mx-auto'>
			{/* Content Section */}
			<div className='text-center'>
				<h2 className='text-[30px] leading-[1] font-bold text-[#F5E9DC] uppercase'>
					Your Brand Deserves Profitable Growth
					<span className='text-smileyblue'> Not Just Visibility </span>
				</h2>
				<p className='mt-8 text-smileyblue text-sm md:text-[18px] leading-6'>
					A few years ago, I identified a problem with my friend’s brand. A
					problem I later got to learn was common with a lot of businesses.
					Amanda, my friend, ran a small business. Amanda worked so hard. She
					put in all the work, but she recorded little to no results. On a
					closer look, I noticed Amanda had problems with brand positioning and
					messaging. She was working hard, but not hard on the problem. There
					are lots of Amandas and that’s why I’ve decided to create solutions by
					helping businesses 5X revenue through effective brand positioning and
					messaging, product design and automation, and revenue-driven
					marketing. Your brand doesn’t need more noise, it needs a strategy
					that attracts, converts and retains high-paying customers/clients.
				</p>

				{/* Button */}
				<div className='flex flex-col lg:flex-row items-center gap-4 justify-center mt-12'>
					<Link
						to='/reach-out'
						className='inline-flex items-center gap-2 text-xs lg:text-lg px-6 py-2 bg-smileyblue text-[#F5E9DC] font-medium rounded-lg hover:bg-smileyblue/50'>
						<span>Let's Build Your Growth Strategy</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
							/>
						</svg>
					</Link>
					<Link
						to='/services'
						className='inline-block text-lg px-6 py-2 bg-white text-smileyblue font-medium rounded-lg hover:bg-gray-200'>
						View My Services Here
					</Link>
				</div>
			</div>
		</section>
	);
};

export default BrandStrategist;
