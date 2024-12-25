import React from 'react';

function Header() {
  return (
    <section className="header-container">
      <img src="hero.jpeg" alt="image-description" className="header-img" />
      <div className="header-text">
        <h2>Water For All</h2>
        <p>Providing clean drinking water to communities in need.</p>
        <button className='volunteer-bttn'>Volunteer with us</button>
      </div>
    </section>
  );
}

export default Header;
