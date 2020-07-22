import React from 'react';
import { Switch, Route } from "react-router-dom";
import { func } from 'prop-types';

import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Home from '../Home/Home';
import AboutFilm from '../AboutFilm/AboutFilm';
import NotFound from '../NotFound/NotFound';

import './Board.scss';

import { connect } from "react-redux";
import { fetchFilms } from '../../redux/getFilmsData/filmsActions';



class Board extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchFilms());
  }

  render() {
    return (
      <div className="main-content">
        <Header />
        <Switch>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route path="/categories/:category">
            <Categories />
          </Route>

          <Route path="/films/:about">
            <AboutFilm />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

Board.propTypes = {
  dispatch: func
};

const mapStateToProps = (state) => {
  return {
    films: state.filmsReducer.items,
    loading: state.filmsReducer.loading,
    error: state.filmsReducer.error,
  };
};

export default connect(mapStateToProps)(Board);

