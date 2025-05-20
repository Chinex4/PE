import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { PaystackButton } from 'react-paystack';
import toast, { Toaster } from 'react-hot-toast';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const PUBLIC_KEY = 'pk_test_974a54216f3c864c639064740e5105a6cb38c5c0';

const plans = [
	{
		name: 'Free',
		price: '₦0',
		benefits: ['Limited access', 'Community Forum', 'Email Support'],
		tier: 'free',
	},
	{
		name: 'Pro',
		price: '₦2,000',
		benefits: ['All Free Features', 'Premium Courses', '1-on-1 Mentorship'],
		tier: 'pro',
	},
	{
		name: 'Gold',
		price: '₦5,000',
		benefits: [
			'All Pro Features',
			'Case Study Feature',
			'Monthly Strategy Calls',
		],
		tier: 'gold',
	},
];

const ChoosePlan = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedPlan, setSelectedPlan] = useState(null);
	const [email, setEmail] = useState('');

	const handleSubscribe = (plan) => {
		setSelectedPlan(plan);
		setIsOpen(true);
	};

	const handleFreeSubmit = async () => {
		if (!email) return toast.error('Please enter a valid email.');

		try {
			await addDoc(collection(db, 'subscriptions'), {
				email,
				plan: selectedPlan.name,
				date: new Date(),
			});

			toast.success('Subscribed successfully!');
			setIsOpen(false);
			setEmail('');
		} catch (err) {
			toast.error('Something went wrong.');
			console.error(err);
		}
	};

	const paystackProps = {
		email,
		amount: selectedPlan?.tier === 'pro' ? 200000 : 500000, // Paystack uses kobo
		publicKey: PUBLIC_KEY,
		text: 'Proceed to Paystack',
		onSuccess: async (ref) => {
			try {
				await addDoc(collection(db, 'subscriptions'), {
					email,
					plan: selectedPlan.name,
					reference: ref.reference,
					date: new Date(),
				});

				toast.success('Payment Successful!');
				setIsOpen(false);
				setEmail('');
			} catch (err) {
				toast.error('Error storing data.');
				console.error(err);
			}
		},
		onClose: () => toast('Payment popup closed.'),
	};

	return (
		<div className='bg-black text-[#F5E9DC] py-16 px-6 md:px-16'>
			<Toaster />
			<h2 className='text-center text-3xl font-bold mb-12'>Choose Your Plan</h2>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{plans.map((plan, index) => (
					<div
						key={index}
						className={`rounded-xl p-6 border border-gray-700 flex flex-col items-center transition-all duration-300
              ${
								plan.tier === 'pro'
									? 'lg:scale-105 bg-zinc-900 shadow-xl'
									: 'bg-zinc-800'
							}
            `}>
						<h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
						<p className='text-2xl font-bold mb-4'>{plan.price}</p>
						<ul className='mb-6 space-y-2 text-sm'>
							{plan.benefits.map((b, i) => (
								<li
									key={i}
									className='flex items-center gap-2'>
									✅ {b}
								</li>
							))}
						</ul>
						<button
							onClick={() => handleSubscribe(plan)}
							className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-[#F5E9DC]'>
							Subscribe
						</button>
					</div>
				))}
			</div>

			{/* Modal */}
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='relative z-50'>
				<div className='fixed inset-0 bg-black/50' />
				<div className='fixed inset-0 flex items-center justify-center p-4'>
					<Dialog.Panel className='bg-white text-black w-full max-w-md rounded-xl p-6'>
						<Dialog.Title className='text-lg font-bold mb-4'>
							{selectedPlan?.name} Plan Subscription
						</Dialog.Title>
						<input
							type='email'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full border p-2 rounded mb-4'
						/>

						{selectedPlan?.tier === 'free' ? (
							<button
								onClick={handleFreeSubmit}
								className='bg-green-600 hover:bg-green-700 text-[#F5E9DC] px-4 py-2 rounded'>
								Submit
							</button>
						) : (
							<PaystackButton
								{...paystackProps}
								className='bg-green-600 hover:bg-green-700 text-[#F5E9DC] px-4 py-2 rounded'
							/>
						)}
					</Dialog.Panel>
				</div>
			</Dialog>
		</div>
	);
};

export default ChoosePlan;
