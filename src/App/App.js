import React, { Component } from "react";
import "./globsl-style.scss";
import Board from '../pages/Board/Board';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Board />
      </Router>
    );
  }
}

export default App;
