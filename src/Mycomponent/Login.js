import React from 'react';
import './Login.css'; // Import your CSS file for styling
import Header from './Header';
import Footer from './footer';
import Contact from './contact';
import CreateAccount from './CreateAccount';
import { Link } from 'react-router-dom';
const Login = () => {
  return (<>
  {/* <Header/> */}
    <div className="login" style={{ float: 'right', marginTop: '9em', marginRight: '12em', backgroundColor:'transparent' }}>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password" />
        Don't have an account.?<Link to='/createaccount'>Create account</Link>.
        <input type="submit" name="submit" value="Login" />
        {/* <input className='button' type="submit" name="create" value="Sign In" onClick={Link to}/> */}
        <Link className="link" to='/createaccount'>Sign In</Link>
      </form>
    </div>
    {/* <Contact/>
    <Footer/> */}
    </>
  );
};

export default Login;
