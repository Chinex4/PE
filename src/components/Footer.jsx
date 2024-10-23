import React from 'react';
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedinIn,
	FaYoutube,
} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/headlogo.png';

const nav = [
	{ path: '/', label: 'Home' },
	{ path: '/resources', label: 'Resources' },
	{ path: '/services', label: 'Services' },
	{ path: '/about', label: 'About Me' },
	{ path: '/contact', label: 'Contact' },
];

const Footer = () => {
	return (
		<footer className='bg-[#111111] text-white py-8 space-y-10'>
			<div className='max-w-6xl mx-auto px-4 lg:flex lg:justify-between lg:items-center'>
				{/* Logo Section */}
				<div className='flex items-center mb-6 lg:mb-0'>
					<NavLink to='/'>
						<img
							src={logo}
							alt='Logo'
							className='logo'
						/>
					</NavLink>
				</div>

				{/* Navigation Links */}
				<div className='flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-6 lg:mb-0'>
					{nav.map((item, index) => (
						<NavLink
							key={index}
							to={item.path}
							className={({ isActive }) =>
								isActive ? 'text-white' : 'text-navGray hover:text-white transition-colors duration-300'
							}>
							{item.label}
						</NavLink>
					))}
				</div>

				{/* Social Media Icons */}
				<div className='flex space-x-4 mb-6 lg:mb-0'>
					<a
						href='https://facebook.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-orange-500'>
						<FaFacebookF />
					</a>
					<a
						href='https://instagram.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-orange-500'>
						<FaInstagram />
					</a>
					<a
						href='https://twitter.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-orange-500'>
						<FaTwitter />
					</a>
					<a
						href='https://linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-orange-500'>
						<FaLinkedinIn />
					</a>
					<a
						href='https://youtube.com'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:text-orange-500'>
						<FaYoutube />
					</a>
				</div>
			</div>

			{/* Copyright and Policy Links */}
			<div className='text-center mt-10 text-sm text-navGray'>
				© 2024 Precious Evans Security Limited.
				<a
					href='#privacy-policy'
					className='ml-4 hover:text-primary transition-colors'>
					Privacy Policy
				</a>
				<a
					href='#cookie-policy'
					className='ml-4 hover:text-primary transition-colors'>
					Cookie Policy
				</a>
			</div>
		</footer>
	);
};

export default Footer;
