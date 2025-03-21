import React from 'react';

const YoutubeSection = () => {
	const videos = [
		{
			title: 'How To Build A Personal Brand - You, The Brand By Precious Evans',
			thumbnail: '/images/ythumb1.jpg',
			link: 'https://youtu.be/SmYR_H9hq7U',
		},
		{
			title: 'What is Personal Branding | You, The Brand By Preious Evans',
			thumbnail: '/images/ythumb2.jpg',
			link: 'https://youtu.be/Kd-QIX5Mdt4',
		},
		// {
		// 	title: 'How To Make Money Through Your Business Logo With Precious Evans',
		// 	thumbnail: 'https://i.ytimg.com/an_webp/eFaB5leqYlM/mqdefault_6s.webp?du=3000&sqp=COfFrb0G&rs=AOn4CLCamuJIXsBMW5kcRo0LCS09hzGBvQ',
		// 	link: 'https://youtu.be/eFaB5leqYlM?si=u1vadR3KMfVHUYLI',
		// },
	];

	return (
		<section className='bg-black text-center py-16 px-4'>
			<h2 className='text-2xl uppercase font-semibold text-[#F5E9DC] mb-8 leading-[20px]'>
				Learn Insights and Strategies on Youtube
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{videos.map((video, index) => (
					<a
						href={video.link}
						target='_blank'
						rel='noopener noreferrer'
						className='relative group'
						key={index}>
						{/* Thumbnail with Play Icon */}
						<div className='relative'>
							<img
								src={video.thumbnail}
								alt={video.title}
								className='rounded-lg w-full h-auto'
							/>
							<div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<div className='bg-white w-16 h-16 rounded-full flex items-center justify-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-black'
										viewBox='0 0 24 24'
										fill='currentColor'>
										<path d='M8 5v14l11-7L8 5z' />
									</svg>
								</div>
							</div>
						</div>
						{/* Video Title */}
						<p className='text-[#F5E9DC] mt-4 text-sm font-medium'>
							{video.title}
						</p>
					</a>
				))}
			</div>
		</section>
	);
};

export default YoutubeSection;
