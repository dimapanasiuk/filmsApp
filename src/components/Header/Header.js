import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import Search from '../Search/Search';

import './header.scss';


const Header = ({ dispatch }) => {

  let resetChooseCategory = () => {
    dispatch(chooseCategory(''));
  };

  return (
    <nav className='header-navigation'>

      <ul className="main-header-left-block">
        <li>
          <NavLink exact to="/"
          className='header-navigation_default-button'
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className='header-navigation_default-button'
            onClick={resetChooseCategory}
          >Categories</NavLink>
        </li>
      </ul>

      <ul className="main-header-right-block">
        <li><Search /></li>
        <li>
          <Link to='/login' className='login-button'>Login</Link>
          </li>
      </ul>
    </nav>
  );
};


Header.propTypes = {
  dispatch: func,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
