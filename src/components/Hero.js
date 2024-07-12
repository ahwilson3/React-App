// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hi There, <br />
          My Name Is <span>Adam Wilson</span>
        </h1>
        <p>
        Experienced with the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos. Able to shape the visual aspects of websites, books, magazines, product packaging, exhibitions and more.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Contact Me</button>
          <button className="btn btn-secondary">View Projects</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="../../images/PXL_20230614_220218756.jpg" alt="Auto Repair" />
      </div>
    </section>
  );
}

export default Hero;

