import React from 'react'
import HeroSection from '../components/casestudies/HeroSection'
import CaseStudies from '../components/casestudies/CaseStudyLists'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/FAQ'

const CaseStudyPage = () => {
  return (
    <div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
        <HeroSection />
        <CaseStudies />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default CaseStudyPage