import React, { useState } from 'react';
import { testimonials } from '../../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Dialog } from '@headlessui/react';

const Testimonials = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedTestimonial, setSelectedTestimonial] = useState(null);

	const truncate = (text, length = 120) => {
		if (!text) return '';
		if (text.length <= length) return text;
		return text.slice(0, text.lastIndexOf(' ', length)) + '...';
	};

	const openModal = (testimonial) => {
		setSelectedTestimonial(testimonial);
		setIsOpen(true);
	};

	return (
		<div className='text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center uppercase text-2xl font-bold mb-12 font-dela leading-[3px]'>
				CLIENTs' REVIEWS
				<span className='text-5xl text-primary'>.</span>
			</h2>

			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				spaceBetween={30}
				autoplay={{ delay: 3000 }}
				loop={true}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className='flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-6'>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide
						key={index}
						onClick={() => openModal(testimonial)}
						className='cursor-pointer bg-[#1C1C1C] text-[#F5E9DC] rounded-lg p-6 shadow-md h-[270px] flex flex-col justify-between hover:shadow-lg transition'>
						<div className='flex items-center space-x-4 mb-4'>
							 <img loading="lazy"
								className='w-10 h-10 md:w-12 md:h-12 rounded-full object-cover'
								src={testimonial.pic || '/images/man.png'}
								alt={testimonial.author}
							/>
							<div>
								<p className='font-semibold text-sm md:text-base'>
									{testimonial.author}
								</p>
								<p className='text-gray-400 text-xs md:text-sm'>
									{testimonial.title}
								</p>
							</div>
						</div>

						{/* Star Rating */}
						<div className='flex text-orange-400 mb-3'>
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-4 h-4 mr-1'>
									<path d='M12 .587l3.668 7.568 8.332 1.151-6.064 5.804 1.48 8.299L12 18.896 4.584 23.409l1.48-8.299L0 9.306l8.332-1.151z' />
								</svg>
							))}
						</div>

						<p className='text-sm md:text-base italic text-[#F5E9DC]'>
							{truncate(testimonial.quote)}
						</p>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Modal */}
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='fixed z-50 inset-0 overflow-y-auto'>
				<div className='flex items-center justify-center min-h-screen px-4'>
					<div
						className='fixed inset-0 bg-black opacity-50'
						aria-hidden='true'
					/>

					<div className='bg-[#1C1C1C] text-[#F5E9DC] p-6 rounded-lg z-50 max-w-md w-full relative shadow-lg'>
						<Dialog.Title className='text-lg font-bold mb-2'>
							{selectedTestimonial?.author}
						</Dialog.Title>
						<p className='text-sm text-gray-400 mb-4'>
							{selectedTestimonial?.title}
						</p>
						<p className='text-base text-[#F5E9DC] italic'>
							{selectedTestimonial?.quote}
						</p>

						<button
							onClick={() => setIsOpen(false)}
							className='mt-6 text-sm text-primary hover:underline'>
							Close
						</button>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Testimonials;
