import React from 'react';
import { FaCrown, FaLaptop, FaTeeth, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCrown />,
      title: "Porcelain-Fused-to-Metal (PFM) Crown & Bridge",
      description: "Precision. Strength. Aesthetics. High-quality crown and bridge restorations designed for accuracy, durability, and natural beauty.",
      image: "/porcelainFusedMetalCrowns.jpg"
    },
    {
      icon: <FaLaptop />,
      title: "CAD/CAM Digital Solutions",
      description: "Advanced digital workflow combining CAD/CAM technology with expert craftsmanship for precision-engineered restorations.",
      image: "/cad-cam.jpeg"
    },
    {
      icon: <FaTeeth />,
      title: "Clear Aligner Treatment Planning",
      description: "Complete digital clear aligner set-up solutions for predictable, efficient, and esthetically pleasing orthodontic treatments.",
      image: "/clear-aligner-treatment-plans-scaled.jpg"
    },
    {
      icon: <FaCheckCircle />,
      title: "Expert Finishing & Quality Control",
      description: "Artistic detail, layering ceramics, perfecting morphology, and ensuring lifelike translucency with strict quality checks.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image-container">
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
              />
            </div>
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
