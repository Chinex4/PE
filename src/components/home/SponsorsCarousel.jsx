// import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { sponsors } from '../../data';

const SponsorsCarousel = () => {
	

	return (
		<section className='bg-black text-white py-16 px-4'>
			<h2 className='text-center text-2xl leading-[2px] font-bold mb-12'>
				Few Brands I Have Been Fortunate to Work With
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<div className='bg-[#D9D9D90A] mx-auto py-8 rounded'>
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					spaceBetween={30}
					// navigation
					pagination={{ clickable: true }}
					autoplay={{ delay: 3000 }}
					loop={true}
					breakpoints={{
						640: {
							slidesPerView: 1, // 1 slide for mobile devices (width < 640px)
						},
						768: {
							slidesPerView: 3, // 2 slides for tablet devices (width >= 768px)
						},
						1024: {
							slidesPerView: 4, // 4 slides for desktop devices (width >= 1024px)
						},
					}}
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
			</div>
		</section>
	);
};

export default SponsorsCarousel;
