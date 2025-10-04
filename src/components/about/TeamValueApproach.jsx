import React from 'react';

// Data arrays for team values and approach
const teamValues = [
	{
		title: 'Authenticity',
		description:
			'We’re all about genuine connections. Every strategy is personalized to your unique story, making your brand relatable and memorable.',
		icon: 'VAL1.png', // Replace with actual icon component or image path
	},
	{
		title: 'Innovation',
		description:
			'Our strategies aren’t one-size-fits-all. We believe in modern, fresh approaches that set you apart in your industry.',
		icon: 'VAL2.png', // Replace with actual icon component or image path
	},
	{
		title: 'Result-Driven',
		description:
			'Our focus is always on creating measurable outcomes that contribute directly to your business growth.',
		icon: 'VAL3.png', // Replace with actual icon component or image path
	},
];

const myApproach = {
	title: 'My Approach',
	description:
		'I believe building a powerful personal brand goes far beyond visuals or social media presence, it’s about discovering who you are, clarifying your message, and positioning your value with intention. My approach is simple: clarity first, then strategy. Through deep conversations and guided frameworks, I help you uncover your authentic story, define your goals, and create a brand that aligns with your purpose and attracts the opportunities meant for you. Together, we turn confusion into clarity, potential into progress, and vision into visible results.',
};

// React component
const TeamValuesAndApproach = () => {
	return (
		<section className=' text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center text-2xl font-bold mb-12 leading-[3px] uppercase'>
				What I & My Team Stand For
				<span className='text-5xl text-primary'>.</span>
			</h2>

			<div className='flex flex-col sm:flex-row justify-center items-center gap-8 mb-12'>
				{teamValues.map((value, index) => (
					<div
						key={index}
						className='flex flex-col items-center text-center'>
						<div className='text-4xl mb-4'>
							 <img loading="lazy"
								src={`/images/${value.icon}`}
								alt=''
							/>
						</div>
						<h3 className='font-semibold text-2xl mb-2 uppercase'>
							{value.title}
						</h3>
						<p className='text-[#F5E9DC]/80'>{value.description}</p>

						{/* Vertical Divider Line */}
						{/* {index < teamValues.length - 1 && (
							<div className='hidden md:block absolute right-0 top-0 h-full border-r border-gray-600 p-8'>5</div>
						)} */}
					</div>
				))}
			</div>

			<div className='bg-[#F5E9DC] w-full lg:w-[70%] mx-auto px-5 lg:px-16 py-10 text-center rounded-2xl'>
				<h3 className='text-xl text-[#023047] font-semibold mb-4'>{myApproach.title}</h3>
				<p className='text-[#023047]'>{myApproach.description}</p>
                <div className='md:block w-[50%] mx-auto rounded my-6 bg-[#023047] py-[2px]'></div>
			</div>
		</section>
	);
};

export default TeamValuesAndApproach;
