// components/AnimatedBlobs.jsx
import { motion } from 'framer-motion';

const AnimatedBlobs = () => {
	return (
		<div className='fixed inset-0 -z-10 overflow-hidden'>
			<motion.div
				initial={{ x: '-20%', y: '-20%' }}
				animate={{ x: '20%', y: '20%' }}
				transition={{
					duration: 20,
					yoyo: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute top-0 left-0 w-[30rem] h-[30rem] bg-[#ff00cc] opacity-20 blur-3xl rounded-full mix-blend-multiply'></motion.div>

			<motion.div
				initial={{ x: '20%', y: '-20%' }}
				animate={{ x: '-20%', y: '20%' }}
				transition={{
					duration: 25,
					yoyo: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute top-0 right-0 w-[25rem] h-[25rem] bg-[#3333ff] opacity-20 blur-3xl rounded-full mix-blend-multiply'></motion.div>

			<motion.div
				initial={{ x: '-10%', y: '40%' }}
				animate={{ x: '10%', y: '-40%' }}
				transition={{
					duration: 30,
					yoyo: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[35rem] h-[35rem] bg-[#00ffee] opacity-10 blur-3xl rounded-full mix-blend-multiply'></motion.div>
		</div>
	);
};

export default AnimatedBlobs;
