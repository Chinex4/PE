import React from 'react';
import { links } from '../../data';

const ContactSection = () => {
	return (
		<section className='bg-black text-[#F5E9DC] py-16'>
			<div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8'>
				{/* Contact Options */}
				<div className='lg:w-1/2 space-y-8'>
					<h2 className='text-2xl font-semibold'>Get in touch</h2>
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
												<img className='w-[2rem]' src={`/images/${link.icon}.png`} alt="" />
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
					<form className='space-y-4'>
						<input
							type='email'
							placeholder='Email address'
							className='w-full p-3 rounded-md focus:outline-none'
						/>
						<input
							type='tel'
							placeholder='Phone Number'
							className='w-full p-3 rounded-md focus:outline-none'
						/>
						<input
							type='text'
							placeholder='Full name'
							className='w-full p-3 rounded-md focus:outline-none'
						/>
						<textarea
							placeholder='Message'
							className='w-full p-3 rounded-md focus:outline-none h-32'></textarea>
						<button
							type='submit'
							className='bg-primary text-black py-2 px-4 rounded-lg w-full font-semibold'>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
