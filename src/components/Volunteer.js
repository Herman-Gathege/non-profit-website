// src/components/Volunteer.js
import React, { useState } from 'react';

function Volunteer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for volunteering, ${name}!`);
  };

  return (
    <section className="volunteer">
      <h2>Volunteer with Us</h2>
      <img src="voluteer.jpeg" alt="image-description" />

      <p>Your help is crucial to providing clean water to those in need. Please fill out the form below to get involved!</p>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
}

export default Volunteer;
