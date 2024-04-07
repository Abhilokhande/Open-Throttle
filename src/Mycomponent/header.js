    import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: 'black' }}  >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{margin:10}} to={props.ln1  }>{props.n1}</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{margin:10}} to={props.ln2}>{props.n2}</Link>
        </li>
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {props.n2}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>  */}
        <div className="dropdown">
  <Link className="nav-link"  style={{margin:10}} data-bs-toggle="dropdown" aria-expanded="false">
    {props.drop}
  </Link>
  <ul className="dropdown-menu" style={{backgroundColor:'transparent', padding:15}}>
    <li> <Link className="droplink" style={{padding:5, fontSize:20,color:'white', marginBottom:10}} to="/login">User</Link></li>
    <li> <Link className="droplink"  style={{fontSize:20,color:'White', marginTop:20}} to="/addminlogin">Admin</Link></li>
  </ul>
</div>
        <li className="nav-item">
          <a className="nav-link"href="#">{props.n3}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  );
}
