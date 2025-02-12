import React from 'react';
import smiley from '../../assets/smiley2.png';
import { Link } from 'react-router-dom';

const BrandStrategist = () => {
	return (
		<section className='mt-[5rem] mb-12 bg-primary p-8 rounded-lg shadow-lg mx-auto'>
			{/* Content Section */}
			<div className='text-center'>
				<h2 className='text-[30px] leading-[1] font-bold text-[#F5E9DC]'>
					Your Brand Deserves Profitable Growth Not Just Visibility (Highlight
					from Profitable Growth Not Just Visibility)
				</h2>
				<p className='mt-8 text-smileyblue text-sm md:text-[18px]'>
					A few years ago, I noticed many entrepreneurs show up, market hard,
					and still struggle to scale. The problem? A lack of strategic
					positioning and messaging that turns visibility into revenue. I’ve
					helped businesses 5X their revenue in weeks by applying brand
					positioning, product design and automation, revenue-driven marketing,
					and high-converting messaging. Your brand doesn’t need more noise, it
					needs a strategy that attracts, converts, and retains high-paying
					customers.
				</p>

				{/* Button */}
				<div className='flex flex-col lg:flex-row items-center gap-4 justify-center'>
					<Link
						to='/reach-out'
						className='inline-flex items-center gap-2  text-lg mt-12 px-6 py-2 bg-smileyblue text-white font-medium rounded-lg hover:bg-smileyblue/50'>
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
						className='inline-block text-lg mt-12 px-6 py-2 bg-white text-smileyblue font-medium rounded-lg hover:bg-gray-200'>
						View My Services Here
					</Link>
					
				</div>
			</div>
		</section>
	);
};

export default BrandStrategist;
