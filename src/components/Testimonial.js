import React from 'react';
import { FaStar, FaLinkedin } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <p className="testimonial-label">Why Choose Dentisol</p>
        <h2 className="testimonial-heading">Dr. Ashtiaq Ahmad Recommends Dentisol</h2>
        <div className="testimonial-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="testimonial-quote">
          "If you're looking for a reliable partner to support your digital treatment needs, I highly encourage you to connect with Dentisol. With their experience, skill, and commitment to excellence, I'm confident they can deliver exceptional value to your practice or business."
        </p>
        <div className="testimonial-author">
          <img 
            src="/testimonial-photo.jpeg" 
            alt="Dr. Ashtiaq Ahmad" 
            className="testimonial-image"
          />
          <div className="testimonial-author-info">
            <div className="testimonial-author-name">
              <span>Dr. Ashtiaq Ahmad</span>
              <a 
                href="https://www.linkedin.com/in/ashtiaq-ahmad-66b51010/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="testimonial-linkedin"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="testimonial-author-title">BDS, C Ortho</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

