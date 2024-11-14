import React from 'react';
import { approachSteps } from '../../data';

const MyApproach = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div className='max-w-5xl mx-auto text-center'>
				<h2 className='text-2xl font-semibold'>My Approach</h2>

				{/* Divider Line */}
				<div className='w-44 h-[2px] bg-[#F5E9DC] mx-auto mb-8'></div>

				<p className='text-sm mb-12'>
					To help Xquisite achieve its goals, we implemented a multi-phase
					approach focused on strategic analysis, visual identity enhancement,
					and brand positioning.
				</p>

				{/* Approach Steps */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left'>
					{/* Render Approach Steps */}
					{approachSteps.map((step) => (
						<div
							key={step.step}
							className='border border-gray-500 p-6 rounded-lg'>
							<div className='text-2xl w-12 h-12 grid place-items-center rounded-full bg-[#F5E9DC33] border border-white font-semibold text-[#F5E9DC] mb-4'>
								<span>{step.step}</span>
							</div>
							<h3 className='text-lg font-semibold mb-2 text-white'>
								{step.title}
							</h3>
							<p className='text-[#F5E9DC]'>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyApproach;
