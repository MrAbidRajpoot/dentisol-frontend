import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Pricing = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const pricingPlans = [
    {
      title: "Crown & Bridge Design",
      price: "$8-20 Per Unit",
      details: [
        "Crown & Bridge Design: US$8 per tooth",
        "Implant Design (Full Arch / All-on-X): US$20 per arch",
        "Note: All pricing is case-dependent. Variations in complexity"
      ]
    },
    {
      title: "Clear Aligner Treatment Planning",
      price: "$30 Per Case",
      details: [
        "Uses our software",
        "Unlimited modification requests",
        "Treatment planning management",
        "All aligner modules & features",
        "Refinement Fee (1 Free, Subsequent at $15)"
      ]
    }
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <h2>Pricing</h2>
      <div ref={ref} className={`pricing-content ${hasIntersected ? 'animate' : 'fade-in'}`}>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <div className="pricing-price">{plan.price}</div>
              <ul className="pricing-details">
                {plan.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

