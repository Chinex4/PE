import React, { useState } from 'react';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		fullName: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Implement form submission logic here
		console.log(formData);
	};

	return (
		<div className='bg-black text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center text-[24px] leading-[1.5] font-bold mb-12'>
				SEND ME A DIRECT MESSAGE TODAY TO CONNECT
				<span className='text-[48px] text-primary'>.</span>
			</h2>
			<form
				onSubmit={handleSubmit}
				className='max-w-md mx-auto space-y-6'>
				<input
					type='email'
					name='email'
					placeholder='Email address'
					value={formData.email}
					onChange={handleChange}
					required
					className='w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary'
				/>
				<input
					type='text'
					name='fullName'
					placeholder='Full name'
					value={formData.fullName}
					onChange={handleChange}
					required
					className='w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary'
				/>
				<textarea
					name='message'
					placeholder='Message'
					value={formData.message}
					onChange={handleChange}
					required
					rows='5'
					className='w-full p-3 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary'></textarea>
				<button
					type='submit'
					className='w-full py-3 rounded-md bg-primary text-black font-bold hover:bg-primary/80 transition-colors'>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
