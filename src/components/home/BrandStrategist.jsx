import React from 'react';
import smiley from '../../assets/smiley2.png';
import { Link } from 'react-router-dom';

const BrandStrategist = () => {
	return (
		<section className='mt-[5rem] mb-12 bg-primary p-8 rounded-lg shadow-lg mx-auto'>
			{/* Content Section */}
			<div className='text-center'>
				<h2 className='text-[52px] font-bold text-[#F5E9DC]'>
					Brand <span className='text-smileyblue text-5xl'>Strategist</span>
				</h2>
				<p className='mt-4 text-smileyblue text-[20px] pr-8'>
					Hey there! I'm <span className='font-bold'>Precious Evans</span>, a
					brand strategist with a passion for helping entrepreneurs and
					businesses like yours turn their brands into revenue powerhouses.
					Together, we'll craft a strategy that not only grows your business but
					also keeps it thriving for the long haul.
				</p>

				{/* Button */}
				<Link to='/services' className='inline-block text-lg mt-12 px-6 py-2 bg-white text-smileyblue font-medium rounded-lg hover:bg-gray-200'>
					View My Services Here
				</Link>
			</div>
		</section>
	);
};

export default BrandStrategist;
