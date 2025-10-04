import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
const RequestForm = () => {
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
		<div
			id='resourceform'
			className=' text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center text-2xl font-bold mb-12 font-dela leading-[3px]'>
				REQUEST FOR A RESOURCE NOT FOUND
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<form
				ref={form}
				onSubmit={handleSubmit}
				className='max-w-md mx-auto space-y-6'>
				<input
					type='user_email'
					name='email'
					placeholder='Email address'
					required
					className='w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary'
				/>
				<input
					type='text'
					name='user_name'
					placeholder='Full name'
					required
					className='w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary'
				/>
				<textarea
					name='message'
					placeholder='Message'
					required
					rows='5'
					className='w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary'></textarea>
				<button
					type='submit'
					className='w-full py-3 rounded-md bg-primary text-black font-bold hover:bg-primary/80 transition-colors'>
					Send Request
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
		</div>
	);
};

export default RequestForm;
