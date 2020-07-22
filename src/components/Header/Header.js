import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import Login from '../Login/Login';
import Search from '../Search/Search';

const Header = () => {
  return (
    <nav className='header-navigation'>

      <ul className="main-header-left-block">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">categories</Link>
        </li>
      </ul>

      <ul className="main-header-right-block">
        <li><Search /></li>
        <li><Login /></li>
      </ul>
    </nav>
  );
};

export default Header;
