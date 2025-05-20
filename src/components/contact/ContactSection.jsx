import React, { useRef, useState } from 'react';
import { links } from '../../data';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
	const form = useRef();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleSubmit = (e) => {
		e.preventDefault();

		// Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual Email.js credentials
		emailjs
			.sendForm(
				'service_hzqkqj6',
				'template_uyhpfre',
				form.current,
				'_hE5FK0e73MmOnlBf'
			)
			.then(
				(result) => {
					console.log('Email sent:', result.text);
					setIsModalOpen(true); // Show success modal
					form.current.reset();
				},
				(error) => {
					console.log('Error:', error.text);
					alert('Failed to send message. Please try again.');
				}
			);

		// Optional: Reset the form after submission
		e.target.reset();
	};
	return (
		<section className=' text-[#F5E9DC] py-16'>
			<div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8'>
				{/* Contact Options */}
				<div className='lg:w-1/2 space-y-8'>
					<h2 className='text-2xl font-semibold uppercase'>Get in touch</h2>
					<p className='mb-6'>
						You can book a consultation, request for a brand audit, or get to
						know how we can work together. Also feel free to connect with me on
						my socials.
					</p>
					<div className='space-y-6'>
						<div className='flex items-start gap-4'>
							<span className='text-2xl'>
								<img
									className='w-[8rem]'
									src='/images/callicon.png'
									alt=''
								/>
							</span>
							<div>
								<h3 className='font-semibold'>Book a Free Consultation Call</h3>
								<p>
									Get started with a 30-minute discovery call where we’ll
									discuss your goals, challenges, and potential strategies to
									move your brand forward.{' '}
									<a
										href='#'
										className='text-primary underline'>
										Schedule Your Call
									</a>
								</p>
							</div>
						</div>
						<div className='flex items-start gap-4'>
							<span className='text-2xl'>
								<img
									className='w-[8rem]'
									src='/images/emailicon.png'
									alt=''
								/>
							</span>
							<div>
								<h3 className='font-semibold'>Email Me Directly</h3>
								<p>
									Prefer email? Send me a message at{' '}
									<a
										href='mailto:evaprecious@gmail.com'
										className='text-primary underline'>
										evaprecious@gmail.com
									</a>{' '}
									and I'll get back to you as soon as possible. Whether it's a
									quick question or a detailed inquiry, I'm here to help.
								</p>
							</div>
						</div>
						<div className='flex items-start gap-4'>
							<span className='text-2xl'>
								<img
									className='w-[7rem]'
									src='/images/personicon.png'
									alt=''
								/>
							</span>
							<div>
								<h3 className='font-semibold'>
									Follow and Connect on Social Media
								</h3>
								<p>
									Let's keep the conversation going! You can follow me on
									LinkedIn, Instagram, Twitter & YouTube for branding tips,
									tools, and updates.
								</p>
								<div className='flex space-x-4 mt-2'>
									{links.map((link, index) => {
										return (
											<a
												key={index}
												href={link.link}
												className='text-primary'>
												<img
													className='w-[2rem]'
													src={`/images/${link.icon}.png`}
													alt=''
												/>
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className='lg:w-1/2 bg-[#F5E9DC] text-black p-8 rounded-3xl'>
					<h3 className='text-xl font-semibold mb-4'>SEND A MESSAGE</h3>
					<form
						ref={form}
						onSubmit={handleSubmit}
						className='space-y-4'>
						<input
							type='email'
							name='user_email'
							placeholder='Email address'
							className='w-full p-3 rounded-md focus:outline-none'
							required
						/>
						<input
							type='tel'
							name='user_phone'
							placeholder='Phone Number'
							className='w-full p-3 rounded-md focus:outline-none'
							required
						/>
						<input
							type='text'
							name='user_name'
							placeholder='Full name'
							className='w-full p-3 rounded-md focus:outline-none'
							required
						/>
						<textarea
							name='message'
							placeholder='Message'
							className='w-full p-3 rounded-md focus:outline-none h-32'
							required></textarea>
						<button
							type='submit'
							className='bg-primary text-black py-2 px-4 rounded-lg w-full font-semibold'>
							Send Message
						</button>
					</form>
				</div>
			</div>

			{/* MODAL */}
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsModalOpen(false)} // Close modal on click outside
					>
						<motion.div
							className='bg-white p-6 rounded-lg shadow-lg max-w-sm text-center'
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
						>
							<h2 className='text-lg font-semibold'>Message Sent</h2>
							<p className='text-gray-600 mt-2'>
								Your message has been sent successfully!
							</p>
							<button
								className='mt-4 bg-primary px-4 py-2 rounded-md text-[#F5E9DC]'
								onClick={() => setIsModalOpen(false)}>
								Close
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ContactSection;
