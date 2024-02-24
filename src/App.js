import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponent/Header";
import Footer from './Mycomponent/footer';
import Carousel from './Mycomponent/Carousel';
import Link from './Mycomponent/link';
import Video from './Mycomponent/video';
import Showroom  from './Mycomponent/Showroom';
import Image1 from './Mycomponent/image1';
import Threeimage from './Mycomponent/threeimage';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import Login only once
import Login from './Mycomponent/Login';
import Contact from './Mycomponent/contact';
function App() {
  return (
    <>
      <Header title="Open Throttle's"n1='Explore' n2='Login'n3='Signup'n4='' />
      <Carousel/>
      <Link l1='A' l2='B' l3='C' />
      {/* <Video/> */}
      <Image1/>
      <Threeimage/>
      <Showroom/>
      <Contact/>
      <Footer/>
      </>
  );
}

export default App;
