import React from 'react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/HeroSection.jpeg)`
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Precision Craftsmanship<br />
          Meets Digital Innovation
        </h1>
        <p className="hero-subtitle">
          Advanced CAD/CAM dental laboratory services delivering precision-engineered restorations, 
          crown & bridge work, and clear aligner treatment planning. Partnering with clinicians 
          to achieve exceptional results through expert craftsmanship and cutting-edge technology.
        </p>
        {/* <button className="cta-button" onClick={scrollToServices}>
          Upload Case Files
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
