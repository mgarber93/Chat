import React from 'react';
import skeleton from '../styles/skeleton.css';
import hero from '../styles/hero.css';

import Navbar from '../components/navbar';
import NewUserForm from '../components/NewUserForm.jsx';

const User = ({user}) => 
  <div >
    <Navbar />
    <section className={hero.hero}>
      <div className={skeleton.inner}>
        <br/>
        <br/>
        <NewUserForm />
      </div>
    </section>
  </div>

export default User;