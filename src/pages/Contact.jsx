import React from 'react'
import HeroSection from '../components/contact/HeroSection'
import ContactSection from '../components/contact/ContactSection'

const Contact = () => {
  return (
    <div className='px-4 py-5 lg:px-[10rem] lg:py-[2rem] mt-8 lg:mt-0'>
        <HeroSection />
        <ContactSection />
    </div>
  )
}

export default Contact