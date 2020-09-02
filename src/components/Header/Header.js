import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, array, string, any } from 'prop-types';
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

const Header = ({ dispatch, films, userData }) => {
  const isVisible = userData.loginData === '';

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  let resetChooseCategory = () => {
    dispatch(chooseCategory(''));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpen(false);
  };

  let handleChangeReset = () => {
    console.log(test);
  };

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
              <Tab
                value={0}
                disabled={isVisible}
                label="Home"
                to="/"
                component={NavLink}
              />
              <Tab
                disabled={isVisible}
                value={1}
                label="Categories"
                to="/categories"
                component={NavLink}
                onClick={resetChooseCategory}
              />
            </Tabs>
            <ul className="main-header-right-block">
              {(() => {
                if (!isVisible) {
                  return (
                    <li>
                      <Search films={films} foo={handleChangeReset} />
                    </li>
                  );
                }
              })()}

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
  userData: any,
};

const mapStateToProps = (state) => {
  return {
    category: state.categoryDataReducer.category,
    userData: state.loginDataReducer,
  };
};

export default connect(mapStateToProps)(Header);
