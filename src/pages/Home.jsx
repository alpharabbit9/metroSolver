import React from 'react'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'
import SuccessStoriesSection from '../components/SuccessStoriesSection '
import TestimonialsSection from '../components/TestimonialsSection '
import MetroSolverSection from '../components/MetroSolverSection '
import ServicesSection from '../components/ServicesSection '
import SponsorMarquee from '../components/SponsorMarquee '
import LatestWorksSection from '../components/LatestWorksSection '
import HowItWorksSection from '../components/HowItWorksSection '
import PodcastSection from '../components/PodcastSection'
import ContactFormSection from '../components/ContactFormSection '

const Home = () => {
  return (
    <div>
      <Banner/>
      <SponsorMarquee/>
      <ServicesSection/>
      <LatestWorksSection/>
      <TestimonialsSection/>
      <MetroSolverSection/>
      <SuccessStoriesSection/>
      <PodcastSection/>
      <ContactFormSection/>
      <FAQ/>
    </div>
  )
}

export default Home
