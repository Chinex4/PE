import { useState } from 'react';
import { faqs } from '../data';
import { Link } from 'react-router-dom';


function FAQ() {
	// State to track which FAQ is open
	const [openIndex, setOpenIndex] = useState(null);

	// Toggle function for opening and closing answers
	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className='bg-black text-[#F5E9DC] py-16 px-4'>
			<div className='flex flex-col lg:flex-row items-start md:items-center gap-12 max-w-6xl mx-auto'>
				{/* Left Section */}
				<div className='text-center lg:text-left mb-8 md:mb-0 flex-1 basis-[50%]'>
					<h2 className='text-4xl font-bold mb-8'>
						Got Any Questions? I have got the answers you need!
					</h2>
					<p className='mt-2'>
						Do you have any questions about building your brand or ready to get
						started? Dive into our FAQs for quick answers, or reach out
						directly. I’m just a message away to help your brand grow. Let’s
						chat about how we can make it happen!
					</p>
					<Link
						href='/contact'
						className='mt-4 inline-block text-primary hover:text-primary/80 transition'>
						Send A Message &rarr;
					</Link>
				</div>

				{/* Right Section */}
				<div className='space-y-4 flex-1 basis-[50%]'>
					{faqs.map((faq, index) => (
						<div
							key={index}
							className='border-b border-[#F5E9DC]'>
							<button
								onClick={() => toggleFAQ(index)}
								className='w-full text-left py-4 flex justify-between items-center text-lg'>
								<span>{faq.question}</span>
								<span className='text-[#F5E9DC]'>
									{openIndex === index ? '−' : '+'}
								</span>
							</button>
							{openIndex === index && (
								<div className='pb-4 text-[#F5E9DC]/80'>{faq.answer}</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQ;
