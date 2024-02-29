import React from 'react';
import "./footer.css";
import "./style.css";
export default function Footer() {
  return (
    <footer className="section footer">
    <div className="footer-container container">
            <div className="footer-content">
                    <a href="#" className="logo-content flex">
                            <i className='bx bx-coffee logo-icon'></i>
                            <span className="logo-text">Open Throttle's</span>
                    </a>

                    <p className="content-description">One-stop for all kind of influencer marketing
                            services - #Open Throttle's”</p>

                    <div className="footer-location flex">
                            <i className='bx bx-map map-icon'></i>

                            <div className="location-text">
                                  Fergusson college , Pune-411001
                            </div>
                    </div>
            </div>

            <div className="footer-linkContent">
                    <ul className="footer-links">
                            <h4 className="footerLinks-title">Services</h4>

                            <li><a href="#" className="footer-link">After sale srvices</a>
                            </li>
                            <li><a href="#" className="footer-link">Insurance</a>
                            </li>
                            <li><a href="#" className="footer-link">Customer Support</a>
                            </li>
                            <li><a href="#" className="footer-link">24/7 Assistance</a></li>
                    </ul>
                    <ul className="footer-links" id="footer1">
                            <h4 className="footerLinks-title">Contact Us</h4>

                            <li><a href="#" className="footer-link">Fergusson college,Pune-411001</a></li>
                            <li><a href="#" className="footer-link">openthrottles123@gmail.com</a></li>
                            <li><a href="#" className="footer-link">+19-9373633071</a></li>
                    </ul>
                    <ul className="footer-links">
                            <h4 className="footerLinks-title">Support</h4>

                            <li><a href="#" className="footer-link">About Us</a></li>
                            <li><a href="#" className="footer-link">FAQs</a></li>
                            <li><a href="#" className="footer-link">Private Policy</a></li>
                            <li><a href="#" className="footer-link">Help Us</a></li>
                    </ul>
            </div>
    </div>
    <div className="footer-copyRight">&#169; Open throttle's. All rigths reserved</div>
</footer>
  )
}
