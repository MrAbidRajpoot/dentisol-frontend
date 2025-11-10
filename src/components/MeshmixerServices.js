import React from 'react';
import './MeshmixerServices.css';

const MeshmixerServices = () => {
  const services = [
    {
      title: 'Gum Recession Blocked',
      description: 'Professional blocking of gum recession areas to ensure accurate treatment planning and prevent complications during aligner therapy.',
      icon: '🦷'
    },
    {
      title: 'Undercuts Blocking',
      description: 'Precise identification and blocking of undercuts to optimize aligner fit and treatment efficacy.',
      icon: '🔧'
    },
    {
      title: 'Bar Added',
      description: 'Strategic addition of retention bars and attachments for enhanced treatment control and stability.',
      icon: '📏'
    }
  ];

  return (
    <section className="meshmixer-services">
      <div className="container">
        <div className="meshmixer-header">
          <h2 className="meshmixer-title">Discover Our Meshmixer Services</h2>
          <p className="meshmixer-subtitle">
            Specialized Meshmixer services to enhance your digital orthodontic workflow and ensure optimal treatment outcomes.
          </p>
        </div>

        <div className="meshmixer-grid">
          {services.map((service, index) => (
            <div key={index} className="meshmixer-card">
              <div className="meshmixer-icon">
                <span className="emoji-icon">{service.icon}</span>
              </div>
              <h3 className="meshmixer-service-title">{service.title}</h3>
              <p className="meshmixer-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="meshmixer-cta">
          <button className="meshmixer-button">View All Services</button>
        </div>
      </div>
    </section>
  );
};

export default MeshmixerServices;
