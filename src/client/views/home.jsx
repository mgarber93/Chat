import React from 'react';
import { Link } from "react-router";

import Navbar from '../components/navbar.jsx';
import '../styles/normalize.css';
import '../styles/raleway.css';
import skeleton from '../styles/skeleton.css';
import custom from '../styles/custom.css';
import github from '../images/github.png';

const home = () =>
  <div className={custom.container}>
    <Navbar />
    <section className={custom.header}>
      <h2 className={skeleton.title}>
        Matt says Hello
      </h2>
      <Link to="/hello"><button className={skeleton.button}> Matt! </button></Link>
    </section>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
  </div>;

export default home;
