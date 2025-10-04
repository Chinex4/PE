import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../ui/Button';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] mt-16 lg:mt-28 flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-[28px] md:text-4xl font-bold mb-4 uppercase font-dela'>
					Let’s create The Right opportunities For Your Brand To Thrive
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					From strategy to execution, let’s craft the roadmap your brand needs
					to stand out, connect, and generate consistent revenue.
				</p>
				<MyButton
					label='Get A Free Brand Audit'
					to='/reach-out'
				/>
			</div>
			<div className='mt-8'>
				 <img loading="lazy"
					src={'/images/Subheading.png'}
					alt='Service Icon'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
