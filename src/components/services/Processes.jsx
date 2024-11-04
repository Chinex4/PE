import React from 'react';
import { processToWinSteps } from '../../data';

const Processes = () => {
	return (
		<div class='bg-black text-[#F5E9DC] py-16 px-4'>
			{/* <!-- Title --> */}
			<h2 class='text-center text-2xl font-bold mb-12'>
				The Process To Helping You Win<span class='text-primary'>•</span>
			</h2>

			{/* <!-- Process Steps Grid --> */}
			<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* <!-- Steps --> */}
				{processToWinSteps.map((process) => {
					return (
						<div class='border border-gray-500 p-6 rounded-lg'>
							<div class='text-2xl w-12 h-12 grid place-items-center rounded-full bg-[#F5E9DC33] border border-white font-semibold text-[#F5E9DC] mb-8'>
								<span>{process.step}</span>
							</div>
							<h3 class='text-lg font-semibold mb-2'>{process.title}</h3>
							<p class='text-[#F5E9DC]'>
								{process.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Processes;
