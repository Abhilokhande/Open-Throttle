import React from 'react';
import "./Login.css";
export default function Login() {
  const loginStyle = {
    float: 'right',
    marginTop: '9em',
    marginRight: '12em'
  };

  return (<>
    <div className="login" style={loginStyle}>
      <h1>Login</h1>

      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" name="submit" value="Login" />
      </form>
    </div>
    </>
  );
}
