import React from 'react';
import { FaCamera, FaDesktop, FaCog, FaCheckCircle } from 'react-icons/fa';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CADProcess = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const steps = [
    {
      number: 1,
      icon: <FaCamera />,
      title: "Digital Scanning",
      description: "High-resolution digital impressions and intraoral scanners capture precise anatomical data for accurate restoration design."
    },
    {
      number: 2,
      icon: <FaDesktop />,
      title: "Computer-Aided Design (CAD)",
      description: "Our expert designers create precise digital restorations including crowns, bridges, full-arch solutions, implant abutments, inlays, onlays, veneers, implant bars, and night guards."
    },
    {
      number: 3,
      icon: <FaCog />,
      title: "Computer-Aided Manufacturing (CAM)",
      description: "State-of-the-art milling machines and 3D printers transform digital designs into physical restorations using premium materials including Zirconia, Lithium disilicate, PMMA, Titanium, and Cobalt-chromium."
    },
    {
      number: 4,
      icon: <FaCheckCircle />,
      title: "Expert Finishing and Quality Control",
      description: "Master ceramists apply artistic detail, layer ceramics, perfect morphology, and ensure lifelike translucency. Every restoration undergoes rigorous quality checks to ensure esthetic harmony and functional excellence."
    }
  ];

  return (
    <section id="cad-process" className="section cad-process-section">
      <h2>Our CAD/CAM Process</h2>
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

export default CADProcess;

