import React from 'react';
import Header from './Header';
import Footer from './footer';
import "./header.css";
import { Link } from 'react-router-dom';
export default function Bike(props) {
  const { location } = props;
  const { imageSrc, imageTitle, lastUpdated } = location && location.state ? location.state : {};
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Make sure the container takes the full height of the viewport
  };
  const buttonStyle = {
    fontSize: '16px',
    padding:"8px",
    backgroundColor: 'black',
    color: 'White',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color:red'
  };
  return (
  <>
      <Header title="BULLET-350"/>
<div className="card text-bg-dark">
  <img src={process.env.PUBLIC_URL + '/Image/b2.jpg'} className="card-img" alt="..."/>
  <div className="card-img-overlay">
  <div style={  containerStyle}>
    <Link className="nav-link" style={buttonStyle} to={{pathname:'/book'}}>Book Me..</Link>
    </div>
     </div>
</div>
<div className='aboutR'>
  <div><h2 className='h2'>About Royal Enfield</h2><br/></div>
  <div>
    <p>Royal Enfield is an Indian multinational motorcycle manufacturing company, headquartered in Chennai. 
    The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production.
    Royal Enfield bikes are more than machines or automobiles to Indians. The brand for years has been known to deliver ace-quality automobiles. 
      Headquartered in Chennai, RE has been manufacturing cruiser bikes since 1901.</p>
      <p>Royal Enfield is an Indian multinational motorcycle manufacturing company, headquartered in Chennai.
       The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production. 
       The company operates manufacturing plants in Chennai in India. Wikipedia</p>
<span className='sp'>CEO:</span> B. Govindarajan (18 Aug 2021–)<br/>
<span className='sp'>Parent organization:</span> Eicher Motors<br/>
<span className='sp'>Customer service: </span>1800 210 0008<br/>
<span className='sp'>Founded:</span> 1955<br/>
<span className='sp'>Headquarters:</span> Chennai<br/>
<span className='sp'>Subsidiaries:</span> Royal Enfield North America; Royal Enfield UK; Royal Enfield Brazil; Royal Enfield Thailand
  </div>
</div>
<Footer/>
    </>
  );
}
