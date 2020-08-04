import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import {
  Button,
  Container,
  Paper,
  Tabs,
  Tab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';

import { chooseCategory } from '../../redux/categoryData/categoryDataActions';
import Search from '../Search/Search';
import Login from '../Login/Login';

import './header.scss';

const Header = ({ dispatch, films }) => {
  let resetChooseCategory = () => {
    dispatch(chooseCategory(''));
  };

  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let handleChangeReset = () => {
    setValue(3);
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
              <Tab value={0} label="Home" to="/" component={NavLink} />
              <Tab
                value={1}
                label="Catalog"
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
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClickOpen}
                  >
                    Login
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogContent>
                      <Login />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
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
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Header);
