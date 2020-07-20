import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import Login from '../Login/Login';
import Search from '../Search/Search';

const Header = () => {
  return (
    <nav>
      <ul className="main-header">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">categories</Link>
        </li>
        <li><Search /></li>
        <li><Login /></li>
      </ul>
    </nav>
  );
};

export default Header;
