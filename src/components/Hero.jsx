import React, { useEffect, useState } from 'react';
import data from '../Data/personal-Info.json';
import Image from '../assets/Chris.jpg';
import '../Styles/Hero.css';

function Hero() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data.hero);
  }, []);

  return (
    <section className="hero hero-split" id="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hi <span role="img" aria-label="waving hand">👋</span><span role="img" aria-label="waving hand">👋</span> I'm <span className="hero-name">UMURERWA<br/>Christine</span>
        </h1>
        <div className="hero-subtitle-split">{info.subtitle}</div>
      </div>
      <div className="hero-right">
        <img src={Image} alt="Profile" className="hero-img-split" />
      </div>
    </section>
  );
}

export default Hero;
