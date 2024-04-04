import React from 'react'
import Header from './Header'
import Footer from './footer'
import Contact from './contact'
export default function Book() {
  return (
    <div>
         <Header title="Open Throttle's" n2='Sign In' ln2='/createaccount' drop="Login"/>
      <div class="card text-bg-dark">
  <img src={process.env.PUBLIC_URL + '4.jpg'} class="card-img" alt="..."/>
  <div style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
  <div class="card-img-overlay">
  <h1 style={{color:'White',fontStyle:'Bold'}}>Welcome to the booking page.</h1>
  <form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="textbox" class="form-control is-valid" id="validationServer01" placeholder='Name' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div><br/>       
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="textbox" class="form-control is-valid"  id="validationServer02"placeholder='Surname' required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div><br/>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="texboxt" class="form-control is-invalid"  id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" placeholder='username' required/>
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div><br/>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Email</label>
    <input type="email" class="form-control is-valid"  id="validationServer02"placeholder='Enter your Active email' required/>
    <div  id="validationServer03Feedback" class="invalid-feedback">
     valid Email
    </div>
  </div><br/>
  <div class="col-md-4" style={{marginLeft:390}}>
    <label for="validationServer02" class="form-label">Password</label>
    <input type="textbox" class="form-control is-valid" id="validationServer02"placeholder='Create Strong password' required/>
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
    <input type="textbox" class="form-control is-invalid" id="validationServer03"  placeholder='City' aria-describedby="validationServer03Feedback" required/>
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
   <h1><button class="btn btn-primary" type="submit" style={{background:'rgba(255, 255, 255, 0.5)',borderRadius:0,color:'red', fontSize:'20px'}}>Book Now</button></h1>
  </div>
</form>
<h1 style={{color:'yellow'}}>Bullet 350 Specs, Features and Price</h1>
<p style={{textAlign:'center'}}>The Royal Enfield Bullet 350 is powered by a 349 cc air-cooled engine which produces 20.4 PS @ 6100 rpm of power.<br/>
 It has a fuel tank of 13 l and a claimed mileage of 37 kmpl.<br/>
 The Royal Enfield Bullet 350 starts at Rs 1.74 and goes up to Rs 2.16 Lakh (ex-showroom, Delhi). 
 It is available in four variants.</p>
  </div>
  </div>
</div>
<Contact/>
<Footer/>
    </div>
  )
}
