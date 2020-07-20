import React, { Component } from "react";
import "./globsl-style.scss";
import Button from "./button/Button";

class App extends Component {
  render() {
    console.log();
    return (
      <div>
        <Button label="click me please" />
        <h1>My React App!</h1>
      </div>
    );
  }
}

export default App;
