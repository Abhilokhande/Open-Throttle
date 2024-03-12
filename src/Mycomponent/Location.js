import React from 'react'
import { Link } from 'react-router-dom'
export default function Location() {
  return (
    <div style={{textAlign:'center',backgroundColor:'#333' , padding:10}}>
        <div style={{marginLeft:730 , marginRight:730 , marginTop:50}}>
        <img src={process.env.PUBLIC_URL + '/Image/locate.jpg'} style={{alignContent:'center'}}/></div>
      <div style={{marginTop:10}}><Link to="/">Find a Store</Link></div>
    </div>
  )
}
