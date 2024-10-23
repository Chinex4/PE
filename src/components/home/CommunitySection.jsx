import React from 'react';

const CommunitySection = () => {
	return (
		<div className='bg-black text-white py-16 px-4'>
			<h2 className='text-center text-2xl font-bold mb-12'>
				CONNECT & HAVE FUN WHILE LEARNING
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<div className='flex flex-col lg:flex-row items-center lg:space-x-8'>
				<div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
					<img
						src='/images/gathering.png' // Replace with the actual image path
						alt='Community'
						className='rounded-lg shadow-lg w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2 text-center lg:text-left'>
					<h3 className='text-2xl font-bold mb-4'>
						Join The Icon Community Today!
					</h3>
					<p className='mb-6'>
						Get access to weekend Q/A Sessions, Games, Free Resources & Courses
						to help you in your entrepreneurial journey and also get investment
						opportunities for your business.
					</p>
					<p className='mb-6'>It is a Family For Entrepreneurs :)</p>
					<a
						href='https://your-community-link.com' // Replace with the actual link
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block bg-primary text-black px-6 py-3 rounded-lg shadow-lg hover:bg-primary/80 transition-colors'>
						Click Here To Join
					</a>
				</div>
			</div>
		</div>
	);
};

export default CommunitySection;
