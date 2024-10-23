import React from 'react'
import HeroSection from '../components/resources/HeroSection';
import ResourceTabs from '../components/resources/ResourceTabs';
import RequestForm from '../components/resources/RequestForm';


const Resources = () => {
  return (
    <div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem]'>
      <HeroSection />
      <ResourceTabs />
      <RequestForm />

      
    </div>
  )
}

export default Resources