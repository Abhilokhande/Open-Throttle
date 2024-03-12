import React from 'react'
import Carousel from './Carousel';
import Showroom  from './Showroom';
import Image1 from './image1';
import Threeimage from './threeimage';
import Header from './Header';
import Contact from './contact';
import Footer from './footer';
import Location from './Location';
export default function Main() {
  return (
    <div>
        <Header title="Open Throttle's" n2='Sign In' ln2='/createaccount' drop="Login"/>
      <Carousel/>
           <Image1/>
           <Header n1='Motorcycles' ln1="/motorcycles"/>
          <Threeimage/>
          <Showroom/>
          <Contact/>
      <Location/>
      <Footer/>
    </div>
  )
}
