import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import SponsorsCarousel from '../components/home/SponsorsCarousel';

function Home() {
	return (
		<>
      <HeroSection />
      <SponsorsCarousel />
    </>
	);
}

export default Home;
