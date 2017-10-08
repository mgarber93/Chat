import React from 'react';
import skeleton from '../styles/skeleton.css';
import hero from '../styles/hero.css';
import mountain from '../images/mountain-bg.jpeg'

import Navbar from '../components/navbar.jsx';
import Item from '../components/item.jsx';
import Hero from '../components/hero.jsx';


export default (props) => 
  <div >
    <Navbar />

    <Hero 
      name={hero.hero1} 
      cssClass={hero.hero} 
      title="Choice mountains bro" 
      body="Its like im actually there! But sitting at a computer. Wow, the future is intense!"
    />

    <Hero 
      name="content"
      cssClass={hero.hero}
      title="Amazing copy!"
      body="The words are like jumping out at me man!"
    />

    <Hero 
      name={hero.hero2} 
      cssClass={hero.hero} 
      title="Dats forest" 
      body="You could probably fit in there"
    />

    <section className={hero.construction}>
      <h2>ABOUT</h2>
    </section>

  </div>
