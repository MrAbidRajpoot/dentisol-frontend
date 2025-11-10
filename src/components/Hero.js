import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Shaping Smiles,<br />
            <span className="hero-title-accent">Perfecting Confidence.</span>
          </h1>

          <p className="hero-description">
            Transform your orthodontic practice with our cutting-edge digital solutions.
            Upload your STL files and receive professional treatment plans starting at just $50.
            Experience the future of orthodontics with our trial case offer.
          </p>

          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">📁</span>
              <span>STL File Upload</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Starting at $50</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⏱️</span>
              <span>3-Hour Turnaround</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="hero-cta-primary">Start Your Trial Case</button>
            <button className="hero-cta-secondary">Learn More</button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Cases Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
