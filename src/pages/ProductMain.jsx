import React from 'react'
import ProductDetail from '../components/ProductDetail'
import WoodConfigurator from '../components/WoodConfigurator'
import ProductSpecs from '../components/ProductSpecs'
import CraftsmansNote from '../components/CraftsmansNote'
import ARViewerButton from '../components/ARViewerButton'
import TechnicalBlueprint from '../components/TechnicalBlueprint'
import LongevityGuide from '../components/LongevityGuide'
import RelatedMasterpieces from '../components/RelatedMasterpieces'
import WhiteGloveDelivery from '../components/WhiteGloveDelivery'

export const ProductMain = () => {
  return (
    <div>
        <ProductDetail />
        <WoodConfigurator />
        <ProductSpecs />
        <CraftsmansNote />
        <ARViewerButton />
        <TechnicalBlueprint />
     
        <LongevityGuide />
        <WhiteGloveDelivery />
           <RelatedMasterpieces />
    </div>
  )
}
