import React from 'react';
import MyButton from '../ui/Button';

const CommunitySection = () => {
	return (
		<div className='text-[#F5E9DC] py-16 px-4'>
			<div className='flex flex-col lg:flex-row items-center lg:space-x-8'>
				<div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
					<img
						src='/images/ligero.jpg' // Replace with the actual image path
						alt='Community'
						className='rounded-lg shadow-lg w-full h-auto'
					/>
				</div>
				<div className='w-full lg:w-1/2 text-center lg:text-left'>
					<h3 className='text-2xl font-bold mb-4 uppercase'>
						NOT JUST EXPERIENCES, NOT JUST LAWS BUT SIMPLE PRINCIPLES
					</h3>
					<p className='mb-6 flex flex-col gap-3'>
						<span className='text-navGray'>
							Mind & Market is a weekly letter for founders, creators, and brand
							builders who want to scale with substance, not just speed. 
						</span>
					</p>

					<div className='flex flex-col md:flex-row gap-4'>
						<MyButton label='View More' to='/newsletter' />
						<MyButton label='Choose A Plan' to='/newsletter#plans' sec={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CommunitySection;
