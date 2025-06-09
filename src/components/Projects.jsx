import React, { useEffect, useState } from 'react';
import data from '../Data/projects.json';
import '../Styles/Project.css' 


function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(data.projects || []);
  }, []);
  

  return (
    <section className="projects-section" id='projects'>
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map(project => (
          <div className="project-card" key={project.id1}>
            <img src={project.image} alt={project.title} className="project-image" />
                
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span className="tech-badge" key={index}>{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="demo">Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="github">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
