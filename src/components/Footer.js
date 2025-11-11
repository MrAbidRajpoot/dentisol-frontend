import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#cases">Treatable Cases</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#orthodontic">Orthodontic Solutions</a></li>
              <li><a href="#meshmixer">Meshmixer Services</a></li>
              <li><a href="#digital-planning">Digital Treatment Planning</a></li>
              <li><a href="#trial-case">Trial Case Program</a></li>
              <li><a href="#consultation">Free Consultation</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact Info</h3>

            <div className="contact-section">
              <h4 className="contact-location">Operation (Pakistan)</h4>
              <div className="contact-details">
                <p>📞 +92-307-941-8709</p>
                <p>📧 info@dentisol.com</p>
                <p>📍 Lahore, Pakistan</p>
              </div>
            </div>

            <div className="contact-section">
              <h4 className="contact-location">Headquarter (UAE)</h4>
              <div className="contact-details">
                <p>📞 +971-XX-XXX-XXXX</p>
                <p>📧 uae@dentisol.com</p>
                <p>📍 Dubai, UAE</p>
              </div>
            </div>

            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📷</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">
            <img src="/images/dentisole.svg" alt="Dentisol" />
          </div>
          <p className="copyright">
            © 2025 Dentisol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
