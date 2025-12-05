import React from 'react';
import Hero from '../components/Hero';
import Introduction from '../components/Introduction';
import Services from '../components/Services';
import CADProcess from '../components/CADProcess';
import Benefits from '../components/Benefits';
import AlignerDigital from '../components/AlignerDigital';
import Testimonial from '../components/Testimonial';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <CADProcess />
      <AlignerDigital />
      <Benefits />
      <Testimonial />
    </main>
  );
};

export default HomePage;

