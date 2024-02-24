import React from 'react'
import "./style.css";
export default function contact() {
  return (
    <div>
      <section className="contactus" id="contactus">

<div className="section-header">
        <div className="container">
                <h2>Contact Us</h2>
                <p>Give us a call or drop by anytime, we endeavour to answer all enquiries
                        within 24 hours on business days.
                        We will be happy to answer your questions.</p>
        </div>
</div>

<div className="container">
        <div className="row">

                <div className="contact-info">
                        <div className="contact-info-item">
                                <div className="contact-info-icon">
                                        <i className="fas fa-home"></i>
                                </div>

                                <div className="contact-info-content">
                                        <h4>Address</h4>
                                        <p>Narayan Peth Badshah Boys,Pune-411041</p>
                                </div>
                        </div>

                        <div className="contact-info-item">
                                <div className="contact-info-icon">
                                        <i className="fas fa-phone"></i>
                                </div>

                                <div className="contact-info-content">
                                        <h4>Phone</h4>
                                        <p>8551069413</p>
                                </div>
                        </div>

                        <div className="contact-info-item">
                                <div className="contact-info-icon">
                                        <i className="fas fa-envelope"></i>
                                </div>

                                <div className="contact-info-content">
                                        <h4>Email</h4>
                                        <p>pranavgare123@gmail.com</p>
                                </div>
                        </div>
                </div>

                <div className="contact-form">
                        <form action="" id="contact-form">
                                <h2>Send Message</h2>
                                <div className="input-box">
                                        <input type="text" required="true" name=""/>
                                        <span>Full Name</span>
                                </div>

                                <div className="input-box">
                                        <input type="email" required="true" name=""/>
                                        <span>Email</span>
                                </div>

                                <div className="input-box">
                                        <textarea required="true" name=""></textarea>
                                        <span>Type your Message...</span>
                                </div>

                                <div className="input-box">
                                        <input type="submit" value="Send" name=""/>
                                </div>
                        </form>
                </div>

        </div>
</div>
</section>

    </div>
  )
}
