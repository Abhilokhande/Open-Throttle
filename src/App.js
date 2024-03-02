import logo from './logo.svg';
import './App.css';
import Header from "./Mycomponent/Header";
import Footer from './Mycomponent/footer';
import React from "react";
import Login from "./Mycomponent/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-router-dom";
import Contact from './Mycomponent/contact';
import Main from './Mycomponent/Main';
function App() {
  return (
    <>
    <Router>
      <Header title="Open Throttle's"n1='Explore' n2='Login'n3='Signup'n4='' />
      <Main/>
      {/* <Login/> */}
      <Contact/>
      <Footer/>
      </Router>
      </>
  );
}

export default App;
