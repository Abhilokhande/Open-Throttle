    import React,{useEffect,useState} from 'react'
    import axios from "axios"
    import Header from './Header'
    import Footer from './footer'
    import Contact from './contact'
    import "./header.css";
    import { Link, useNavigate } from 'react-router-dom';
    export default function CreateAccount() {
     
  const navigate=useNavigate()
  const [Fname,setFname]=useState('')
  const [Lname,setLname]=useState('')
  const [Email,setEmail]=useState('')
  const [City,setCity]=useState('')
  const [UserName,setName]=useState('')
  const [Password,setPassword]=useState('')
  const submit=(e)=>{
    e.preventDefault();
        axios.post("http://localhost:3001/Register",{
        UserName,Password,Fname,Lname,Email,City
      })
      .then(
        result=>{console.log(result)
          navigate('/')
        }
      )
      .catch(e=>{
        alert("wrong details")
        console.log(e)
      })
  }
            return(
    <>
            <Header title="Open Throttle's"/>
            <div className="background-page">
            <img src={process.env.PUBLIC_URL + '/login.jpg'}  alt="Background" className="background-image" />
            <div className='createacc'>
                <h1>Sign up for Royal Enfield</h1>
                <form className="row g-3" onSubmit={submit}>
  <div className="col-md-4">
    <label htmlFor="validationServer01" className="form-label">First name</label>
    <input type="textbox" className="form-control is-valid"  onChange={(e)=>{setFname(e.target.value)}} id="validationServer01" placeholder='Name' required={true}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div><br/>       
  <div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">Last name</label>
    <input type="textbox" className="form-control is-valid" onChange={(e)=>{setLname(e.target.value)}} id="validationServer02"placeholder='Surname' required={true}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div><br/>
  <div className="col-md-4">
    <label htmlFor="validationServerUsername" className="form-label">Username</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="texboxt" className="form-control is-invalid"  onChange={(e)=>{setName(e.target.value)}} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder='username' required={true}/>
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div><br/>
  <div className="col-md-4">
    <label htmlFor="validationServer02" className="form-label">Email</label>
    <input type="email" className="form-control is-valid" onChange={(e)=>{setEmail(e.target.value)}} id="validationServer02"placeholder='Enter your Active email' required={true}/>
    <div  id="validationServer03Feedback" className="invalid-feedback">
     valid Email
    </div>
  </div><br/>
  <div className="col-md-4" style={{marginLeft:390}}>
    <label htmlFor="validationServer02" className="form-label">Password</label>
    <input type="textbox" className="form-control is-valid" onChange={(e)=>{setPassword(e.target.value)}} id="validationServer02"placeholder='Create Strong password' required={true}/>
    <div  id="validationServer03Feedback" className="invalid-feedback">
    Password
    </div>
  </div><br/>
  <div className="col-md-6" style={{marginTop:50}}><h3 style={{color:'white'}}>Gender</h3>
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label style={{color:'white'}}  className="form-check-label" htmlFor="inlineRadio1">Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label style={{color:'white'}} className="form-check-label" htmlFor="inlineRadio2">Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label style={{color:'white'}} className="form-check-label" htmlFor="inlineRadio3">Other</label>
</div>
  </div>
  <div className="col-md-6"style={{marginLeft:1}}>
    <label  htmlFor="validationServer03" className="form-label">City</label>
    <input type="textbox" className="form-control is-invalid" id="validationServer03" onChange={(e)=>{setCity(e.target.value)}} placeholder='City' aria-describedby="validationServer03Feedback" required={true}/>
    <div id="validationServer03Feedback" className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div><br/>
  <div className="col-md-6">
    <label htmlFor="validationServer04" className="form-label">State</label>
    <select className="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required={true}   >
      <option disabled value="">Choose...</option>
      <option>Maharashtra</option>
    </select>
    <div id="validationServer04Feedback" className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>    <br/>
  <div className="col-12">
   <h1><button className="btn btn-primary" type="submit" style={{background:'rgba(255, 255, 255, 0.5)',borderRadius:0,color:'red', fontSize:'20px'}} >Submit</button></h1>
  </div>
</form>
            </div>
            </div>
            <Contact/>
            <Footer/>
    </>  
    )
    }
