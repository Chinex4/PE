import React from 'react';
import { Link } from 'react-router-dom';

const UltimateMission = () => {
	return (
		<section className=' text-[#F5E9DC] py-16 px-4'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col lg:flex-row rounded-lg shadow-lg overflow-hidden'>
					{/* Logo/Image */}
					<div className='w-full lg:w-1/2 flex justify-center md:justify-start'>
						 <img loading="lazy"
							src='/images/me.png'
							alt='me'
							className='w-full h-auto'
						/>
					</div>

					{/* Text Content */}
					<div className='w-full lg:w-2/3 md:pl-8 text-center md:text-left py-6 lg:p-6'>
						<h3 className='text-xl font-semibold mb-4'>My Ultimate Mission</h3>
						<p className='mb-6'>
							I have always held a passionate desire to see authentic brands
							thrive, and this vision is what drives me every day. I am deeply
							committed to the impact that brands can make across Africa, and
							it’s inspiring to witness the positive change already unfolding.
							<br />
							<br />
							Being part of this ecosystem of innovation and transformation is a
							path I've long aspired to, and I am grateful to be walking it now.
							Each step in this journey is about contributing to a wave of
							positive change, empowering brands that resonate with audiences
							and create lasting impact.
						</p>

						{/* Call-to-Action Button */}
						<a
							href='https://forms.gle/tEcaehopTEzFoKLB8'
							className='bg-primary inline-block mt-8 text-black py-4 px-8 rounded-lg'>
							Let's Talk About Your Brand
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UltimateMission;
