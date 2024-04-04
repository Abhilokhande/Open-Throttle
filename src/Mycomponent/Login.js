
import React,{useEffect,useState} from 'react'
import axios from "axios"
import './Login.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
const Login = (props) => {
const history=useNavigate();

  const [userName,setName]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();
    try{
      await  axios.post("http://localhost:3000/login",{
        userName,password
      })
      .then(
        res=>{
          if(res.data="exist"){
           history("/")
           alert("Login succefull..")
          }
          else if(res.data="notexist"){
            alert("user have not sign in ")
           }
        }
      )
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
    }catch(e){
      console.log(e);
    }
  }
  return (<>
  {/* <Header/> */}
    <div className="login" style={{ float: 'right', marginTop: '9em', marginRight: '12em', backgroundColor:'transparent' }}>
      <h1>{props.heading}</h1>
      <form action='POST'>
        <label>Username</label>
        <input type="text" name="username" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password"onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
        Don't have an account.?<Link to='/createaccount'>Create account</Link>.
        <input type="submit" name="submit" value="Login" onClick={submit} />
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
