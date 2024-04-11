import React from 'react'
import "./header.css";
import Header from './Header'
import Footer from './footer'
import { Link } from 'react-router-dom';
export default function Brand(props) {
  const bikesData = [
    {
      id: 1,
      imageSrc: '/Image/bullet-350.jpg',
      imageTitle: 'Bullet 350',
      lastUpdated: 'Last updated 3 mins ago',
    },
    // Add more bike data as needed
  ];
    return (<>
    <div>
      <Header  title="ROYAL ENFIELD" n2='Home' ln2='/'/>
        </div>
        <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="ride  ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={process.env.PUBLIC_URL + '/Image/b3.jpg'}className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + '/Image/b2.jpg'} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={process.env.PUBLIC_URL + '/Image/b1.jpg'} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div>
        <div className="card text-center">
  <div className="card-header">
    Royal Enfield
  </div>
  <div className="card-body" style={{border:'none'}}>
    <h5 className="card-title">Welcome to Open Throttle's</h5>
    <p className="card-text">To get more info about bikes and bokking process create a account or if have a account login to it.</p>
    <Link className="link1" to='/createaccount'>Sign In</Link>
    <Link className="link1" to='/login'>Login</Link>
  </div>
</div>
        </div>
      <div className="card-group">
  <div className="card" style={{border:'none'}}><Link to={{
     pathname: "/bike",
    state: {
      id: 1,
      imageSrc: '/Image/bullet-350.jpg',
      imageTitle: 'Bullet 350',
      lastUpdated: 'Last updated 3 mins ago',
    }}}>
    <img src={process.env.PUBLIC_URL + '/Image/bullet-350.jpg'} className="card-img-top" alt="..."/></Link> 
    <div className="card-body" style={{border:'none'}}>
      <h5 className="card-title" style={{textAlign:'center'}}>BULLET - 350</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
    </div>
      {/* <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/shotgun.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>SHOTGUN</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/classic-350.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>CLASSIC - 350</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/int-650.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>INT-650</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
<div className="card-group" >
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/scram-411.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>SCRAM -411</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
    </div>
      {/* <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/super-meteor-650.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>SUPER-METEOR-650</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/meteor-350.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>METEOR-350</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/continental-gt.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>CONTINENTAL-GT</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
<div className="card-group" >
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/bullet-350.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>BULLET</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
    </div>
      {/* <div className="card-footer">
        <small className="text-body-secondary">Last updated 3 mins ago</small>
      </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/classic-350.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>CLASSIC</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/hunter-350.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>HUNTER-350</h5>
      {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
  <div className="card" style={{border:'none'}}>
    <img src={process.env.PUBLIC_URL + '/Image/himalayan.jpg'} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:'center'}}>HIMALAYAN</h5>
      {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-body-secondary">Last updated 3 mins ago</small>
    </div> */}
  </div>
</div>
        {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      <Footer/>
    {/* </div> */}
 </> )
}

