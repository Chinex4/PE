// pages/newsletter/plan.jsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const NewsletterPlan = () => {
	const [searchParams] = useSearchParams();
	const plan = searchParams.get('plan');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email) {
			toast.error('Please fill in all fields');
			return;
		}

		// Example: Log or send data to backend
		console.log({ name, email, plan });

		toast.success('Thank you! Your details have been recorded.');
		setName('');
		setEmail('');
	};

	return (
		<section className='min-h-screen bg-[#171717] text-white px-6 py-16 flex items-center justify-center'>
			<Toaster />
			<div className='w-full max-w-lg bg-zinc-900 p-8 rounded-xl shadow-lg'>
				<h2 className='text-3xl font-bold text-primary mb-6 text-center'>
					Complete Your Subscription
				</h2>
				<p className='text-center mb-6 text-gray-400'>
					{plan
						? `You've successfully subscribed to the ${plan} plan.`
						: 'Plan not identified.'}
				</p>

				<form
					onSubmit={handleSubmit}
					className='space-y-4'>
					<input
						type='text'
						placeholder='Your full name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						className='w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400'
					/>
					<input
						type='email'
						placeholder='Your email address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white placeholder-gray-400'
					/>

					<button
						type='submit'
						className='w-full bg-primary hover:opacity-90 text-white font-semibold py-3 rounded transition-all duration-200'>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default NewsletterPlan;
