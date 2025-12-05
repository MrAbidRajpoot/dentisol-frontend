import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaSpinner } from 'react-icons/fa';
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
    
    // Prepare email content
    const recipientEmail = 'info.dentisol@gmail.com';
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    
    // Format the email body with all form details
    const emailBody = encodeURIComponent(
      `Hello Dentisol Team,\n\n` +
      `I would like to get in touch with you. Below are my details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;
    
    // Wait for React to render the loading state
    await new Promise(resolve => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(resolve, 300);
        });
      });
    });
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form and loading state after email client opens
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsLoading(false);
    }, 2000);
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
              <span>Allama iqbal town lahore</span>
            </p>
            <p>
              <FaPhone className="icon" />
              <span>07777970074</span>
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

            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="spinner-icon" />
                  Opening Email...
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

