import React, { useEffect, useState } from 'react';
import data from '../Data/Skills.json';
import '../Styles/Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(data.skills || []);
  }, []);

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
