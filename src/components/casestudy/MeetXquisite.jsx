import React from 'react';

const MeetXquisite = () => {
	return (
		<section className='bg-black text-[#F5E9DC]'>
			<div className='max-w-4xl mx-auto text-center'>
				<div className='lg:w-[30rem] mx-auto'>
				    <h2 className='text-2xl font-semibold mb-4'>Meet Xquisite</h2>
    				<p className='mb-8 opacity-80'>
    					A food brand located in the United States with the aim of helping
    					Africans in the UK access their local dishes easily with great
    					quality.
    				</p>
				</div>
				<div className='relative mx-auto w-full lg:w-2/3'>
					<img
						src='/images/shirt.png'
						alt='Two T-shirts with text "Eat Well Live Well"'
						className='w-full h-auto rounded-md shadow-lg'
					/>
				</div>
			</div>
		</section>
	);
};

export default MeetXquisite;
