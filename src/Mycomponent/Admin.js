import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
export default function Admin(props) {
  const [user, setName] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  const check=()=>{
      if(user=='abhi' && password=='123456')
      {
        navigate('/users');
      }
      else{
        alert("user correct credentials");
        navigate('/addminlogin');
      }
  }
  return (
    <div>
       <div className="login" style={{ float: 'right', marginTop: '9em', marginRight: '12em', backgroundColor:'transparent' }}>
      <h1>{props.heading}</h1>
      <form onSubmit={check}>
        <label>Username</label>
        <input type="text" name="username" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password"onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter Password" />
        {/* Don't have an account.?<Link to='/createacco'>Create account</Link>. */}
        <input type="submit" name="submit" value="Login" />
        {/* <input className='button' type="submit" name="create" value="Sign In" onClick={Link to}/> */}
    
      </form>
    </div>
    </div>
  )
}
