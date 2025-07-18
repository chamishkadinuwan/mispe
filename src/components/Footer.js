// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column" style={{ paddingLeft: '20px' }}>
            <h3>MISP E+ 🇱🇰</h3>
            <p>Know Your Numbers, Plan Your Future.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/destinations">Centers</a></li>
              <li><a href="/guides">Contact US</a></li>
              <li><a href="/booking">Login</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Us</h4>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Colombo, Sri Lanka</li>
              <li><i className="fas fa-phone"></i> +94 112 345 678</li>
              <li><i className="fas fa-envelope"></i> info@MispE.lk</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Newsletter</h4>
            <p>Subscribe for travel tips and offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ textAlign: 'center',paddingBottom:'30px'  }}>
          <p>&copy; {new Date().getFullYear()} MISP E+ Sri Lanka. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;