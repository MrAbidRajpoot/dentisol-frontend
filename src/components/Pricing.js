import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


const Pricing = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const pricingPlans = [
    {
      title: "Complex Full Arch Digital Setup",
      price: "$30",
      description: "Full-arch orthodontic treatment planning including alignment, rotations, torque, expansion, bite correction, attachments, IPR planning, and staging.",
      
    },
    {
      title: "Aesthetic 3–3 Digital Setup",
      price: "$20",
      description: "Limited treatment from canine-to-canine (upper or lower), focusing on anterior aesthetic alignment and corrections.",
      
    },
    {
      title: "Single Crown Design",
      price: "$5 Single Unit",
      description: "Posterior, premolar, or anterior crown design with occlusal & proximal adjustments.",
     
    },
    {
      title: "Onlay / Inlay Design",
      price: "$5 Single Unit",
      description: "Conservative restoration with precise margin & occlusal anatomy design.",
    
    },
     {
      title: "Veneer Design",
      price: "$8 Single Unit",
      description: "Aesthetic veneer morphology & smile flow design.",
    
    },
     {
      title: "3-Unit Bridge Design",
      price: "$15 Multiple Units",
      description: "Full digital design for a 3-unit bridge (abutments + pontic).",
    
    },
      {
      title: "Full Arch CAD/CAM Design",
      price: "$80 Multiple Units",
      description: "Complete upper or lower arch digital reconstruction ready for milling.",
    
    },
    {
      title: "Single Implant Crown",
      price: "$10",
      description: "Crown design with emergence profile, screw Retained/ Cemented and occlusal scheme.",
    
    },
      {
      title: "Implant Bridge",
      price: "$15 Per Unit",
      description: "Multi-implant restoration with precise path-of-insertion & occlusion.",
    
    }
  ];

  return (
    <section id="pricing" className="section pricing-section">
      <h2>PRICING</h2>
      <div
        ref={ref}
        className={`pricing-content ${hasIntersected ? 'animate' : 'fade-in'}`}
      >
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <div className="pricing-price">{plan.price}</div>

             
              {plan.description && (
                <p className="pricing-description">{plan.description}</p>
              )}

            
              {Array.isArray(plan.features) && plan.features.length > 0 && (
                <ul className="pricing-details">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <br />
      <h4 style={{ fontSize: '1.5rem' }}>Prices as per complexity of the case are negotiable.</h4>
    </section>
  );
};

export default Pricing;