import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4'>
					Let’s create The Right opportunities For Your Brand To Thrive
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					From strategy to execution, let’s craft the roadmap your brand needs
					to stand out, connect, and generate consistent revenue.
				</p>
				<Link to='/reach-out' className='btn bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Get A Free Brand Audit
				</Link>
			</div>
			<div className='mt-8'>
				<img
					src={'/images/Subheading.png'}
					alt='Service Icon'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
