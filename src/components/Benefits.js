import React from 'react';
import { FaBullseye, FaClock, FaCog, FaPalette, FaShieldAlt } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Benefits = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const benefits = [
    {
      icon: <FaBullseye />,
      title: "Unmatched Accuracy",
      description: "Digital precision ensures perfect fit and optimal function for every restoration."
    },
    {
      icon: <FaClock />,
      title: "Faster Turnaround Times",
      description: "Streamlined digital workflow reduces production time without compromising quality."
    },
    {
      icon: <FaCog />,
      title: "Superior Fit and Function",
      description: "Advanced CAD/CAM technology delivers restorations with exceptional marginal fit and occlusal harmony."
    },
    {
      icon: <FaPalette />,
      title: "Highly Esthetic Results",
      description: "Expert craftsmanship and premium materials create natural-looking, lifelike restorations."
    },
    {
      icon: <FaShieldAlt />,
      title: "Consistency and Reliability",
      description: "Standardized processes and quality control ensure consistent excellence in every case."
    }
  ];

  return (
    <section id="benefits" className="section benefits-section">
      <h2>Why Choose Dentisol</h2>
      <div ref={ref} className={`benefits-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

