import React from 'react';
import { testimonials_2 } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center uppercase leading-[3px] text-2xl font-bold mb-12'>
				Clients' Reviews
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				loop={true}
				breakpoints={{
					640: {
						slidesPerView: 1, // 1 slide for mobile devices (width < 640px)
					},
					768: {
						slidesPerView: 2, // 2 slides for tablet devices (width >= 768px)
					},
					1024: {
						slidesPerView: 3, // 4 slides for desktop devices (width >= 1024px)
					},
				}}
				className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-6'>
				{testimonials_2.map((testimonial, index) => (
					<SwiperSlide
						key={index}
						className='bg-[#F5E9DC] text-smileyblue p-6 rounded-lg shadow-lg max-w-sm'>
						<p className='mb-4 italic'>{testimonial.quote}</p>
						<p className='mt-20 font-bold'>{testimonial.author}</p>
						<p className='text-sm text-smileyblue flex items-center space-x-2'>
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
									d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
								/>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
								/>
							</svg>

							<span>{testimonial.location}</span>
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
