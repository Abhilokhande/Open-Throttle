
import React,{useEffect,useState} from 'react'
import axios from "axios"
import './Login.css'; // Import your CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [Uname,setName]=useState('');
  const [password,setPassword]=useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      fetchUsers();
  }, []);

  const fetchUsers = () => {
      axios.get('http://localhost:3001/users')
          .then(response => {
              setUsers(response.data);
          })
          .catch(error => {
              console.error('Error fetching users:', error);
          });
  };
const check=()=>{
  if(users.UserName==Uname && users.Password==password)
  {
    alert("login success......");
    navigate('/');
  }
  else{
    alert("incorrect login crediantial.....");
    navigate('/login');
  }
}
  return (<>
  {/* <Header/> */}
    <div className="login" style={{ float: 'right', marginTop: '9em', marginRight: '12em', backgroundColor:'transparent' }}>
      <h1>{props.heading}</h1>
      <form action='POST' onSubmit={check} >
        <label>Username</label>
        <input type="text" name="username" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Username" />
        <label>Password</label>
        <input type="password" name="password"onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" />
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
