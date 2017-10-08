import React from 'react';
import custom from '../styles/custom.css';
import skeleton from '../styles/skeleton.css';

const navStyle = {
  fontSize: 50, 
  marginBottom: 15,
  marginTop: 0 
};

const navStyleMed = {
  fontSize: 30, 
  marginBottom: 15,
  marginTop: 10 
};

const Navbar = () => (
  <header className={custom.header}>
    <div>
      <ul>
        <li className={skeleton['u-pull-left']}><a href="/"><h1 style={navStyle}>CHAT</h1></a></li>
        <li className={skeleton['u-pull-right']}><a href="/about"><h1 style={navStyleMed}>About</h1></a></li>
        <li className={skeleton['u-pull-right']}><a href="/user"><h1 style={navStyleMed}>User</h1></a></li>
      </ul>
    </div>
  </header>
);

export default Navbar;