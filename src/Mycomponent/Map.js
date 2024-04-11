import React from 'react'
import Header from './Header'
export default function Map() {
  return (
    <div><Header title="Open Throttle's" n2='Home' ln2='/'/>
      <div className="card text-bg-dark">
  <img src={process.env.PUBLIC_URL + '/Image/location.jpg'}  className="card-img" alt="..."/>
  <div className="card-img-overlay">

  </div>
</div>
    </div>
  )
}
