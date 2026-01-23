import React from 'react'
import WorkHero from '../components/WorkHero'
import ProjectSection from '../components/ProjectSection'
import FeaturedCaseStudy from '../components/FeaturedCaseStudy'
import MaterialShowcase from '../components/MaterialShowcase'
import ClientTestimonial from '../components/ClientTestimonial'
import CollaboratorList from '../components/CollaboratorList'
import WorkCTA from '../components/WorkCTA'

const Work = () => {
  return (
    <div>
        <WorkHero />
        <ProjectSection />
        <FeaturedCaseStudy />
        <MaterialShowcase />
        <ClientTestimonial />
        <CollaboratorList /> 
        <WorkCTA />
    </div>
  )
}

export default Work