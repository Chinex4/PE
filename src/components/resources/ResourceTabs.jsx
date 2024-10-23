import React, { useState } from 'react';
import { resources, tabs } from '../../data';

const ResourceTabs = () => {
	const [activeTab, setActiveTab] = useState('checklists');

	

	return (
		<div className='py-6'>
			{/* Tab Navigation */}
			<div className='bg-[#F5E9DC26] pt-3 flex space-x-4 border-b border-gray-700 mb-6 overflow-x-scroll'>
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`py-2 px-4 text-sm font-medium ${
							activeTab === tab.id
								? 'text-primary border-b-2 border-primary'
								: 'text-gray-300'
						}`}>
						{tab.label}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{resources[activeTab].map((item, index) => (
					<div
						key={index}
						className='bg-white rounded-lg shadow-lg overflow-hidden'>
						<img
							src={item.image}
							alt={item.title}
							className='w-full h-40 object-cover'
						/>
						<div className='p-4'>
							<h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
							<p className='text-gray-600 mb-4'>Buy for: {item.price}</p>
							<button className='bg-primary text-white px-4 py-2 rounded-lg'>
								Buy Now
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResourceTabs;
