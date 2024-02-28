import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponent/Header";
import Footer from './Mycomponent/footer';
import Carousel from './Mycomponent/Carousel';
import Showroom  from './Mycomponent/Showroom';
import Image1 from './Mycomponent/image1';
import Threeimage from './Mycomponent/threeimage';
import React from "react";
import Login from "./Mycomponent/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-router-dom";
import Contact from './Mycomponent/contact';
function App() {
  return (
    <>
    <Router>
      <Header title="Open Throttle's"n1='Explore' n2='Login'n3='Signup'n4='' />
      {/* <div>
        <Switch>
          <Route path="/">
          <Carousel/>
           <Image1/>
          <Threeimage/>
        </Route>
      </Switch>
      </div> */}
      {/* <Login/> */}
      <Carousel/>
           <Image1/>
          <Threeimage/>
      <Showroom/>
      <Contact/>
      <Footer/>
      </Router>
      </>
  );
}

export default App;
