import React from 'react';
import './Login.css'; // Import your CSS file for styling
import Header from './Header';
import Footer from './footer';
import Contact from './contact';
const Login = () => {
  return (<>
  {/* <Header/> */}
    <div className="login" style={{ float: 'right', marginTop: '9em', marginRight: '12em', backgroundColor:'white' }}>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
    {/* <Contact/>
    <Footer/> */}
    </>
  );
};

export default Login;
