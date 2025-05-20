import React, { useRef, useState } from 'react';
// import { links } from '../../data';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const ReachOut = () => {
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
		<div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] lg:mt-0'>
		    <div className='bg-black py-16 px-4'>
    			<h2 className='text-center text-[24px] text-[#F5E9DC] uppercase leading-[1.5] font-bold mb-12'>
    				Fill this form and I will reach out to you shortly to get started
    				<span className='text-[48px] text-primary'>.</span>
    			</h2>
    			<form
    				ref={form}
    				onSubmit={handleSubmit}
    				className='space-y-4 max-w-md mx-auto'>
    				<input
    					type='email'
    					name='user_email'
    					placeholder='Email address'
    					className='w-full p-3 rounded-md text-black focus:outline-none'
    					required
    				/>
    				<input
    					type='tel'
    					name='user_phone'
    					placeholder='Phone Number'
    					className='w-full p-3 rounded-md text-black focus:outline-none'
    					required
    				/>
    				<input
    					type='text'
    					name='brand_handle'
    					placeholder='Brand Handle'
    					className='w-full p-3 rounded-md text-black focus:outline-none'
    					required
    				/>
    				<input
    					type='text'
    					name='user_name'
    					placeholder='Full Name'
    					className='w-full p-3 rounded-md text-black focus:outline-none'
    					required
    				/>
    				<textarea
    					name='message'
    					placeholder='Tell me a little about your brand and the problem you are facing and I will reach out to you in no time.'
    					className='w-full p-3 text-black rounded-md focus:outline-none h-32'
    					required></textarea>
    				<button
    					type='submit'
    					className='bg-primary text-black py-2 px-4 rounded-lg w-full font-semibold'>
    					Send Message
    				</button>
    			</form>
    
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
    							<h2 className='text-lg text-black font-semibold'>Message Sent</h2>
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
    		</div>

		</div>
	);
};

export default ReachOut;
