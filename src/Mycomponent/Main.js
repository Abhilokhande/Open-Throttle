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
        <Header title="Open Throttle's"n1='Explore' n2='Login'n3='Signup'n4='' />
      <Carousel/>
           <Image1/>
          <Threeimage/>
      <Showroom/>
      <Contact/>
      <Footer/>
    </div>
  )
}
