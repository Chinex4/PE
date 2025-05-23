import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { resources, tabs } from '../../data';

const ResourceTabs = () => {
	const [activeTab, setActiveTab] = useState('latest');
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
			await emailjs.send(
				serviceID,
				templateID,
				templateParams,
				publicKey
			);

			setLoading(false);
			closeForm();
			window.location.href = selectedResource.link; // Redirect to Selar link
		} catch (error) {
			console.error('EmailJS Error:', error);
			setLoading(false);
		}
	};

	// Open modal form
	const handleGetNowClick = (resource) => {
		setSelectedResource(resource);
		setShowForm(true);
	};

	return (
		<div className='py-6'>
			{/* Tab Navigation */}
			<div className='bg-[#F5E9DC26] pt-3 flex space-x-4 border-b border-gray-700 mb-6 overflow-x-scroll'>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`w-[200px] px-4 py-2 text-xs font-medium whitespace-nowrap ${
							activeTab === tab.id
								? 'text-primary border-b-2 border-primary'
								: 'text-gray-300'
						}`}>
						{tab.label}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='mt-8 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5'>
				{resources[activeTab] && resources[activeTab].length > 0 ? (
					resources[activeTab].map((item, index) => (
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
					))
				) : (
					<div className='w-full text-center text-[#F5E9DC] text-xl col-span-full'>
						No resources available yet for this category.
					</div>
				)}
			</div>

			{/* Animated Form Modal */}
			{showForm && (
				<div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
					<div className='bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[400px] animate-fadeIn'>
						<h2 className='text-lg font-bold mb-4 text-center'>
							Get Your Resource
						</h2>
						<form
							onSubmit={handleSubmit}
							className='space-y-4'>
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
									{loading ? "Redirecting..." : "Get Resource"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default ResourceTabs;
