import React from 'react';
import YouTube from 'react-youtube';

const YoutubeSection = () => {
	const videoId = 'KgvA7o8c7RI'; // Your YouTube video ID

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 0, // set to 1 if you want autoplay
		},
	};

	const onReady = (event) => {
		// access to player in all event handlers via event.target
		console.log('Player is ready');
	};

	return (
		<section className='text-center py-16 px-4'>
			<h2 className='text-2xl uppercase font-semibold text-[#F5E9DC] mb-8 leading-[20px]'>
				Learn Insights and Strategies on Youtube
				<span className='text-5xl text-primary'>.</span>
			</h2>

			<div className='flex justify-center'>
				<YouTube
					videoId={videoId}
					opts={opts}
					onReady={onReady}
				/>
			</div>

			<p className='text-[#F5E9DC] mt-6 text-sm font-medium max-w-xl mx-auto'>
				Keynote Speech: How To Build Strong International Brands by Precious
				Evans
			</p>
		</section>
	);
};

export default YoutubeSection;
