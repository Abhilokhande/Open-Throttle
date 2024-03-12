import React from 'react'
import './header.css';
import Header from './Header';
import Footer from './footer';
import Contact from './contact';
import Admin from './Admin';
export default function Addminlogin() {
  return (
    <div>
         <Header title="Open Throttle's" />
  <div className="background-page">
    <img src={process.env.PUBLIC_URL + '/login.jpg'}  alt="Background" className="background-image" />
    <Admin heading="Admin Login"/>
  </div>
  <Contact/>
  <Footer/>
    </div>
  )
}
