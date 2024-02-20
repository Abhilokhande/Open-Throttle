import React from 'react';
import "./footer.css";
export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
                <div className="about-info">
            <p>This is some additional information about us. You can provide a brief description or any relevant details here.</p>
          </div>
            </div>
        </div>
    </footer>
  )
}
