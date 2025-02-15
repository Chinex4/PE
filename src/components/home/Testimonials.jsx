import React from 'react';
import { testimonials } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
	return (
		<div className='bg-black text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center uppercase text-2xl font-bold mb-12 leading-[3px]'>
				CLIENTs' REVIEWS
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				// pagination={{ clickable: true }}
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
						slidesPerView: 2, // 4 slides for desktop devices (width >= 1024px)
					},
				}}
				className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-6'>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide
						key={index}
						className='bg-gray-100 h-[330px] flex flex-col justify-between text-smileyblue p-6 rounded-lg shadow-lg'>
						<p className='mb-4 italic text-[12px] md:text-[16px]'>{testimonial.quote}</p>
						<div className='flex gap-3 items-center'>
							<div className=''>
								{testimonial.pic ? (
									<img
										className='size-10 md:size-16'
										src={testimonial.pic}
										alt=''
									/>
								) : (
									<img
										className='size-8 md:size-10'
										src='/images/man.png'
										alt=''
									/>
								)}
							</div>

							<div>
								<p className='font-bold text-xs md:text-[16px]'>{testimonial.author}</p>
								<p className='text-sm text-smileyblue flex items-center space-x-1'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='size-3'>
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

									<span className='text-xs md:text-sm'>{testimonial.location}</span>
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonials;
