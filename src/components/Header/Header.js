import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, array, string, any } from 'prop-types';

import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Switch,
  Button,
  Container,
  Paper,
  Tabs,
  Tab,
  Dialog,
  IconButton,
  DialogContent,
} from '@material-ui/core';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import { themeSwitcher } from '../../redux/themeSwitcher/themeSwitcherAction';
import Search from '../Search/Search';
import Login from '../Login/Login';

import './header.scss';

const Header = ({ films, userData, chooseCategory, themeSwitcher }) => {
  const isVisible = userData.loginData === '';

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  let resetChooseCategory = () => {
    chooseCategory('');
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
    themeSwitcher();
  };

  const openHeaderHeader = () => {
    const content = document.querySelector('.header-content');
    content.classList.toggle('open-content');
  };

  return (
    <header>
      <div className="mob-menu">
        <IconButton onClick={openHeaderHeader}>
          <MenuIcon style={{ color: 'white' }} fontSize="large" />
        </IconButton>
      </div>
      <Paper className="header-content">
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
  chooseCategory: func,
  themeSwitcher: func,
};

const mapStateToProps = (state) => ({
  category: state.categoryDataReducer.category,
  userData: state.loginDataReducer,
});

const mapDispatchToProps = {
  themeSwitcher: themeSwitcher,
  chooseCategory: chooseCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
