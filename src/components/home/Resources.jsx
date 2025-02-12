import React from 'react';
import { resources } from '../../data';
import { Link } from 'react-router-dom';

const Resources = () => {
	return (
		<div className='bg-black text-[#F5E9DC] py-16'>
			<h2 className='text-center uppercase text-2xl font-bold mb-12 leading-[3px]'>
				Build and Grow your brand easily with these resources 
				<span className='text-5xl text-primary'>.</span>
			</h2>

			<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{resources['latest'].map((item, index) => (
					<Link to={`/book/${encodeURIComponent(item.title)}`}>
						<div
							key={index}
							className='bg-white rounded-lg shadow-lg overflow-hidden'>
							<img
								src={item.image}
								alt={item.title}
								className='w-[500px] h-[400px] object-cover'
							/>
							<div className='p-4'>
								<h3 className='font-semibold text-lg mb-2 text-black'>{item.title}</h3>
								<p className='text-gray-600 mb-4'>Available for: {item.price}</p>
								<a href={item.link} className='bg-primary text-[#F5E9DC] px-4 py-3 rounded-lg inline-block w-full text-center'>
									Get Now
								</a>
							</div>
						</div>
					</Link>
				))}
			</div>

			<div className='grid place-items-center mt-8'>
			    <Link to={'/resources'} className='btn rounded-md bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
    				View More Resources
    			</Link>
			</div>
		</div>
	);
};

export default Resources;
