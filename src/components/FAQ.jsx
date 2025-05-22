import { Disclosure } from '@headlessui/react';
import { faqs } from '../data';
import { Link } from 'react-router-dom';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import MyButton from './ui/Button';

function FAQ() {
	return (
		<section className='text-[#F5E9DC] py-16 px-4'>
			<div className='flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto'>
				{/* Left Section */}
				<div className='text-center lg:text-left flex-1 basis-[50%]'>
					<h2 className='text-2xl font-bold mb-8 uppercase'>
						Got Any Questions? I have got the answers you need!
					</h2>
					<p className='mt-2 text-navGray'>
						Do you have any questions about building your brand or ready to get
						started? Dive into our FAQs for quick answers, or reach out
						directly. I’m just a message away!
					</p>
					<div className='mt-6'>
						<MyButton
							to='/contact'
							label='Send A message &rarr;'
						/>
					</div>
				</div>

				{/* Right Section */}
				<div className='flex-1 basis-[50%] space-y-4 w-full'>
					{faqs.map((faq, index) => (
						<Disclosure key={index}>
							{({ open }) => (
								<div className='border-b border-[#F5E9DC] pb-2'>
									<Disclosure.Button className='flex justify-between items-center w-full py-4 text-left text-lg'>
										<span className='flex-1'>{faq.question}</span>
										<ChevronUpIcon
											className={`w-5 h-5 min-w-[20px] min-h-[20px] text-[#F5E9DC] transition-transform ${
												open ? 'rotate-180' : 'rotate-0'
											}`}
										/>
									</Disclosure.Button>
									<Disclosure.Panel className='text-navGray pb-4'>
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
