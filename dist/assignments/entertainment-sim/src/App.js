import React, { Component } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import Stats from "./components/Stats";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <main>
          <div className="search-box">
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
          <div className="flex-container">
            <Greeting />
          </div>
          <Weather />
        </main>
      </div>
    );
  }
}
