import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/header.scss';

const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/history'>
              History
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/help'>
              Help
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
