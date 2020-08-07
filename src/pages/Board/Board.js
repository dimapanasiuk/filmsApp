import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Home from '../Home/Home';
import AboutFilm from '../AboutFilm/AboutFilm';
import NotFound from '../NotFound/NotFound';

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
    return (
      <div className="main-content">
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
    );
  }
}

export default Board;
