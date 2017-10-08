import React from 'react';
import { Route } from 'react-router';
import Home from './views/home.jsx';
import Hello from './views/hello.jsx';
import Splash from './views/splash.jsx';

export const routes = [
  {
    path: "/",
    component: Splash 
  },
  {
    path: "/hello",
    component: Hello
  }
];

