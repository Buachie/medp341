import React, { Component } from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";
export class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intelligence: 5,
      strength: 5,
      charisma: 5,
      fun: 5,
      energy: 10,
      weather: "",
      options: {
        clearDay: ["Go for a Run", "Go to the Museum", "Call a friend"],
        clearNight: ["Go for a Run", "Watch the News", "Sleep"],

        rain: ["Watch TV", "Read a Book", "Sleep"],

        partlyCloudyDay: ["Go hiking", "Study", "Go"],

        partlyCloudyNight: ["Play a board game", "Sleep", "Study"],

        cloudy: ["Go to the movies", "Visit a friend", "Play a game"],
      },
    };
  }

  activeOption = () => {
    this.setState({
      strength: this.state.strength + 2,
      intelligence: this.state.intelligence - 1,
      charisma: this.state.charisma + 1,
      energy: this.state.energy - 1,
    });
  };
  smartOption = () => {
    this.setState({
      strength: this.state.strength - 1,
      intelligence: this.state.intelligence + 3,
      charisma: this.state.charisma - 1,
      energy: this.state.energy - 1,
    });
  };
  charismaOption = () => {
    this.setState({
      strength: this.state.strength - 1,
      intelligence: this.state.intelligence + 1,
      charisma: this.state.charisma + 2,
      energy: this.state.energy - 1,
    });
  };
  //Option Buttons

  render() {
    let { intelligence, strength, charisma, options } = this.state;
    return (
      <div>
        <div className="option-container">
          <button className="option" onClick={this.activeOption}>
            {options.clearDay[0]}
          </button>
          <button className="option" onClick={this.smartOption}>
            {options.clearDay[1]}
          </button>
          <button className="option" onClick={this.charismaOption}>
            {options.clearDay[2]}
          </button>
        </div>
        <div className="stats-container">
          <ul>
            <li>Strength:{strength}</li>
            <li>Intelligence:{intelligence}</li>
            <li>Charisma:{charisma}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Stats;
