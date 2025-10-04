import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../ui/Button';

const HeroSection = () => {
	return (
		<div className='mt-16 lg:mt-28 text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left lg:w-[600px]'>
				<h1 className='text-[28px] md:text-4xl font-bold mb-4 uppercase font-dela'>
					Behind Every Thriving Brand: Real Strategies, Real Results
				</h1>
				<p className='text-sm mb-8 text-navGray'>
					Discover how we’ve helped entrepreneurs and brands transform their
					positioning, scale their businesses, and generate more revenue. Each
					case study highlights the challenges, strategies, and successes that
					drive impactful growth.
				</p>
				<MyButton label='Book A Call Now' to='/reach-out' />
				{/* <Link
					to='/reach-out'
					className='btn bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Book A Call Now
				</Link> */}
			</div>
			<div className='mt-8'>
				 <img loading="lazy"
					src={'/images/casestudyhero.png'}
					alt='Service Icon'
                    className=''
				/>
			</div>
		</div>
	);
};

export default HeroSection;
