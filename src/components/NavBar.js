import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink
        to='/'
        exact
        activeStyle={{
          background: 'red'
        }}
        >Home</NavLink>
        <NavLink
          to='/movies'
          exact
          activeStyle={{
            background: 'red'
          }}
          >Movies</NavLink>
          <NavLink
            to='/directors'
            exact
            activeStyle={{
              background: 'red'
            }}
            >Directors</NavLink>
            <NavLink
              to='/actors'
              exact
              activeStyle={{
                background: 'red'
              }}
              >Actors</NavLink>
    </div>
  );
};

export default NavBar;
