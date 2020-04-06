import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
      <li><NavLink 
        to="/"
        exact
      >Home</NavLink>
      <li><NavLink 
        to="/movies"
        exact
      >Movies</NavLink></li>
      <NavLink 
        to="/directors"
        exact
      >Directors</NavLink></li>
      <li><NavLink 
        to="/actors"
        exact
      >Actors</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
