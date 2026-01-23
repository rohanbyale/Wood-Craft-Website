import React from 'react'
import InquiryHero from '../components/InquiryHero'
import Form from '../components/Form'
import ConciergeToggle from '../components/ConciergeToggle'
import StudioPersonnel from '../components/StudioPersonnel'
import DigitalArchive from '../components/DigitalArchive'
import SuccessSanctuary from '../components/SuccessSanctuary'
import StudioProximity from '../components/StudioProximity'
import StudioExperienceWrapper from '../components/StudioExperienceWrapper'
import Text from '../components/Text'
const ContactPage = () => {
  return (
    <div>
        <InquiryHero />
        <StudioExperienceWrapper />
        <Text />
            <ConciergeToggle />
        <Form />
        <StudioProximity />
         
        <StudioPersonnel />
        
        <DigitalArchive />
   
        {/* <SuccessSanctuary /> */}
    </div>
  )
}

export default ContactPage