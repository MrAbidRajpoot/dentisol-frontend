import React from 'react';
import { FaCamera, FaDesktop, FaCog, FaCheckCircle } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AlignerDigital  = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const steps = [
    {
      number: 1,
      icon: <FaCamera />,
      title: "Digital Data Acquisition",
      description: "Using a state-of-the-art intraoral scanner, we capture highly accurate 3D digital impressions of both the upper and lower arches in just a few minutes. We also record a precise bite registration and take a complete series of high-resolution clinical photographs (including frontal, profile, smile, and intraoral views). The entire process is completely radiation-free, comfortable, and eliminates the need for traditional messy impressions."
      
    },
    {
      number: 2,
      icon: <FaDesktop />,
      title: "Digital Treatment Setup",
      description: "We begin by clearly defining your final treatment goals, including perfect alignment, midline correction, and ideal bite relationship. Using advanced 3D software, we then simulate precise virtual tooth movements—controlling tip, torque, rotation, and arch expansion as needed. Necessary attachments are strategically placed on specific teeth for optimal control, and interproximal reduction (IPR) is carefully planned where required. Every movement is staged within safe biological limits to ensure healthy, predictable, and comfortable tooth movement throughout the entire treatment."
    }
  ];

  return (
    <section id="cad-process" className="section cad-process-section">
      <h2>Aligner Digital set up process</h2>
      <div ref={ref} className={`cad-process-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlignerDigital ;

