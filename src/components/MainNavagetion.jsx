import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/headlogo.png';

const nav = [
	{ path: '/', label: 'Home' },
	{ path: '/resources', label: 'Resources' },
	{ path: '/services', label: 'Services' },
	{ path: '/about', label: 'About Me' },
];

const MainNavagetion = () => {
	return (
		<div className='navbar text-[#F5E9DC] px-4 py-5 lg:px-[10rem] lg:py-[2rem]'>
			<div className='navbar-start'>
				<div className='dropdown lg:hidden'>
					<div
						tabIndex={0}
						role='button'
						className='btn btn-ghost btn-circle'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
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
						className='menu menu-sm dropdown-content bg-[#111111] rounded-box z-[1] mt-3 w-52 p-2 shadow'>
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
				<div>
					<NavLink to='/'>
						<img
							src={logo}
							alt='Logo'
							className='logo'
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
			<div className='navbar-end'>
				<Link className='btn bg-primary border-none hover:bg-primary/80 text-[#F5E9DC] lg:px-10 text-center'>
					Contact Me
				</Link>
			</div>
		</div>
	);
};

export default MainNavagetion;

{
	/* <div className='navbar'>
			<div className='flex-1'>
                <Link to='/'><img className='logo mx-2' src={logo} alt='Precious Evans' /></Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/resources'>Resources</Link>
					</li>
					<li>
						<Link to='/services'>Services</Link>
					</li>
					<li>
						<Link to='/about'>About Me</Link>
					</li>
				</ul>
				<button className='btn btn-outline ml-4'>Contact Me</button>
			</div>

		</div> */
}
