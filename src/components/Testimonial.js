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
      <div className="testimonial-divider"></div>
      <div className="testimonial-container">
        <h2 className="testimonial-heading">Dr. Ahmer Mohsin Recommends Dentisol</h2>
        <div className="testimonial-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="testimonial-quote">
          "Dentisol delivers exactly what modern clinics need—precision, speed, and reliability in digital aligner and CAD/CAM services.We trust Dentisol with our most demanding cases. Their digital aligner setups and CAD/CAM solutions consistently meet high clinical standards."
        </p>
        <div className="testimonial-author">
        <img 
            src="/testimonial2.jpg" 
            alt="Dr. Ahmer Mohsin" 
            className="testimonial-image"
          />
          <div className="testimonial-author-info">
            <div className="testimonial-author-name">
              <span>Dr. Ahmer Mohsin</span>
            </div>
            <p className="testimonial-author-title">BDS RDS(PMDC)</p>
            <p className="testimonial-author-title">FCPS,( R ) Prosthodontics</p>
          </div>
        </div>
      </div>
      <div className="testimonial-divider"></div>
      <div className="testimonial-container">
        <h2 className="testimonial-heading">Dr. Ehsan Hashmi Recommends Dentisol</h2>
        <div className="testimonial-stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="testimonial-quote">
          "Dentisol has transformed our digital orthodontic and Prostho workflow. Their precise aligner setups and high-quality CAD/CAM work help us deliver faster, more predictable results to our patients.With Dentisol, every aligner setup is accurate, efficient, and ready to perform. Their CAD/CAM expertise saves us time while improving treatment outcomes."
        </p>
        <div className="testimonial-author">
          <img 
            src="/testimonial3.jpeg" 
            alt="Dr. Ehsan Hashmi" 
            className="testimonial-image"
          />
          <div className="testimonial-author-info">
            <div className="testimonial-author-name">
              <span>Dr. Ehsan Hashmi</span>
            </div>
            <p className="testimonial-author-title">BDS C-ortho C-Implant</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

