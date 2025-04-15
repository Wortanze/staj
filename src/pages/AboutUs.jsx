import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutUsInside from '../components/AboutUs/AboutUsInside'
import AboutCompany from '../components/AboutCompany/AboutCompany'
import Advantages from '../components/Advantages/Advantages'

function AboutUs() {
  return (
   <>
    <Header/>
    <AboutUsInside/>
    <AboutCompany/>
    <Advantages/>
    <Footer/>
   </>
  )
}

export default AboutUs