import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import SponsorsCarousel from '../components/home/SponsorsCarousel';
import BrandStrategist from '../components/home/BrandStrategist';
import Testimonials from '../components/home/Testimonials';
import MediaLinks from '../components/home/MediaLinks';
import CommunitySection from '../components/home/CommunitySection';
import ContactForm from '../components/ContactForm';
import Resources from '../components/home/Resources';
import YoutubeSection from '../components/home/YoutubeSection';
import FAQ from '../components/FAQ';

function Home() {
	return (
		<div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
      <HeroSection />
      <SponsorsCarousel />
      <BrandStrategist />
      <Resources />
      <YoutubeSection />
      <Testimonials />
      <MediaLinks />
      <CommunitySection />
      <FAQ />
      <ContactForm />
    </div>
	);
}

export default Home;
