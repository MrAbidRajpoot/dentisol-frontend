import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import Pricing from '../components/Pricing';

const PricingPage = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  
  return (
    <div className="page-container">
      <Pricing />
    </div>
  );
};

export default PricingPage;

