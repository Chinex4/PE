import React, { useState } from 'react';
import { resources } from '../../data';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Resources = () => {
	const [showForm, setShowForm] = useState(false);
	const [selectedResource, setSelectedResource] = useState(null);
	const [formData, setFormData] = useState({ name: '', email: '' });
	const [errors, setErrors] = useState({});

	const [loading, setLoading] = useState(false);

	const openForm = (resource) => {
		setSelectedResource(resource);
		setShowForm(true);
	};

	const closeForm = () => {
		setShowForm(false);
		setFormData({ name: '', email: '' });
		setErrors({});
	};

	// Handle form input change
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Validate form
	const validateForm = () => {
		let newErrors = {};
		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Enter a valid email';
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		// EmailJS config

		const serviceID = 'service_hzqkqj6';
		const templateID = 'template_r5nhlxa';
		const publicKey = '_hE5FK0e73MmOnlBf';

		const templateParams = {
			name: formData.name,
			email: formData.email,
			resource: selectedResource.title,
		};

		setLoading(true);
		try {
			await emailjs.send(serviceID, templateID, templateParams, publicKey);

			setLoading(false);
			closeForm();
			window.location.href = selectedResource.link; // Redirect to Selar link
		} catch (error) {
			console.error('EmailJS Error:', error);
			setLoading(false);
		}
	};
	return (
		<div className='bg-black text-[#F5E9DC] py-16'>
			<h2 className='text-center uppercase text-2xl font-bold mb-12 leading-[1.1]'>
				Build and Grow your brand easily with these resources
				<span className='text-5xl text-primary'>.</span>
			</h2>

			<div className='mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5'>
				{resources['latest'].map((item, index) => (
					<div
						key={index}
						className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col w-full max-w-[250px] md:max-w-[350px] mx-auto'>
						<Link to={`/book/${encodeURIComponent(item.title)}`}>
							<img
								src={item.image}
								alt={item.title}
								className='w-full h-[180px] md:h-[350px] object-cover cursor-pointer'
							/>
						</Link>
						<div className='p-3 flex flex-col flex-grow justify-between'>
							<div>
								<h3 className='font-semibold text-xs md:text-lg mb-1 text-black'>
									{item.title}
								</h3>
								<p className='text-gray-600 mb-3 text-xs md:text-base'>
									Available for: {item.price}
								</p>
							</div>
							<button
								onClick={() => openForm(item)}
								className='inline-block w-full text-center bg-primary text-[#F5E9DC] px-3 py-2 rounded-md text-xs md:text-base mt-auto'>
								Get Now
							</button>
						</div>
					</div>
				))}
				{/* Animated Form Modal */}
				{showForm && (
					<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
						<div className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px] animate-fadeIn'>
							<h2 className='text-lg text-primary font-bold mb-4 text-center'>
								Get Your Resource
							</h2>
							<form
								onSubmit={handleSubmit}
								className='space-y-4 text-black'>
								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Name
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
										placeholder='Enter your name'
									/>
									{errors.name && (
										<p className='text-red-500 text-xs'>{errors.name}</p>
									)}
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Email
									</label>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
										placeholder='Enter your email'
									/>
									{errors.email && (
										<p className='text-red-500 text-xs'>{errors.email}</p>
									)}
								</div>
								<div className='flex justify-between items-center'>
									<button
										onClick={closeForm}
										className='mt-3 text-gray-500 hover:text-gray-700 block text-center'>
										Cancel
									</button>
									<button
										type='submit'
										disabled={loading}
										className='bg-primary text-[#F5E9DC] py-2 px-4 rounded-md font-medium'>
										{loading ? 'Redirecting...' : 'Get Resource'}
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>

			<div className='grid place-items-center mt-8'>
				<Link
					to={'/resources'}
					className='btn rounded-md bg-primary hover:bg-primary/80 mb-8 border-none text-lg text-black px-8'>
					View More Resources
				</Link>
			</div>
		</div>
	);
};

export default Resources;
