import { Link } from "react-router-dom";

const KeyTakeaway = () => {
	return (
		<section className='bg-primary py-16 px-4'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-3xl font-bold text-smileyblue mb-4'>Key Takeaway</h2>
				<p className='text-smileyblue mb-8 max-w-xl mx-auto'>
					Our work with Xquisite demonstrates the power of a well-crafted brand
					strategy to establish a memorable identity and competitive
					positioning. Through cohesive visual identity, targeted messaging, and
					strategic market alignment, we enabled the brand to strengthen its
					presence, engage its audience more effectively, and set a foundation
					for sustainable growth. If you’re ready to elevate your brand’s
					impact, let’s explore how we can create similar success for you!
				</p>
				<Link to='/contact' className='bg-smileyblue text-primary py-5 px-24 rounded font-semibold'>
					Let's Chat
				</Link>
			</div>
		</section>
	);
};

export default KeyTakeaway