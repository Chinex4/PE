import HeroSection from '../components/home/HeroSection';
import SponsorsCarousel from '../components/home/SponsorsCarousel';
import BrandTruthSection from '../components/home/BrandTruthSection';
import TrueMethodSection from '../components/home/TrueMethodSection';
import WhoThisIsForSection from '../components/home/WhoThisIsForSection';
import AboutMeSection from '../components/home/AboutMeSection';
import TestimonialsSection from '../components/home/Testimonials';
import CommunitySection from '../components/home/CommunitySection';
import ContactForm from '../components/ContactForm';
import Resources from '../components/home/Resources';
import YoutubeSection from '../components/home/YoutubeSection';
import FAQ from '../components/FAQ';
import FinalTalkSection from '../components/home/FinalTalkSection';
import CaseStudy from '../components/home/CaseStudy';
import SEO from '../components/SEO';

function Home() {
	return (
		<div className='home-page px-4 pb-5 lg:px-[10rem] lg:pb-[2rem]'>
      <SEO />
      <HeroSection />
      <SponsorsCarousel />
      <TestimonialsSection />
      <BrandTruthSection />
      <TrueMethodSection />
      <WhoThisIsForSection />
      <AboutMeSection />
      {/* <Resources /> */}
      <CaseStudy />
      {/* <YoutubeSection /> */}
      {/* <MediaLinks /> */}
      {/* <CommunitySection />  */}
      <FAQ />
      <FinalTalkSection />
      {/* <ContactForm /> */}
    </div>
	);
}

export default Home;
