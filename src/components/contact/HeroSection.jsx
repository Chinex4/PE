import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col items-center justify-center lg:justify-between'>
			<div className='text-center max-w-2xl'>
				<h1 className='text-4xl font-bold mb-4'>
					Let’s Connect and Bring Your Brand Vision to Life!
				</h1>
				<p className='text-lg mb-8 text-navGray'>
					Whether you’re ready to elevate your brand, need guidance on brand
					strategy, or just want to explore how we can work together, I’d love
					to hear from you! Every brand journey starts with a conversation, and
					I’m here to help you find the right path for growth and success.
				</p>
				<a href='https://www.instagram.com/_preciousevans?igsh=ZzlnaHE3bnd5YjE5' className='btn bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					Send a Direct Message
				</a>
			</div>
		</div>
	);
};

export default HeroSection;
