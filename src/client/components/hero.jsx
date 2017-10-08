import React from 'react';
import skeleton from '../styles/skeleton.css';
import hero from '../styles/hero.css';

const headStyle = {
  "font-size": "100px",
  "font-weight": "bold" 
};

const bodyStyle = {
  "font-size": "50px",
  "font-weight": "bold" 
};

const Hero = ({name, cssClass, title, body}) => (
  <section id={name} className={cssClass || name}>
    <div className={skeleton.inner}>
      <div className={skeleton.copy}>
        <br/>
        <br/>
        <h1 style={headStyle}>{title}</h1>
        <p style={bodyStyle}>{body}</p>
      </div>
    </div>
  </section>
);

export default Hero;