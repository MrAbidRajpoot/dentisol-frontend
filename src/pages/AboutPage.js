import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AboutPage = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  return (
    <div className="page-container">
      <section id="about" className="section">
        <h2>About Dentisol</h2>
        <div ref={ref} className={`about-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
          <div className="about-text">
            <h3>From Scan to Smile</h3>
            <p>
              At Dentisol, we combine digital innovation with handcrafted artistry to deliver 
              exceptional CAD/CAM dental laboratory services. Our advanced manufacturing capabilities 
              empower clinicians with precision-engineered restorations that meet the highest standards 
              of quality, fit, and esthetics.
            </p>
            <p>
              Our comprehensive digital workflow encompasses every stage of production—from high-resolution 
              digital scanning and computer-aided design (CAD) to computer-aided manufacturing (CAM) and 
              expert finishing. This integrated approach ensures consistent quality, faster turnaround times, 
              and superior clinical outcomes.
            </p>
            <p>
              We work with a wide range of premium materials and technologies, including Zirconia, Lithium 
              disilicate, PMMA, Titanium, and Cobalt-chromium alloys. Our state-of-the-art equipment and 
              skilled technicians enable us to produce everything from single-unit crowns and bridges to 
              full-arch implant restorations, clear aligner treatment planning, and complex prosthetic solutions.
            </p>
            <p>
              Our commitment to quality, precision, and clinician support drives everything we do. We understand 
              that each case is unique, and we work closely with our clinical partners to ensure that every 
              restoration meets their exact specifications and exceeds their expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

