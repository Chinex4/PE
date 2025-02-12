import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left lg:w-[600px]'>
				<h1 className='text-4xl font-bold mb-4'>
					Behind Every Thriving Brand: Real Strategies, Real Results
				</h1>
				<p className='text-sm mb-8 text-navGray'>
					Explore how we’ve helped entrepreneurs and brands transform their
					positioning, scale their businesses, and generate more revenue. Each
					case study highlights the challenges, strategies, and successes that
					drive impactful growth.
				</p>
				<Link
					to='/reach-out'
					className='btn bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Book A Call Now
				</Link>
			</div>
			<div className='mt-8'>
				<img
					src={'/images/casestudyhero.png'}
					alt='Service Icon'
                    className=''
				/>
			</div>
		</div>
	);
};

export default HeroSection;
