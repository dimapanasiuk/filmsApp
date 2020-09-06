import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { any, bool, func } from 'prop-types';

import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Home from '../Home/Home';
import AboutFilm from '../AboutFilm/AboutFilm';
import NotFound from '../NotFound/NotFound';
import PreLogin from '../../components/PreLogin/PreLogin';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

class Board extends React.Component {
  state = {
    films: [],
  };

  componentDidMount = () => {
    fetch('https://filmsapi.herokuapp.com/films').then((response) =>
      response
        .json()
        .then((data) => {
          this.setState({
            films: data.message,
          });
        })
        .catch(console.error)
    );
    return null;
  };

  render() {
    const { films } = this.state;
    const { isLightTheme } = this.props;
    const { loginData } = this.props.userData;
    const isRender = loginData === '';

    const outerTheme = createMuiTheme({
      palette: {
        type: isLightTheme ? 'light' : 'dark',
        primary: {
          main: '#2196f3',
        },
      },
    });

    return (
      <ThemeProvider theme={outerTheme}>
        <Paper style={{ height: '100%' }}>
          <div className="main-content">
            {(() => {
              if (isRender) {
                return <PreLogin />;
              }
            })()}

            <Header films={films} />
            <Switch>
              <Route exact path="/search">
                <Search films={films} />
              </Route>

              <Route path="/categories">
                <Categories films={films} />
              </Route>

              <Route path="/categories/:category">
                <Categories films={films} />
              </Route>

              <Route path="/films/:about">
                <AboutFilm films={films} />
              </Route>

              <Route exact path="/">
                <Home films={films} />
              </Route>

              <Route component={NotFound} />
            </Switch>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}

Board.propTypes = {
  userData: any,
  isLightTheme: bool,
  filmSwitcher: func,
};

const mapStateToProps = (state) => ({
  userData: state.loginDataReducer,
  isLightTheme: state.themeSwitcherReducer.isLightTheme,
});

export default connect(mapStateToProps)(Board);
