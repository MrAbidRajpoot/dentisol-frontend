import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="contact-info">
              <span className="phone">📞 +92-307-941-8709</span>
              <span className="email">✉️ info@orthoalignsolution.com</span>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src="/images/logo.svg" alt="OrthoAlign Solution" />
            </div>

            <ul className="nav-menu">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                <a href="#services" className="nav-link">Services ▼</a>
                {isServicesOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#orthodontic">Orthodontic Solutions</a></li>
                    <li><a href="#meshmixer">Meshmixer Services</a></li>
                    <li><a href="#digital-planning">Digital Treatment Planning</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="#cases" className="nav-link">Treatable Cases</a>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => setIsBlogOpen(true)} onMouseLeave={() => setIsBlogOpen(false)}>
                <a href="#blog" className="nav-link">Blog ▼</a>
                {isBlogOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="#latest-posts">Latest Posts</a></li>
                    <li><a href="#case-studies">Case Studies</a></li>
                    <li><a href="#tips">Orthodontic Tips</a></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>

            <div className="nav-actions">
              <button className="cta-button">Start Your Trial Case</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
