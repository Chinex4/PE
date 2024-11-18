import React from 'react';

const BackgroundChallenge = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-2xl font-semibold uppercase leading-[3px]'>Background & Challenge
				<span className='text-5xl text-primary'>.</span></h2>
				{/* Client Overview Section */}
				<div className='my-8'>
					<h3 className='text-xl font-medium mb-4'>Client Overview</h3>
					<p className='text-sm leading-relaxed opacity-80'>
						Our client, Xquisite, is an ambitious brand committed to outpacing
						competitors and capturing market share through a stronger, more
						cohesive brand presence. Recognizing the importance of visual
						identity in establishing credibility and differentiation, they
						sought to enhance their brand's positioning. Additionally, they
						aimed to create a seamless balance between their primary and
						secondary product lines, ensuring a unified brand experience that
						resonates with their audience.
					</p>
				</div>

				{/* The Challenge Section */}
				<div>
					<h3 className='text-xl font-medium mb-4'>The Challenge</h3>
					<p className='text-sm leading-relaxed opacity-80'>
						Facing an intensely competitive landscape, Xquisite needed to stand
						out not only through high-quality products but through a
						well-defined and consistent visual identity. This required refining
						their brand positioning to communicate both authority and cohesion
						across all product offerings. The challenge was two-fold: to elevate
						the brand's appeal in a crowded market while effectively balancing
						and showcasing the unique value of both primary and secondary
						products.
					</p>
				</div>
			</div>
		</section>
	);
};

export default BackgroundChallenge;
