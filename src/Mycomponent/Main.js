import React from 'react'
import Carousel from './Carousel';
import Showroom  from './Showroom';
import Image1 from './image1';
import Threeimage from './threeimage';
import Header from './Header';
import Contact from './contact';
import Footer from './footer';
export default function Main() {
  return (
    <div>
        <Header title="Open Throttle's" n2='Login' />
      <Carousel/>
           <Image1/>
           <Header n1='Motorcycles'/>
          <Threeimage/>
      <Showroom/>
      <Contact/>
      <Footer/>
    </div>
  )
}
