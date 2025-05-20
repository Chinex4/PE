const ResultsImpact = () => {
	return (
		<section className=' text-center py-16 px-4'>
			<h2 className='text-2xl font-semibold text-[#F5E9DC] mb-4 uppercase'>
				Results & Impact
				<span className='text-5xl text-primary'>.</span>
			</h2>
			<p className='text-sm text-[#F5E9DC] mb-8 max-w-xl mx-auto'>
				Our partnership with Xquisite has been linked to incredible results,
				like:
			</p>
			<div className='flex flex-col md:flex-row justify-center gap-12'>
				<div className='text-center'>
					<img
						src='/images/archicon.png'
						alt='Increased Engagement'
						className='mx-auto mb-2'
					/>
					<p className='text-lg font-semibold text-[#F5E9DC]'>
						Increased Engagement
					</p>
				</div>
				<div className='text-center'>
					<img
						src='/images/archicon.png'
						alt='Revenue Growth'
						className='mx-auto mb-2'
					/>
					<p className='text-lg font-semibold text-[#F5E9DC]'>Revenue Growth</p>
				</div>
				<div className='text-center'>
					<img
						src='/images/archicon.png'
						alt='Brand Recognition'
						className='mx-auto mb-2'
					/>
					<p className='text-lg font-semibold text-[#F5E9DC]'>
						Brand Recognition
					</p>
				</div>
			</div>
		</section>
	);
};

export default ResultsImpact

