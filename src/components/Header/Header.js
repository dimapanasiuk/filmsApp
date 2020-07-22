import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';

import './header.scss';
import Search from '../Search/Search';


const Header = ({ dispatch }) => {

  let resetChooseCategory = () => {
    dispatch(chooseCategory(''));
  };

  return (
    <nav className='header-navigation'>

      <ul className="main-header-left-block">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link
            to="/categories"
            onClick={resetChooseCategory}
          >categories</Link>
        </li>
      </ul>

      <ul className="main-header-right-block">
        <li><Search /></li>
        <li><Link to='/login'>login</Link></li>
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
