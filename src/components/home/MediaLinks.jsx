import React from 'react';
import { media } from '../../data';

const MediaLinks = () => {
	return (
		<div className='bg-black text-white py-16'>
			<h2 className='text-center text-2xl leading-[15px] font-bold mb-12'>
				LEARN WITH ME THROUGH THE MEDIA
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<div className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-6'>
				{media.map((item, index) => (
					<a
						key={index}
						href={item.link}
						target='_blank'
						rel='noopener noreferrer'
						className='relative block overflow-hidden rounded-lg shadow-lg w-full max-w-xl'>
						<img
							src={item.imageUrl}
							alt={item.name}
							className='w-full h-48 object-cover'
						/>
						<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white flex items-center justify-between'>
							<h3 className='text-lg font-bold'>{item.name}</h3>
							<span className=''>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
									/>
								</svg>
							</span>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default MediaLinks;
