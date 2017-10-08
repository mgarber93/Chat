import React from 'react';
import skeleton from '../styles/skeleton.css';
import hero from '../styles/hero.css';
import mountain from '../images/mountain-bg.jpeg'

import Navbar from '../components/navbar.jsx';
import Item from '../components/item.jsx';
import Hero from '../components/hero.jsx';
import '../styles/normalize.css';
import '../styles/raleway.css';

export default (props) => 
  <div >
    <Navbar />

    <Hero 
      name={hero.hero1} 
      cssClass={hero.hero} 
      title="Chat" 
      body="Its like you are actually there!"
    />

    <Hero 
      name="content"
      cssClass={hero.hero}
      title="Amazing!"
      body="The words are like jumping out at me man!"
    />

    <Hero 
      name={hero.hero2} 
      cssClass={hero.hero} 
      title="Dats forest" 
      body="If your friends were in there, you could talk to them"
    />

    <section className={hero.construction} style={{minHeight: '20px'}} />

  </div>
