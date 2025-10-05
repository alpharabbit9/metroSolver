import React from 'react'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'
import SuccessStoriesSection from '../components/SuccessStoriesSection '
import TestimonialsSection from '../components/TestimonialsSection '

const Home = () => {
  return (
    <div>
      <Banner/>
      <TestimonialsSection/>
      <SuccessStoriesSection/>
      <FAQ/>
    </div>
  )
}

export default Home
