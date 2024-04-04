    import React,{useEffect,useState} from 'react'
    import axios from "axios"
    import Header from './Header'
    import Footer from './footer'
    import Contact from './contact'
    import "./header.css";
    import { Link, useNavigate } from 'react-router-dom';
    export default function CreateAccount() {
     

  const [Fname,setFname]=useState('')
  const [Lname,setLname]=useState('')
  const [Email,setEmail]=useState('')
  const [City,setCity]=useState('')
  const [userName,setName]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
    e.preventDefault();
    try{
      await  axios.post("http://localhost:3000/createaccount",{
        userName,password,Fname,Lname,Email,City
      })
      .then(
        res=>{
          if(res.data="exist"){
           alert("User alredy exist....")
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
            return(
    <>
            <Header title="Open Throttle's"/>
            <div className="background-page">
            <img src={process.env.PUBLIC_URL + '/login.jpg'}  alt="Background" className="background-image" />
            <div className='createacc'>
                <h1>Sign up for Royal Enfield</h1>
                <form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="textbox" class="form-control is-valid"  onChange={(e)=>{setFname(e.target.value)}} id="validationServer01" placeholder='Name' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div><br/>       
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="textbox" class="form-control is-valid" onChange={(e)=>{setLname(e.target.value)}} id="validationServer02"placeholder='Surname' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div><br/>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="texboxt" class="form-control is-invalid"  onChange={(e)=>{setName(e.target.value)}} id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder='username' required/>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div><br/>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Email</label>
    <input type="email" class="form-control is-valid" onChange={(e)=>{setEmail(e.target.value)}} id="validationServer02"placeholder='Enter your Active email' required/>
    <div  id="validationServer03Feedback" class="invalid-feedback">
     valid Email
    </div>
  </div><br/>
  <div class="col-md-4" style={{marginLeft:390}}>
    <label for="validationServer02" class="form-label">Password</label>
    <input type="textbox" class="form-control is-valid" onChange={(e)=>{setPassword(e.target.value)}} id="validationServer02"placeholder='Create Strong password' required/>
    <div  id="validationServer03Feedback" class="invalid-feedback">
    Password
    </div>
  </div><br/>
  <div class="col-md-6" style={{marginTop:50}}><h3 style={{color:'white'}}>Gender</h3>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label style={{color:'white'}}  class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label style={{color:'white'}} class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
  <label style={{color:'white'}} class="form-check-label" for="inlineRadio3">Other</label>
</div>
  </div>
  <div class="col-md-6"style={{marginLeft:1}}>
    <label  for="validationServer03" class="form-label">City</label>
    <input type="textbox" class="form-control is-invalid" id="validationServer03" onChange={(e)=>{setCity(e.target.value)}} placeholder='City' aria-describedby="validationServer03Feedback" required/>
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div><br/>
  <div class="col-md-6">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required   >
      <option selected disabled value="">Choose...</option>
      <option>Maharashtra</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>    <br/>
  <div class="col-12">
   <h1><button class="btn btn-primary" type="submit" style={{background:'rgba(255, 255, 255, 0.5)',borderRadius:0,color:'red', fontSize:'20px'}}>Submit</button></h1>
  </div>
</form>
            </div>
            </div>
            <Contact/>
            <Footer/>
    </>  
    )
    }
