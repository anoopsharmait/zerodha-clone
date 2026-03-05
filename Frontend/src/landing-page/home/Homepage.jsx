import React from 'react'
import Hero from './hero'
import Education from './Education'
import Awards from './awards'
import Pricing from './Pricing'
import Stats from './Stats'
import OpenAccount from '../openAccount'
import NavBar from '../NavBar'
import Footer from '../footer'

function HomePage() {
  return (
    <div>
       
     <Hero/>
     <Awards/>
     <Stats/>
     <Pricing/>
        <Education/>
      <OpenAccount/>
 
    </div>
  )
}

export default HomePage
