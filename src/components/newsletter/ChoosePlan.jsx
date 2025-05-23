import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { db } from '../../config/firebase';
import { collection, addDoc } from 'firebase/firestore';

const plans = [
	{
		name: 'Monthly',
		price: 3500,
		description:
			'Stay flexible with month-to-month access to all premium content, insights, and tools.',
		tier: 'monthly',
		link: 'https://selar.com/63p800',
	},
	{
		name: '3 Months',
		price: 9000,
		description:
			'Commit for half a year and save. Includes all premium content + bonus resources.',
		tier: '3months',
		link: 'https://selar.com/40mz35',
	},
	{
		name: '1 year',
		price: 37000,
		description:
			'Best value for deep thinkers. Full access, all updates, and exclusive yearly-only perks.',
		tier: '1year',
		link: 'https://selar.com/your-1year-link', // Replace with the correct Selar link
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

	return (
		<section
			id='plans'
			className='text-[#F5E9DC] py-16 px-6 md:px-16'>
			<Toaster />
			<h2 className='text-center text-3xl font-bold mb-12'>Choose Your Plan</h2>

			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{plans.map((plan, index) => (
					<div
						key={index}
						className='rounded-xl p-6 border border-gray-700 flex flex-col items-center transition-all duration-300 bg-zinc-800'>
						<h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
						<p className='text-2xl font-bold mb-4'>
							₦{plan.price.toLocaleString()}
						</p>
						<p className='text-sm text-center mb-6'>{plan.description}</p>
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

						<a
							href={selectedPlan?.link}
							target='_blank'
							rel='noopener noreferrer'
							onClick={async () => {
								if (!email) return toast.error('Please enter a valid email.');
								try {
									await addDoc(collection(db, 'subscriptions'), {
										email,
										plan: selectedPlan.name,
										date: new Date(),
									});
									toast.success('Redirecting to payment...');
								} catch (err) {
									toast.error('Error saving subscription info.');
									console.error(err);
								}
							}}
							className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded block text-center'>
							Proceed to Payment
						</a>
					</Dialog.Panel>
				</div>
			</Dialog>
		</section>
	);
};

export default ChoosePlan;
