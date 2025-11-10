import React from 'react';
import './TreatableCases.css';

const TreatableCases = () => {
  const cases = [
    {
      id: 'cross-bite',
      title: 'Cross Bite',
      image: '/images/cross-bite.svg',
      description: 'Correct misaligned bites with precision treatment planning'
    },
    {
      id: 'crowding',
      title: 'Crowding',
      image: '/images/crowding.svg',
      description: 'Resolve tooth crowding issues effectively'
    },
    {
      id: 'over-bite',
      title: 'Over Bite',
      image: '/images/over-bite.svg',
      description: 'Treat excessive overbite conditions professionally'
    },
    {
      id: 'open-bite',
      title: 'Open Bite',
      image: '/images/open-bite.svg',
      description: 'Close open bite gaps with expert planning'
    },
    {
      id: 'diastema',
      title: 'Diastema',
      image: '/images/diastema.svg',
      description: 'Address gap teeth issues comprehensively'
    },
    {
      id: 'under-bite',
      title: 'Under Bite',
      image: '/images/under-bite.svg',
      description: 'Correct underbite alignment problems'
    }
  ];

  return (
    <section className="treatable-cases" id="cases">
      <div className="container">
        <div className="cases-header">
          <h2 className="cases-title">Explore Our Treatable Cases!</h2>
          <p className="cases-subtitle">
            We specialize in treating a wide range of orthodontic cases with precision
            and expertise using advanced digital treatment planning.
          </p>
        </div>

        <div className="cases-grid">
          {cases.map((caseItem) => (
            <div key={caseItem.id} className="case-card">
              <div className="case-image">
                <img src={caseItem.image} alt={caseItem.title} />
              </div>
              <div className="case-content">
                <h3 className="case-title">{caseItem.title}</h3>
                <p className="case-description">{caseItem.description}</p>
                <button className="case-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatableCases;
