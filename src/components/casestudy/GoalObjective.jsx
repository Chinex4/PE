import React from 'react';

const GoalsObjectives = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-2xl font-semibold'>Goals & Objectives</h2>

				{/* Divider Line */}
				<div className='w-52 h-[2px] bg-[#F5E9DC] mx-auto mb-8'></div>

				<p className='text-sm mb-12'>
					The primary goal for Xquisite was to enhance brand positioning and
					visual identity, allowing them to stand out in a competitive market
					and attract a loyal customer base. To achieve this, our objectives
					included:
				</p>

				{/* Goals Section */}
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Goal Item 1 */}
					<div className='flex flex-col items-center'>
						<div className='mb-5'>
							<img src="/images/archicon.png" alt="" />{' '}
							{/* Replace with actual icon */}
						</div>
						<h3 className='text-center text-sm font-medium'>
							Strengthen Brand Identity
						</h3>
					</div>

					{/* Goal Item 2 */}
					<div className='flex flex-col items-center'>
						<div className='mb-5'>
							<img src="/images/archicon.png" alt="" />{' '}
							{/* Replace with actual icon */}
						</div>
						<h3 className='text-center text-sm font-medium'>
							Enhance Product Hierarchy
						</h3>
					</div>

					{/* Goal Item 3 */}
					<div className='flex flex-col items-center'>
						<div className='mb-5'>
							<img src="/images/archicon.png" alt="" />{' '}
							{/* Replace with actual icon */}
						</div>
						<h3 className='text-center text-sm font-medium'>
							Increase Brand Recognition and Engagement
						</h3>
					</div>

					{/* Goal Item 4 */}
					<div className='flex flex-col items-center'>
						<div className='mb-5'>
							<img src="/images/archicon.png" alt="" />{' '}
							{/* Replace with actual icon */}
						</div>
						<h3 className='text-center text-sm font-medium'>
							Drive Competitive Positioning
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GoalsObjectives;
