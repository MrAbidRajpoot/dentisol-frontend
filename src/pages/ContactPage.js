import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContactPage = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="page-container">
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <div ref={ref} className={`contact-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              <FaMapMarkerAlt className="icon" />
              <span>123 Dental Street, Healthcare District<br />New York, NY 10001</span>
            </p>
            <p>
              <FaPhone className="icon" />
              <span>(555) 123-DENTIS</span>
            </p>
            <p>
              <FaEnvelope className="icon" />
              <span>info.dentisol@gmail.com</span>
            </p>
            <p>
              <FaClock className="icon" />
              <span>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM<br />Sun: Closed</span>
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
              Note: Case file uploads available through our portal
            </p>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

