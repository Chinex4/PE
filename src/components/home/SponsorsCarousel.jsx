// import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SponsorsCarousel = () => {
	const sponsors = [
		{ id: 1, imgSrc: '/images/foodhut.png', alt: 'Food Hut' },
		{ id: 2, imgSrc: '/images/elance.png', alt: 'Elance' },
		{ id: 3, imgSrc: '/images/matallo.png', alt: 'Matallo' },
		{ id: 4, imgSrc: '/images/G.png', alt: 'G' },
		{ id: 5, imgSrc: '/images/H.png', alt: 'H' },
		{ id: 6, imgSrc: '/images/EXQUISITE.png', alt: 'XQUISITE' },
		{ id: 7, imgSrc: '/images/R.png', alt: 'R' },
		{ id: 8, imgSrc: '/images/ROO.png', alt: 'ROO' },
		{ id: 9, imgSrc: '/images/smileyfoods.png', alt: 'SFOODS' },
		{ id: 10, imgSrc: '/images/BOOK.png', alt: 'BOOKS' },
	];

	return (
		<section className='bg-black text-center py-8 space-y-16'>
			<h2 className='text-white text-lg mb-4 uppercase'>
				Few Brands I Have Been Fortunate to Work With
                <span className='text-5xl text-primary'>.</span>
			</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={4}
				// navigation
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				loop={true}
				className='w-full max-w-4xl mx-auto'>
				{sponsors.map((sponsor) => (
					<SwiperSlide
						key={sponsor.id}
						className='flex justify-center items-center'>
						<img
							src={sponsor.imgSrc}
							alt={sponsor.alt}
							className='h-20'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default SponsorsCarousel;
