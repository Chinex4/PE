import React from 'react';
import smiley from '../../assets/smiley2.png';
import { Link } from 'react-router-dom';

const BrandStrategist = () => {
	return (
		<section className='mt-[5rem] mb-12 flex flex-col-reverse md:flex-row items-center bg-primary p-8 rounded-lg shadow-lg mx-auto'>
			{/* Image Section */}
			<div className='flex-shrink-0 relative top-8 lg:mb-0 lg:mr-8'>
				<img
					src={smiley}
					alt='Brand Strategist'
					className='w-[25rem] object-cover'
				/>
			</div>

			{/* Content Section */}
			<div className='text-center md:text-left'>
				<h2 className='text-5xl font-bold text-[#F5E9DC]'>
					Brand <br /><span className='text-smileyblue text-5xl'>Strategist</span>
				</h2>
				<p className='mt-4 text-smileyblue pr-8'>
					Hey there! I'm <span className='font-bold'>Precious Evans</span>, a
					brand strategist with a passion for helping entrepreneurs and
					businesses like yours turn their brands into revenue powerhouses.
					Together, we'll craft a strategy that not only grows your business but
					also keeps it thriving for the long haul.
				</p>

				{/* Button */}
				<Link className='inline-block text-lg mt-12 px-6 py-2 bg-white text-smileyblue font-medium rounded-lg hover:bg-gray-200'>
					View My Services Here
				</Link>
			</div>
		</section>
	);
};

export default BrandStrategist;
