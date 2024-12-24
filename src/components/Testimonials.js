// src/components/Testimonials.js
import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What People Are Saying</h2>
      <img src="testimony.jpeg" alt="image-description" />

      <div className="testimonial">
        <p>"Water For All has truly made a difference in my life. The work they do is incredible!"</p>
        <p>- Sarah M., Donor</p>
      </div>
      <div className="testimonial">
        <p>"Being a volunteer with this organization has been such a rewarding experience. I'm proud to help!"</p>
        <p>- John D., Volunteer</p>
      </div>
    </section>
  );
}

export default Testimonials;
