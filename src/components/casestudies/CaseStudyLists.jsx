import React, { useState } from 'react';
import { caseStudies } from '../../data';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CaseStudies = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedCase, setSelectedCase] = useState(null);

	const handleViewCaseStudy = (caseStudy) => {
		setSelectedCase(caseStudy);
		setShowModal(true);
	};
	return (
		<section className=' text-[#F5E9DC] py-16 px-4'>
			<h2 className='text-center uppercase text-2xl font-bold mb-12 font-dela'>
				View Most Of Our Case Studies<span className='text-primary'>.</span>
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{caseStudies.map((caseStudy) => (
					<motion.div
						key={caseStudy.id}
						className='bg-[#121212] border border-gray-700 rounded-lg p-6 shadow-lg'
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 200, damping: 10 }}>
						<div className=' bg-white flex items-center justify-center rounded-lg'>
							 <img loading="lazy"
								src={caseStudy.image}
								alt={caseStudy.title}
								className=''
							/>
						</div>
						<div className='flex flex-col justify-between'>
							<div>
								<h3 className='text-[18px] font-bold mt-4'>
									{caseStudy.title}
								</h3>
								<p className='text-gray-400 text-sm mt-2'>
									{caseStudy.description}
								</p>
							</div>
							{caseStudy.link ? (
								<Link
									to={caseStudy.link}
									className='text-center mt-4 w-full bg-primary text-[#F5E9DC] font-bold py-2 rounded-lg hover:bg-primary/80 transition'>
									View Case Study
								</Link>
							) : (
								<button
									onClick={() => handleViewCaseStudy(caseStudy)}
									className='text-center mt-4 w-full bg-primary text-[#F5E9DC] font-bold py-2 rounded-lg hover:bg-primary/80 transition'>
									View Case Study
								</button>
							)}
						</div>
					</motion.div>
				))}
			</div>

			{/* Modal */}

			{/* Animated Modal */}
			<AnimatePresence>
				{showModal && (
					<motion.div
						className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setShowModal(false)}>
						<motion.div
							className='bg-white text-black p-6 rounded-lg shadow-lg max-w-sm w-full'
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
						>
							<h3 className='text-xl font-bold'>Page Not Ready Yet</h3>
							<p className='mt-2 text-gray-600'>
								The case study for <strong>{selectedCase?.title}</strong> will
								be available soon. Please check back later.
							</p>
							<button
								onClick={() => setShowModal(false)}
								className='mt-4 w-full bg-primary text-[#F5E9DC] font-bold py-2 rounded-lg hover:bg-primary/80 transition'>
								Close
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default CaseStudies;
