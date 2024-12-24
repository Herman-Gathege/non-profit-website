import React from 'react';

function Mission() {
  return (
    <section className="mission-container">
      <div className="mission-content">
        <img src="mission.jpeg" alt="Mission to provide clean water" className="mission-img" />
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            We aim to provide clean, sustainable drinking water to underserved
            communities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
