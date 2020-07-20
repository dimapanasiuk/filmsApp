import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from '../../components/Header/Header';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Home from '../Home/Home';
import AboutFilm from '../AboutFilm/AboutFilm';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  state = {}

  // componentDidMount = () => {
  //   fetch("https://filmsapi.herokuapp.com/films").then(response =>
  //     response
  //       .json()
  //       .then(data => {
  //         this.setState({
  //           response: data.message
  //         });
  //       })
  //       .catch(console.error)
  //   );
  //   return null;
  // };


  render() {
    console.log(this.state);
    return (
      <>
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
        </Switch>
      </>
    );
  }
}

export default Board;
