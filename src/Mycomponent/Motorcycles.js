import React from 'react'
import Header from './Header'
import Footer from './footer'
import Contact from './contact'
import { Link } from 'react-router-dom'
export default function Motorcycles(props) {
  const buttonStyle = {
    fontSize: '16px',
    padding:"8px",
    backgroundColor: 'white',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color:'black',
    transition: 'background-color:red'
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Make sure the container takes the full height of the viewport
  };
    const t= 'ROYAL ENFIELD';
  return (
    <div>
        <Header title="OPEN THROTTLE'S"/>

        <div className="card text-bg-dark">
  <img src="./Royal.jpg" className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title"  style={{fontSize:"50px", justifyContent:'center', alignItems:'center', display:'flex',color:"white"}}>ROYAL ENFIELD</h5>
    <div style={containerStyle}>
    <Link className="nav-link" style={buttonStyle} to={{pathname:'/brand',props:{t}}}>Know more..</Link>
    </div>
    <p className="card-text"></p>
  </div>
</div>
        <Footer/>
    </div>
  )
}
