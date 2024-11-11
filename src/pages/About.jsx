import React from 'react';
import FAQ from '../components/FAQ'
import HeroSection from '../components/about/HeroSection'
import TeamValuesAndApproach from '../components/about/TeamValueApproach';
import UltimateMission from '../components/about/UltimateMission';


const About = () => {
	return (
		<div>
			<div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
				<HeroSection />
				<TeamValuesAndApproach />
				<UltimateMission />
				<FAQ />
			</div>
		</div>
	);
};

export default About;
