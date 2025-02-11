import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div class=''>
				<h2 className='text-center text-2xl font-bold mb-12'>
					Case Studies
					<span className='text-5xl text-primary'>.</span>
				</h2>

				<div class='flex flex-col md:flex-row items-center rounded-lg shadow-lg'>
					{/* <!-- Logo/Image --> */}
					<div class='w-full md:w-1/2 lg:w-1/2 flex justify-center mb-6 md:mb-0'>
						<img
							src='/images/xquisiteee.png'
							alt='Xquisite Logo'
							class='w-full h-auto'
						/>
					</div>

					{/* <!-- Text Content --> */}
					<div class='w-full md:w-2/3 lg:w-1/2 md:pl-8 text-center md:text-left'>
						<h3 class='text-xl font-semibold mb-2'>Meet Xquisite</h3>
						<p class='mb-4'>
							Xquisite is a food brand located in the UK. They help Africans in
							the UK easily access different African meals. When the client
							reached out to me, they were a bit confused on how to position
							because they had competitors and also secondary products.
						</p>

						{/* <!-- Call-to-Action Button --> */}
						<Link to={'/case-studies'} class='bg-primary text-black py-2 px-8 rounded-lg'>
							View More Case Studies
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CaseStudy;
