// components/SeeMyWorksButton.jsx
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const MyButton = ({ to = '', href = '', label = '', sec = false }) => {
	const baseClasses = `inline-flex items-center justify-center gap-2 ${
		sec ? 'border border-primary' : 'bg-primary'
	} px-5 py-2 rounded-full hover:opacity-90 transition-all`;

	const iconClasses =
		'w-8 h-8 rounded-full bg-white flex items-center justify-center';
	const labelClasses = `whitespace-nowrap ${sec ? 'text-[#F5E9DC]' : 'text-black'}`;

	const content = (
		<>
			<span className={iconClasses}>
				<ArrowRight className='text-black w-4 h-4' />
			</span>
			<span className={labelClasses}>{label}</span>
		</>
	);

	return href ? (
		<a
			href={href}
			className={baseClasses}
			// target='_blank'
		>
			{content}
		</a>
	) : (
		<Link
			to={to}
			className={baseClasses}>
			{content}
		</Link>
	);
};

export default MyButton;
