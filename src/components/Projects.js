// src/components/About.js
import React, { useState } from 'react';
import './Projects.css';

const projects = [

  {
    id: 1,
    title: 'Premier One',
    description: 'For this local client, they wanted to create a sporty and eye-catching website that stook out from the competition.',
    imgSrc: '../../images/premier-one-snapshot.png',
  },
  {
    id: 2,
    title: 'Texas Auto',
    description: 'Having just opened, Texas Auto wanted to create a site that was friendly but still edgy.',
    imgSrc: '../../images/texas-auto-snapshot.png',
  },
  {
    id: 3,
    title: 'Irish Mikes',
    description: 'Going for more of a clean and rustic feel, Irish Mikes was the first site that I used wood grain in the design',
    imgSrc: '../../images/irish-mikes-snapshot.png',
  },
];

function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return (
    <div className="projects">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.imgSrc}
            alt={project.title}
            onClick={() => handleImageClick(project.imgSrc)}
          />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
      {selectedImg && (
        <div className="lightbox" onClick={handleClose}>
          <div className="lightbox-content">
            <img src={selectedImg} alt="Enlarged project" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
