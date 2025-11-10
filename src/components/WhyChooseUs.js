import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '/images/price-icon.svg',
      title: 'Market-beating Price',
      description: 'Competitive pricing starting at just $50 per case with no hidden fees.'
    },
    {
      icon: '/images/expert-icon.svg',
      title: 'Expert Design Team',
      description: 'Highly skilled orthodontic specialists with years of experience in digital treatment planning.'
    },
    {
      icon: '🔍',
      title: 'Mandatory Orthodontist Review',
      description: 'Every treatment plan undergoes thorough review by licensed orthodontists.'
    },
    {
      icon: '⏱️',
      title: '3-hour Turnaround',
      description: 'Fast delivery without compromising on quality and precision.'
    },
    {
      icon: '♻️',
      title: 'Unlimited Revisions',
      description: 'Free revisions until you are completely satisfied with the treatment plan.'
    },
    {
      icon: '🔒',
      title: 'Secure Platform',
      description: 'HIPAA-compliant platform ensuring complete patient data security.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-header">
          <h2 className="why-choose-title">The OrthoAlign Solution Difference</h2>
          <p className="why-choose-subtitle">
            Why orthodontists worldwide choose our platform for their digital treatment planning needs.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon.startsWith('/') ? (
                  <img src={feature.icon} alt={feature.title} />
                ) : (
                  <span className="emoji-icon">{feature.icon}</span>
                )}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
