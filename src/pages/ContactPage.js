import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaSpinner, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContactPage = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Get API URL from environment variable or use default
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      
      // Send form data to backend API
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success - show success toast and reset form
      toast.success(data.message || 'Thank you for your message! We will get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      // Error handling
      console.error('Email sending failed:', error);
      const errorMessage = error.message || 'Sorry, there was an error sending your message. Please try again or contact us directly at info.dentisol@gmail.com';
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    <div className="page-container">
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <div ref={ref} className={`contact-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <h5>Email:</h5>
            <p>
              <FaEnvelope className="icon" />
              <span>info.dentisol@gmail.com</span>
            </p>
            <h5>Phone:</h5>
            <p>
              <FaPhone className="icon" />
              <FaWhatsapp className="icon" />
              <span>+44 7777970074 (UK)</span>
            </p>
            <p>
              <FaPhone className="icon" />
              <FaWhatsapp className="icon" />
              <span>+92 3083443989 (Pk)</span>
            </p>
            <p>
              <FaPhone className="icon" />
              <FaWhatsapp className="icon" />
              <span>+92 3004362803 (Pk)</span>
            </p>
            <h5>Address:</h5>
            <p>
              <FaMapMarkerAlt className="icon" />
              <span>Allama Iqbal Town Lahore, Pakistan</span>
            </p>
            <p>
              <FaMapMarkerAlt className="icon" />
              <span>25, Bullingdon road, oxford, OX4 1QH, UK</span>
            </p>
            <h5>Opening Hours:</h5>
            <p>
              <FaClock className="icon" />
              <span>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat / Sun: Closed</span>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your case requirements..."
                rows="5"
              ></textarea>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '-0.5rem', marginBottom: '1rem' }}>
              <i>Note: Case file uploads available through email.</i>
            </p>

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="spinner-icon" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

