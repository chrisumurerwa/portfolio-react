import React, { useEffect, useState } from 'react';
import data from '../Data/personal-Info.json';
import Image from '../assets/chris.jpg';
import '../Styles/Hero.css';

function Hero() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data.hero);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{info.name}</h1>
        <h2>{info.title}</h2>
        <p>{info.tagline}</p>
      </div>
      <img src={Image} alt="Profile" className="hero-image" />
    </section>
  );
}

export default Hero;
