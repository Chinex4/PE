import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../ui/Button';

const HeroSection = () => {
	return (
		<div className='mt-16 text-[#F5E9DC] flex flex-col lg:flex-row items-center justify-center lg:justify-between'>
			<div className='text-center lg:text-left max-w-2xl'>
				<h1 className='text-[28px] md:text-4xl font-bold mb-4 uppercase font-dela'>
					Hi, I am <br /> Precious Evans
				</h1>
				<p className='text-sm mb-8 text-navGray'>
					I am a brand strategist and passionate user/customer experience
					designer with a unique desire for solving both simple & complex
					problems every day of my life. Over my years of experience, I have
					been equipped with a communication skill which help me interpret
					entrepreneurs dreams & desires to its simplest form and problem
					solving skills that help me walk them through the path of achieving
					their desires.
				</p>
				
				<MyButton
					label='Know More About Me'
					href='https://www.instagram.com/_preciousevans?igsh=ZzlnaHE3bnd5YjE5'
				/>
			</div>
			<div className='mt-8 '>
				 <img loading="lazy"
					className='rounded-3xl'
					src={'/images/smiley-on-stage.jpg'}
					alt='Service Icon'
				/>
			</div>
		</div>
	);
};

export default HeroSection;
