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
                            <span className="logo-text">Brand Bros</span>
                    </a>

                    <p className="content-description">One-stop for all kind of influencer marketing
                            services - #Brand Bros”</p>

                    <div className="footer-location flex">
                            <i className='bx bx-map map-icon'></i>

                            <div className="location-text">
                                    Narayan Peth,Badshah Boys, Pune-411041
                            </div>
                    </div>
            </div>

            <div className="footer-linkContent">
                    <ul className="footer-links">
                            <h4 className="footerLinks-title">Services</h4>

                            <li><a href="#" className="footer-link">Instagram Influencer Marketing</a>
                            </li>
                            <li><a href="#" className="footer-link">YouTube Influencer Marketing</a>
                            </li>
                            <li><a href="#" className="footer-link">Twitter Influencer Marketing</a>
                            </li>
                            <li><a href="#" className="footer-link">Brand Placement</a></li>
                    </ul>
                    <ul className="footer-links" id="footer1">
                            <h4 className="footerLinks-title">Contact Us</h4>

                            <li><a href="#" className="footer-link">Narayan Peth,Pune-411041</a></li>
                            <li><a href="#" className="footer-link">pranavgare123@gmail.com</a></li>
                            <li><a href="#" className="footer-link">8551069413</a></li>
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
    <div className="footer-copyRight">&#169; Brand Bros. All rigths reserved</div>
</footer>
  )
}
