import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, array, string } from 'prop-types';
import {
  Button,
  Container,
  Paper,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
} from '@material-ui/core';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import Search from '../Search/Search';
import Login from '../Login/Login';

import './header.scss';

const Header = ({ dispatch, films, category }) => {
  let checkProperty = () => {
    if (localStorage.hasOwnProperty('loginData')) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  let resetChooseCategory = () => {
    dispatch(chooseCategory(''));
    checkProperty();
  };

  // const [currentCategory, setCurrentCategory] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    checkProperty();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpen(false);
  };

  let handleChangeReset = () => {
    setValue('');
  };

  // TODO: this functional for changing backlight in header
  // it isn't work now, many rerenders
  // if (category !== currentCategory) {
  //   console.log('currentCategory', currentCategory);
  //   console.log('category', category);
  // }

  return (
    <header>
      <Paper>
        <Container maxWidth="xl" className="header-layout">
          <nav className="header-navigation">
            <Tabs
              onChange={handleChange}
              value={value}
              indicatorColor="primary"
            >
              <Tab value={0} label="Home" to="/" component={NavLink} />
              <Tab
                disabled={true}
                value={1}
                label="Categories"
                to="/categories"
                component={NavLink}
                onClick={resetChooseCategory}
              />
            </Tabs>
            <ul className="main-header-right-block">
              <li>
                <Search films={films} foo={handleChangeReset} />
              </li>
              <li>
                <Button
                  onClick={handleClickOpen}
                  color="primary"
                  variant="outlined"
                >
                  Login
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogContent>
                    <Login />
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </nav>
        </Container>
      </Paper>
    </header>
  );
};

Header.propTypes = {
  dispatch: func,
  films: array,
  category: string,
};

const mapStateToProps = (state) => {
  return { category: state.categoryDataReducer.category };
};

export default connect(mapStateToProps)(Header);
