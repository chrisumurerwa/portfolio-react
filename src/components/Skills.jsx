import React, { useEffect, useState } from 'react';
import data from '../Data/Skills.json';
import '../Styles/Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data.skills || []);
  }, []);

  return (
    <section className="skills-section" id='skills'>
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
