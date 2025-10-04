import React from 'react'
import HeroSection from '../components/newsletter/HeroSection'
import PrinciplesSection from '../components/newsletter/PrinciplesSection'
import ChoosePlan from '../components/newsletter/ChoosePlan'

const NewsLetter = () => {
  return (
    <div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
        <HeroSection />
        <PrinciplesSection />
        {/* <ChoosePlan /> */}
    </div>
  )
}

export default NewsLetter