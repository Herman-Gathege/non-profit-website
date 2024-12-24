import React from 'react';

function DonateButton() {
  return (
    <section className="donate-container">
      <div className="donate-content">
        <img src="donate.jpeg" alt="Donation campaign" className="donate-img" />
        <div className="donate-text">
          <h2>Donate Now</h2>
          <p>Your contribution helps provide clean water to those in need.</p>
          <button className="donate-btn">Donate</button>
        </div>
      </div>
    </section>
  );
}

export default DonateButton;
