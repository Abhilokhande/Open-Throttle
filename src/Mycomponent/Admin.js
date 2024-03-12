import React from 'react'
import './Login.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';
export default function Admin(props) {
  return (
    <div>
       <div className="login" style={{ float: 'right', marginTop: '9em', marginRight: '12em', backgroundColor:'transparent' }}>
      <h1>{props.heading}</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password" />
        {/* Don't have an account.?<Link to='/createacco'>Create account</Link>. */}
        <input type="submit" name="submit" value="Login" />
        {/* <input className='button' type="submit" name="create" value="Sign In" onClick={Link to}/> */}
    
      </form>
    </div>
    </div>
  )
}
