import React from "react";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Volunteer from "./components/Volunteer";
import Testimonials from "./components/Testimonials";
import DonateButton from "./components/DonateButton";
import AboutUs from "./components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Mission />
      <DonateButton />
      <AboutUs />
      <Testimonials />
      <Volunteer />
      <footer className="mt-5 text-center">
        <p>
          Contact us at:{" "}
          <a href="mailto:info@waterforall.org">info@waterforall.org</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
