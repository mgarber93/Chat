import React from 'react';
import skeleton from '../styles/skeleton.css';
import hero from '../styles/hero.css';

const Hero = ({name, cssClass, title, body, fontColor}) => (
  <section id={name} className={cssClass || name}>
    <div className={skeleton.inner}>
      <div className={skeleton.copy}>
        <br/>
        <br/>
        <h1 style={{color: fontColor || "white"}}>{title}</h1>
        <p style={{fontSize: "50px", color: fontColor || "white"}}>{body}</p>
      </div>
    </div>
  </section>
);

export default Hero;