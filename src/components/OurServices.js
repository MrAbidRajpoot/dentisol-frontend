import React from 'react';
import './OurServices.css';

const OurServices = () => {
  const services = [
    {
      icon: '🎯',
      title: 'Strategic Orthodontic Solutions',
      description: 'Comprehensive treatment planning using advanced digital technologies to achieve optimal orthodontic outcomes for every patient case.'
    },
    {
      icon: '👥',
      title: 'Personalized Support',
      description: 'Dedicated case managers provide personalized assistance throughout the treatment planning process, ensuring your specific needs are met.'
    },
    {
      icon: '🤝',
      title: 'Trusted Collaborations',
      description: 'Building lasting partnerships with orthodontists worldwide through reliable service delivery and consistent quality standards.'
    }
  ];

  return (
    <section className="our-services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">Get The Benefits Of Digital Aligner Treatment Planning</h2>
          <p className="services-subtitle">
            Experience the advantages of cutting-edge digital orthodontics with our comprehensive service offerings.
          </p>
        </div>

        <div className="services-content">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <span className="emoji-icon">{service.icon}</span>
              </div>
              <div className="service-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
