import { Disclosure } from '@headlessui/react';
import { faqs } from '../data';
import { Link } from 'react-router-dom';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

function FAQ() {
	return (
		<section className='text-[#F5E9DC] py-16 px-4'>
			<div className='flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto'>
				{/* Left Section */}
				<div className='text-center lg:text-left flex-1 basis-[50%]'>
					<h2 className='text-4xl font-bold mb-8 uppercase'>
						Got Any Questions? I have got the answers you need!
					</h2>
					<p className='mt-2'>
						Do you have any questions about building your brand or ready to get
						started? Dive into our FAQs for quick answers, or reach out
						directly. I’m just a message away!
					</p>
					<Link
						to='/contact'
						className='mt-4 inline-block text-primary hover:text-primary/80 transition'>
						Send A Message &rarr;
					</Link>
				</div>

				{/* Right Section */}
				<div className='flex-1 basis-[50%] space-y-4 w-full'>
					{faqs.map((faq, index) => (
						<Disclosure key={index}>
							{({ open }) => (
								<div className='border-b border-[#F5E9DC] pb-2'>
									<Disclosure.Button className='flex justify-between items-center w-full py-4 text-left text-lg'>
										<span>{faq.question}</span>
										<ChevronUpIcon
											className={`w-5 h-5 text-[#F5E9DC] transition-transform ${
												open ? 'rotate-180' : 'rotate-0'
											}`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='text-[#F5E9DC]/80 pb-4'>
										{faq.answer}
									</Disclosure.Panel>
								</div>
							)}
						</Disclosure>
					))}
				</div>
			</div>
		</section>
	);
}

export default FAQ;
