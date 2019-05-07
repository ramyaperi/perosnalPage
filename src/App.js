import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Homepage from "./Homepage.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  toHomepage() {
    window.location.href = "/";
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Homepage />} />
      </div>
    );
  }
}

export default App;
