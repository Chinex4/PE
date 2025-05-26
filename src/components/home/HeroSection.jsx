import React from 'react';
import { Link } from 'react-router-dom';
import smiley from '/images/smileyyy.svg';
import MyButton from '../ui/Button';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4 uppercase'>
					Do you know saying the right thing to your audience can be the
					difference between 1X and 10X?
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					Fix your brand messaging, implement a solid strategy, and watch your
					business grow in revenue and relevance.
				</p>
				<div className=''>
					<MyButton
						label='Book a Call'
						to='/reach-out'
					/>
				</div>
			</div>
			<div className='mt-8'>
				<img
					loading='lazy'
					src={smiley}
					alt='Entrepreneur'
					className='w-full lg:w-[83rem]'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
