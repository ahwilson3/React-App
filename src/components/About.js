// src/components/About.js
import React from 'react';
import '../styles.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="../../images/PXL_20201009_202540021.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h3></h3>
          <h2>About Me</h2>
          <p>
          Hi! I'm Adam. Raleigh native who has a passion for Web and UX/UI Design. I love creating awesome websites that capture the client's branding and image. 76% of consumers look at online presence before physically visiting a business. Having a custom website that stands out from the competition drives sells and improves your company's reputation with customers.
          
          I am currently a Web Designer for Autoshop Solutions! I love designing websites for our clients in the automotive industry. I get to learn new things every day by working together with my team to develop new design techniques. My goal is to create award-winning websites that clients and users will enjoy!
          </p>
          <div className="about-details">
            <p><span>Name :</span> Adam Wilson</p>
            <p><span>Phone :</span> (123) 456-7890</p>
            <p><span>Email :</span> ahwilson3@my.waketech.edu</p>
          </div>
          <br />
          <h4>My Skills</h4>
          <div className="about-interests">
            <div className="interest">
              <span>Graphic Design</span>
            </div>
            <div className="interest">
              <span>Web Design</span>
            </div>
            <div className="interest">
              <span>UX Design</span>
            </div>
            <div className="interest">
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
