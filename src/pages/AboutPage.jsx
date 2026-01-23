import React from 'react'
import About from '../components/About'
import TheLineage from '../components/TheLineage'
import WorkshopBento from '../components/WorkshopBento'
import ValuesGrid from '../components/ValuesGrid'
import ArtisanTeam from '../components/ArtisanTeam'
import Awards from '../components/Awards'
import VisitUs from '../components/VitsitUS'
import ProvenanceMap from '../components/ProvenanceMap'

const AboutPage = () => {
  return (
    <div>

        <About />
        <Awards />
        <TheLineage />
        <WorkshopBento />
        <ValuesGrid />
        <ArtisanTeam />
    <VisitUs />
    <ProvenanceMap />
    </div>
  )
}

export default AboutPage