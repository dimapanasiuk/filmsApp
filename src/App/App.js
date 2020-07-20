import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from '../redux/reducers';

import "./global-style.scss";
import Board from '../pages/Board/Board';

const store = createStore(
  combineReducers,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Board />
        </Router>
      </Provider>
    );
  }
}

export default App;
