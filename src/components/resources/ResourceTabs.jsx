import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resources, tabs } from '../../data';

const ResourceTabs = () => {
	const [activeTab, setActiveTab] = useState('latest');

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
								<a
									href={item.link}
									rel='noopener noreferrer'
									className='inline-block w-full text-center bg-primary text-[#F5E9DC] px-3 py-2 rounded-md text-xs md:text-base mt-auto'>
									Get Now
								</a>
							</div>
						</div>
					))
				) : (
					<div className='w-full text-center text-white text-xl col-span-full'>
						No resources available yet for this category.
					</div>
				)}
			</div>
		</div>
	);
};

export default ResourceTabs;
