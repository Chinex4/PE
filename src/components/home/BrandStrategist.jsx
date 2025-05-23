import React from 'react';
import smiley from '../../assets/smiley2.png';
import { Link } from 'react-router-dom';
import MyButton from '../ui/Button';

const BrandStrategist = () => {
	return (
		<div className='text-[#F5E9DC] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between'>
			<div className='text-left lg:text-left max-w-2xl'>
				<h1 className='text-2xl font-bold mb-4 uppercase'>
					Why Most Growth Strategies Fail (And What Actually Works)
				</h1>
				<p className='flex flex-col gap-3 text-sm mb-8 text-navGray'>
					<span>
						Many entrepreneurs believe the key to growth is simply posting more
						content, redesigning their brand, or pouring money into ads. But if
						your message isn’t clear, none of these efforts will bring lasting
						results.
					</span>
					<span>
						The real challenge isn’t just visibility, it’s that your ideal
						audience doesn’t understand what you offer or why it matters to them.
						Without a clear message, even the best products and services get
						overlooked.
					</span>
					<span>
						The true solution lies in crafting and delivering the right message to
						the right people, backed by a strategic plan. When your brand
						communicates with clarity and purpose, you build trust, attract loyal
						customers, and create sustainable growth that lasts.
					</span>
				</p>
				<MyButton to='/reach-out' label="Let's Fix Your Message"/>
			</div>
			<div className='mt-8 hidden md:block'>
				<img
					src={'/images/news.PNG'}
					alt='Service Icon'
					className='w-[300px]'
				/>
			</div>
		</div>
	);
};

export default BrandStrategist;
