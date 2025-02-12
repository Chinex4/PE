import React from 'react';

const CommunitySection = () => {
	return (
		<div className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div className='flex flex-col lg:flex-row items-center lg:space-x-8'>
				<div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
					<img
						src='/images/builder.jpg' // Replace with the actual image path
						alt='Community'
						className='rounded-lg shadow-lg w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2 text-center lg:text-left'>
					<h3 className='text-2xl font-bold mb-4'>
						Join The Builder's Cabin Community Today!
					</h3>
					<p className='mb-6'>
						The Builder’s Cabin is a vibrant community for young entrepreneurs
						dedicated to building impactful and sustainable brands. We provide
						access to expert-led webinars, actionable resources, and a network
						of like-minded individuals to help you scale your business and
						improve your brand positioning.
						<br />
						<br />
						Whether you’re starting out or
						leveling up, this is where entrepreneurs connect, grow, and thrive.
						Join us to bring your vision to life! :)
					</p>
					
					<button
						// href='https://chat.whatsapp.com/FULmCcEHwAHBgIHmZ4Wxsa' // Replace with the actual link
						target='_blank'
						aria-disabled="true"
						rel='noopener noreferrer'
						className='inline-block cursor-not-allowed bg-gray-600/60 text-black px-6 py-3 rounded-md shadow-lg transition-colors'>
						Coming Soon!
					</button>
				</div>
			</div>
		</div>
	);
};

export default CommunitySection;
