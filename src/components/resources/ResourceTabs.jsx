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
						}`} >
						{tab.label}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{resources[activeTab].map((item, index) => (
					<div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
						<Link to={`/book/${encodeURIComponent(item.title)}`}>
							<img
								src={item.image}
								alt={item.title}
								className='w-[500px] h-[400px] object-cover cursor-pointer'
							/>
						</Link>
						<div className='p-4'>
							<h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
							<p className='text-gray-600 mb-4'>Available for: {item.price}</p>
							<a href={item.link} target='_blank' rel='noopener noreferrer' className='inline-block w-full text-center bg-primary text-[#F5E9DC] px-4 py-2 rounded-lg'>
								Get Now
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ResourceTabs;
