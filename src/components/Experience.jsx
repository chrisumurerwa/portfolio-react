import React, { useEffect, useState } from 'react';
import data from '../Data/experience.json';
import '../Styles/Experience.css';

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(data.experiences || []);
  }, []);

  return (
    <section className="experience-section" id='experience'>
      <h2 className="experience-title"> Experience</h2>
      <div className="experience-grid">
        {experience.map((expe, index) => (
          <div key={index} className="experience-card">
            <h3 className="experience-role">{expe.role}</h3>
            <p className="experience-company">{expe.company}</p>
            <p className="experience-duration">{expe.duration}</p>
            <p className="experience-description">{expe.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
