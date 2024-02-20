import React from 'react'
import './link.css'
export default function Link(props) {
  return (
    <div className="link">
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">{props.l1}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{props.l2}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">{props.l3}</a>
  </li>
   </ul>
   </div>
  )
}
