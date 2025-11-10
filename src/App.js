import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TreatableCases from './components/TreatableCases';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import MeshmixerServices from './components/MeshmixerServices';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <TreatableCases />
      <WhyChooseUs />
      <OurServices />
      <MeshmixerServices />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
