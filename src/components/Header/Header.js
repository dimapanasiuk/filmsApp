import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';


import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import Search from '../Search/Search';

import './header.scss';
import { Button, Container, Paper, Tabs, Tab } from '@material-ui/core';


const Header = ({ dispatch }) => {

  let resetChooseCategory = () => {
    dispatch(chooseCategory(''));
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <header>
      <Paper>
        <Container maxWidth='xl' className='header-layout'>
          <nav className='header-navigation'>
            <Tabs
              onChange={handleChange}
              value={value}
              indicatorColor="primary"
            >
              <Tab value={0} label='Home' to='/' component={NavLink} />
              <Tab value={1} label='Catalog' to='/categories' component={NavLink} />
            </Tabs>
            <ul className="main-header-right-block">
              <li><Search /></li>
              <li>
                <Button variant="contained" color="primary" p={10}>
                  <Link to='/login' className='login-button'>Login</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </Container>
      </Paper>


      {/* <nav className='header-navigation'>
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
              <Button variant="contained" color="primary">
                <Link to='/login' className='login-button'>Login</Link>
              </Button>
            </li>
          </ul>
        </nav> */}
    </header >
  );
};


Header.propTypes = {
  dispatch: func,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);

