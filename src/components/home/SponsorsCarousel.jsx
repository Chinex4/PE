import { sponsors } from '../../data';

const SponsorsCarousel = () => {
	return (
		<section className='text-[#F5E9DC] py-16 px-4 relative overflow-hidden'>
			<div className='relative w-full overflow-hidden bg-[#171717] py-8 rounded'>
				{/* Fading edges */}
				<div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#171717] to-transparent z-10" />
				<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#171717] to-transparent z-10" />

				{/* Marquee track */}
				<div className="whitespace-nowrap">
					<div className="inline-flex gap-12 animate-marquee min-w-max">
						{/* Double the logos for seamless looping */}
						{sponsors.concat(sponsors).map((sponsor, index) => (
							<img
								key={index}
								src={sponsor.imgSrc}
								alt={sponsor.alt}
								className="h-8 w-auto inline-block opacity-80 hover:opacity-100 transition"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SponsorsCarousel;
