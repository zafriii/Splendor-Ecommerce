import React from 'react'
import Slider from '../components/Slider'
import Feature from '../components/Feature'
import Box from '../components/Box'
import Discount from '../components/Discount'
import Logos from '../components/Logos'
import CardSlide from '../components/CardSlide'
import Arrival from '../components/Arrival'


function Home() {
  return (
    <div>
      <Slider/>
      {/* <Feature/> */}
      <CardSlide/>
      <Box/>
      <Arrival/>
      <Discount/>
      <Logos/>
      
    </div>
  )
}

export default Home