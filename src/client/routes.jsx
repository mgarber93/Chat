import React from 'react';
import { Route } from 'react-router';
import Splash from './views/splash.jsx';
import User from './views/user.jsx';

export const routes = [
  {
    path: "/",
    component: Splash 
  },
  {
    path: "/user",
    component: User
  }
];

