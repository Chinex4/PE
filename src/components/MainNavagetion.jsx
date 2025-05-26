import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const nav = [
	{ path: '/', label: 'Home' },
	{ path: '/resources', label: 'Resources' },
	{ path: '/services', label: 'Services' },
	{ path: '/mindandmarket', label: 'Newsletter' },
	{ path: '/case-studies', label: 'Case Studies' },
	{ path: '/about', label: 'About Me' },
];

const navItemVariants = {
	hidden: { opacity: 0, y: -10 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.4 },
	}),
};

const MainNavigation = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// if scrolled more than 10px from top, set scrolled = true
			if (window.scrollY > 10) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			// Fixed and sticky positioning + dynamic styles
			className={`navbar fixed top-0 left-0 w-full z-50 px-4 py-5 lg:px-[10rem] lg:py-[2rem] font-poppins
        ${
					scrolled
						? 'bg-[#171717]/30 py-3 backdrop-blur-md border-b border-[#171717]/30 shadow-sm text-[#F5E9DC]'
						: 'bg-transparent text-[#F5E9DC]'
				}`}>
			<div className='navbar-start'>
				<NavLink to='/'>
					<motion.img
						src={'/images/logo.svg'}
						alt='Logo'
						className='logo w-[130px]'
						whileHover={{ scale: 1.05 }}
						transition={{ type: 'spring', stiffness: 300 }}
					/>
				</NavLink>
			</div>

			<div className='navbar-center'>
				<ul className='menu menu-horizontal px-1 hidden lg:flex text-lg'>
					{nav.map((item, index) => (
						<motion.li
							key={index}
							custom={index}
							initial='hidden'
							animate='visible'
							variants={navItemVariants}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive ? 'text-[#F5E9DC]' : 'text-navGray'
								}>
								{item.label}
							</NavLink>
						</motion.li>
					))}
				</ul>
			</div>

			{/* Mobile menu */}
			<div className='navbar-end lg:hidden'>
				<div className='dropdown lg:hidden'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='size-8'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h7'
							/>
						</svg>
					</div>
					<motion.ul
						tabIndex={0}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
						className='menu menu-sm dropdown-content bg-[#111111] rounded-box z-[1] mt-3 w-52 p-2 shadow right-0'>
						{nav.map((item, index) => (
							<li key={index}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive
											? 'text-[#F5E9DC] font-extrabold'
											: 'text-[#F5E9DC]'
									}>
									{item.label}
								</NavLink>
							</li>
						))}
					</motion.ul>
				</div>
			</div>

			{/* Contact Button */}
			<div className='navbar-end hidden lg:flex'>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}>
					<Link
						to='/contact'
						className='btn bg-primary border-none hover:bg-primary/80 text-[#000000] lg:px-10 text-center whitespace-nowrap'>
						Contact Me
					</Link>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default MainNavigation;
