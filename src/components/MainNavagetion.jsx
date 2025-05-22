import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/headlogo.png';

const nav = [
	{ path: '/', label: 'Home' },
	{ path: '/resources', label: 'Resources' },
	{ path: '/services', label: 'Services' },
	{ path: '/newsletter', label: 'Newsletter' },
	{ path: '/case-studies', label: 'Case Studies' },
	{ path: '/about', label: 'About Me' },
	// { path: '/contact', label: 'Contact' },
];

const MainNavagetion = () => {
	return (
		<div className='navbar text-[#F5E9DC] px-4 py-5 lg:px-[10rem] lg:py-[2rem]'>
			<div className='navbar-start'>
				<div>
					<NavLink to='/'>
						<img
							src={'/images/logo.svg'}
							alt='Logo'
							className='logo w-[130px]'
						/>
					</NavLink>
				</div>
			</div>
			<div className='navbar-center'>
				<ul className='menu menu-horizontal px-1 hidden lg:flex text-lg'>
					{nav.map((item, index) => (
						<li key={index}>
							<NavLink
								to={item.path}
								className={({ isActive }) =>
									isActive ? 'text-[#F5E9DC]' : 'text-navGray'
								}>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
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
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content bg-[#111111] rounded-box z-[1] mt-3 w-52 p-2 shadow right-0'>
						{nav.map((item, index) => (
							<li key={index}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										isActive ? 'text-[#F5E9DC] font-extrabold' : 'text-[#F5E9DC]'
									}>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='navbar-end hidden lg:flex'>
				<Link to='/contact' className='btn bg-primary border-none hover:bg-primary/80 text-[#F5E9DC] lg:px-10 text-center'>
					Contact Me
				</Link>
			</div>
		</div>
	);
};

export default MainNavagetion;
