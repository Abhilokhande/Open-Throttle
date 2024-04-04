
import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div className='container'>
      <div className="left">
        <h1>ROYALMOTORS</h1>
      </div>
      <div className='middle'>
        <ul>
            <li>MotorCycles</li>
            <li>Bikes</li>
            <li>About</li>
        </ul>
      </div>
      <div className="right">
        <button>Login &#8679</button>
        <p>info</p>
      </div>
    </div>
  )
}
