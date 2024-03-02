import React from 'react'
import Carousel from './Carousel';
import Showroom  from './Showroom';
import Image1 from './image1';
import Threeimage from './threeimage';
export default function Main() {
  return (
    <div>
      <Carousel/>
           <Image1/>
          <Threeimage/>
      <Showroom/>
    </div>
  )
}
