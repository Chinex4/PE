import React from 'react';
import { resources } from '../../data';
import { Link } from 'react-router-dom';

const Resources = () => {
	return (
		<div className='bg-black text-[#F5E9DC] py-16'>
			<h2 className='text-center uppercase text-2xl font-bold mb-12 leading-[1.1]'>
				Build and Grow your brand easily with these resources
				<span className='text-5xl text-primary'>.</span>
			</h2>

			<div className='mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5'>
				{resources['latest'].map((item, index) => (
					<div
						key={index}
						className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-[250px] md:max-w-[350px] mx-auto'>
						<Link to={`/book/${encodeURIComponent(item.title)}`}>
							<img
								src={item.image}
								alt={item.title}
								className='w-full h-[180px] md:h-[350px] object-cover cursor-pointer'
							/>
						</Link>
						<div className='p-3 flex flex-col flex-grow justify-between'>
							<div>
								<h3 className='font-semibold text-xs md:text-lg mb-1 text-black'>
									{item.title}
								</h3>
								<p className='text-gray-600 mb-3 text-xs md:text-base'>
									Available for: {item.price}
								</p>
							</div>
							<a
								href={item.link}
								rel='noopener noreferrer'
								className='inline-block w-full text-center bg-primary text-[#F5E9DC] px-3 py-2 rounded-md text-xs md:text-base mt-auto'>
								Get Now
							</a>
						</div>
					</div>
				))}
			</div>

			<div className='grid place-items-center mt-8'>
				<Link
					to={'/resources'}
					className='btn rounded-md bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					View More Resources
				</Link>
			</div>
		</div>
	);
};

export default Resources;
