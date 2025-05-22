import React from 'react';
import YouTube from 'react-youtube';

const YoutubeSection = () => {
	const videoId = 'KgvA7o8c7RI'; // Your YouTube video ID

	const opts = {
		height: '350',
		width: '100%',
		playerVars: {
			autoplay: 0,
		},
	};

	const onReady = (event) => {
		console.log('Player is ready');
	};

	return (
		<section className='text-center py-16 px-4'>
			<h2 className='text-2xl uppercase font-semibold text-[#F5E9DC] mb-8 leading-[1.1]'>
				Learn Insights and Strategies on Youtube
				<span className='text-[3rem] leading-[2px] text-primary'>.</span>
			</h2>

			{/* Responsive Video Wrapper */}
			<div className='relative w-full max-w-3xl mx-auto aspect-video'>
				<YouTube
					videoId={videoId}
					opts={opts}
					onReady={onReady}
					className='absolute top-0 left-0 w-full h-[400px]'
				/>
			</div>

			<p className='text-[#F5E9DC] mt-10 md:-mt-12 text-sm font-medium max-w-xl mx-auto'>
				Keynote Speech: How To Build Strong International Brands by Precious
				Evans
			</p>
		</section>
	);
};

export default YoutubeSection;
