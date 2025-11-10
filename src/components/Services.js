import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-content">
          <h2 className="services-title">Discover Our Orthodontic Solutions</h2>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>CAD Software Integration</h3>
              <p>
                Seamlessly integrate with leading CAD software for precise orthodontic treatment planning.
                Our platform supports all major STL file formats and provides real-time collaboration tools.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud-Based Platform</h3>
              <p>
                Access your cases anywhere, anytime with our secure cloud-based platform.
                Share treatment plans with your team and clients effortlessly across all devices.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Trial Case Offer</h3>
              <p>
                Start with confidence using our trial case program. Upload your first STL file and
                receive a professional treatment plan at no cost to experience our quality firsthand.
              </p>
            </div>
          </div>

          <div className="services-cta">
            <button className="services-button">Reach out to us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
