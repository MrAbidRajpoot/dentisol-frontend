import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Only update active section if we're on the home page
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'cad-process', 'benefits'];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (current) {
          setActiveSection(current);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Store section to scroll to when navigating from other pages
  const [pendingSection, setPendingSection] = useState(null);

  // Handle scrolling when navigating to home page
  useEffect(() => {
    if (location.pathname === '/' && pendingSection) {
      setTimeout(() => {
        const element = document.getElementById(pendingSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(pendingSection);
          setPendingSection(null);
        }
      }, 100);
    }
  }, [location.pathname, pendingSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // Already on home page, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to home page and set pending section to scroll to
      setPendingSection(sectionId);
      navigate('/');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-container">
          <img alt="Dentisol Logo" className="logo-image" src='/FinalLogo.png' width={35}/>
          <Link to="/" className="logo" onClick={() => { if (location.pathname === '/') scrollToSection('home'); }}>
            <span className="logo-d">D</span><span className="logo-text">entisol.</span>
          </Link>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' && activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { 
                e.preventDefault();
                setIsMenuOpen(false);
                handleSectionClick(e, 'home');
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' && activeSection === 'services' ? 'active' : ''}
              onClick={(e) => { 
                handleSectionClick(e, 'services');
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' && activeSection === 'cad-process' ? 'active' : ''}
              onClick={(e) => { 
                handleSectionClick(e, 'cad-process');
              }}
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className={location.pathname === '/pricing' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
