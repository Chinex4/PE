import React from 'react';
import { useParams } from 'react-router-dom';
import { resources } from '../data';
import FAQ from '../components/FAQ';
import Testimonials from '../components/home/Testimonials';

const BookDetails = () => {
	const { title } = useParams();

	// Find the book in all categories
	let book = null;
	for (const category in resources) {
		book = resources[category].find(
			(item) => item.title === decodeURIComponent(title)
		);
		if (book) break;
	}

	if (!book) {
		return <div className='text-center text-red-500'>Book not found.</div>;
	}

	return (
		<div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-28 '>
			<div className='flex flex-col lg:flex-row justify-between gap-10'>
				 <img loading="lazy"
					src={book.image}
					alt={book.title}
					className='lg:w-[842px] lg:h-[595px] object-cover rounded-lg shadow-md'
				/>
				<div>
					<h1 className='text-[28px] md:text-4xl font-bold mt-4 text-[#F5E9DC]'>{book.title}</h1>
					<p className='text-2xl text-[#F5E9DC]/80 mt-2'>Price: {book.price}</p>
					<a
						href={book.link}
						rel='noopener noreferrer'
						className='inline-block mt-6 bg-primary text-[#F5E9DC] px-4 py-2 rounded-lg'>
						Get Now
					</a>
					<p className='mt-4 text-[#F5E9DC]/80'>
						<span className='text-xl uppercase font-bold '>Description</span>{' '}
						<br />
						<div
							className='text-justify'
							dangerouslySetInnerHTML={{ __html: book.description }}
						/>
					</p>
					{book.author && (
						<p className='mt-4 text-[#F5E9DC]/80'>
							<span className='text-xl uppercase font-bold '>Author's Note</span>{' '}
							<br />
							<div
								className='text-justify'
								dangerouslySetInnerHTML={{ __html: book.author }}
							/>
						</p>
					)}
				</div>
			</div>
			<Testimonials />
			<FAQ />
		</div>
	);
};

export default BookDetails;
