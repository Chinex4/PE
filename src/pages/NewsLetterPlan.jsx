import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';


const NewsletterPlan = () => {
	const [searchParams] = useSearchParams();
	const plan = searchParams.get('plan');

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name || !email) {
			toast.error('Please fill in all fields');
			return;
		}

		// EmailJS template params
		const templateParams = {
			name,
			email,
			number,
			plan,
		};

		emailjs
			.send(
				'service_zcid34g', // e.g. service_xxxxxx
				'template_q849keb', // e.g. template_yyyyyy
				templateParams,
				'_1zDbTqyA0_Su2Xpg' // e.g. 9VxRTHJWy6s...
			)
			.then(() => {
				toast.success(
					'Thank you! Your details have been recorded and email sent.'
				);
				setName('');
				setEmail('');
				setNumber('');
			})
			.catch((error) => {
				console.error(error);
				toast.error('Something went wrong. Please try again.');
			});
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
					<input
						type='text'
						placeholder='Whatsapp Number (Optional)'
						value={number}
						onChange={(e) => setNumber(e.target.value)}
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
