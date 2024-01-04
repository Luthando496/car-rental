import React from 'react'
import Testimonials from '../components/Testimonials'
import CustomHeader from '../components/CustomHeader'
import Footer from '../components/Footer'
import BackgroundContact from '../components/BackgroundContact'


const Testimonial = () => {
  return (
    <>
        <CustomHeader title='Testimonial' />
        <Testimonials />
        <BackgroundContact />
        <Footer />
    </>
  )
}

export default Testimonial