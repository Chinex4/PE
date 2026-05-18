import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const nav = [
	{ path: '/', label: 'Home' },
	{ path: '/resources', label: 'Resources' },
	{ path: '/services', label: 'Services' },
	{ path: '/newsletter', label: 'Newsletter' },
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
		<header className="max-w-7xl mx-auto flex items-center justify-between pt-[82px]">
          <Link to="/" aria-label="Precious Evans home">
            <img
              src="/images/logo.svg"
              alt="Precious Evans"
              className="w-[128px] object-contain"
            />
          </Link>

          <img
            src="/images/icons/pawn-icon.png"
            alt=""
            aria-hidden="true"
            className="mr-[104px] size-10 object-contain"
          />
        </header>
	);
};

export default MainNavigation;
