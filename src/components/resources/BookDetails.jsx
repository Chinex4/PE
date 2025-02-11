import React from 'react';
import { useParams } from 'react-router-dom';
import { resources } from '../../data';
import FAQ from '../FAQ';
import Testimonials from '../home/Testimonials';

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
		<div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0 '>
			<div className='flex flex-col md:flex-row justify-between gap-10'>
				<img
					src={book.image}
					alt={book.title}
					className='w-[595px] h-[842px] object-cover rounded-lg shadow-md'
				/>
				<div>
					<h1 className='text-4xl font-bold mt-4 text-white'>{book.title}</h1>
					<p className='text-2xl text-white/80 mt-2'>Price: {book.price}</p>
					<p className='mt-4 text-white/80'>
                        <span className='text-xl uppercase font-bold '>Description</span> <br />
						This book provides in-depth knowledge on {book.title} and is highly
						rated among customers.
					</p>

					<a
						href={book.link}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block mt-6 bg-primary text-white px-4 py-2 rounded-lg'>
						Buy Now
					</a>
				</div>
			</div>
			<Testimonials />
			<FAQ />
		</div>
	);
};

export default BookDetails;
