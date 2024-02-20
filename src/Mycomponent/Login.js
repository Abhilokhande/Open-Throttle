import React from 'react'

export default function Login() {
  return (
    <div>
      <div className='login'>
        <h1>Login page</h1><br/>
        <label>User name</label>
        <input type="text" name='user'placeholder='Enter username'/><br/>
        <label>Password</label>
        <input type="text" placeholder='Enter Password'/><br/>
        <button>Login</button>
        <button>Sign in</button>
      </div>
    </div>
  )
}
