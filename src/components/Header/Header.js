import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, array, string, any } from 'prop-types';

import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import {
  Switch,
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

const Header = ({ dispatch, films, userData, theme }) => {
  const isVisible = userData.loginData === '';

  let isSwitch = false;

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

  const handleChangeSwitch = () => {
    isSwitch = !isSwitch;
    theme(isSwitch);
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
            {(() => {
              if (!isVisible) {
                return (
                  <ul className="main-header-right-block">
                    <li className="switcher">
                      <WbSunnyIcon />
                      <Switch
                        onChange={handleChangeSwitch}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                      <Brightness3Icon />
                    </li>
                    <li>
                      <Search films={films} />
                    </li>
                    <li>
                      <Button
                        onClick={handleClickOpen}
                        color="primary"
                        variant="outlined"
                      >
                        Profile
                      </Button>
                      <Dialog open={open} onClose={handleClose}>
                        <DialogContent>
                          <Login />
                        </DialogContent>
                      </Dialog>
                    </li>
                  </ul>
                );
              }
            })()}
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
  theme: func,
};

const mapStateToProps = (state) => {
  return {
    category: state.categoryDataReducer.category,
    userData: state.loginDataReducer,
  };
};

export default connect(mapStateToProps)(Header);
