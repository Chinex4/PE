import React from 'react'
import HeroSection from '../components/services/HeroSection'
import Service from '../components/services/Service'
import Testimonials from '../components/services/Testimonials'
import CaseStudy from '../components/services/CaseStudy'
import Processes from '../components/services/Processes'
import FAQ from '../components/services/FAQ'

const Services = () => {
  return (
    <div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
      <HeroSection />
      <Service />
      <Testimonials />
      <CaseStudy />
      <Processes />
      <FAQ />
    </div>
  )
}

export default Services