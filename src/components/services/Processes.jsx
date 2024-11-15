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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{/* Render Approach Steps */}
				{processToWinSteps.map((step) => (
					<div key={step.step} className="border border-gray-500 p-6 rounded-lg">
						<div className="text-2xl w-12 h-12 grid place-items-center rounded-full bg-[#F5E9DC33] border border-white font-semibold text-[#F5E9DC] mb-8">
							<span>{step.step}</span>
						</div>
						<h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
						<p className="text-[#F5E9DC]">{step.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Processes;
