import React from 'react';
import MeetXquisite from '../components/casestudy/MeetXquisite';
import BackgroundChallenge from '../components/casestudy/BackgroundChallenge';
import GoalsObjectives from '../components/casestudy/GoalObjective';
import MyApproach from '../components/casestudy/MyApproach';
import ResultsImpact from '../components/casestudy/ResultImpact';
import ClientTestimonial from '../components/casestudy/ClientTestimonial';
import KeyTakeaway from '../components/casestudy/KeyTakeaway';


const CaseStudy = () => {
	return (
		<div>
			<div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
				<MeetXquisite />
				<BackgroundChallenge />
				<GoalsObjectives />
				<MyApproach />
				<ResultsImpact />
				<ClientTestimonial />
				<KeyTakeaway />
				
			</div>
		</div>
	);
};

export default CaseStudy;
