import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CADProcess from '../components/CADProcess';
import Benefits from '../components/Benefits';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Services />
      <CADProcess />
      <Benefits />
    </main>
  );
};

export default HomePage;

