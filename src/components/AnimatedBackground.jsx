// components/AnimatedBackground.jsx
import { motion, useCycle } from 'framer-motion';

const gradients = [
	'linear-gradient(135deg, #1d1d1d, #171717)',
	'linear-gradient(135deg, #171717, #232323)',
	'linear-gradient(135deg, #101010, #1f1f1f)',
];

const AnimatedBackground = () => {
	const [current, cycle] = useCycle(0, 1, 2);

	return (
		<motion.div
			className="fixed inset-0 -z-10"
			initial={{ background: gradients[0] }}
			animate={{ background: gradients[current] }}
			transition={{ duration: 8, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
			onAnimationComplete={() => cycle()}
		/>
        // <div className='animated-gradient'></div>
	);
};

export default AnimatedBackground;
