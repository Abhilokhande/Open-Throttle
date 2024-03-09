// BackgroundPage.js
import React from 'react';
import './header.css';
import Login from './Login';
import Header from './Header';
import Footer from './footer';
import Contact from './contact';
import { Link } from 'react-router-dom';
export default function Mainlogin() {
      return (<>
      <Header title="Open Throttle's" n1='Sign In' A1='/createaccount'/>
  <div className="background-page">
    <img src={process.env.PUBLIC_URL + '/login.jpg'}  alt="Background" className="background-image" />
    <Login/>
  </div>
  <Contact/>
  <Footer/>
  </>
  )
}

