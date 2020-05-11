//PARENT COMPONENENT OF STATS

import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Stats from "./Stats";
import PropTypes from "prop-types";

export class Weather extends Component {
  constructor() {
    super();
    this.activeOption = this.activeOption.bind(this);
    this.smartOption = this.smartOption.bind(this);
    this.charismaOption = this.charismaOption.bind(this);

    this.state = {
      long: -73.94998970249429,
      lat: 40.63292717413113,
      temp: null,
      place: null,
      weather: null,
      apparentTemp: null,
      intelligence: 5,
      strength: 5,
      charisma: 5,
      fun: 5,
      energy: 10,
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

  componentDidMount() {
    // Get location of user
    setInterval(() => {
      const success = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log(lat, long);
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });
      };

      const error = () => {
        console.log("Unable to retrieve your location");
      };

      navigator.geolocation.getCurrentPosition(success, error);

      //Access api data
      const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/15abec103b4ca0854030b4462f9754ca/${this.state.lat},${this.state.long}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const temp = data.currently.temperature;
          const place = data.timezone.replace(/_/g, " ");
          const weather = data.currently.summary;
          const apparentTemp =
            "(Feels like) " + data.currently.apparentTemperature;
          this.setState({ temp, place, weather, apparentTemp });
        });
    }, 10000);
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

  render() {
    let {
      temp,
      place,
      weather,
      options,
      strength,
      intelligence,
      charisma,
    } = this.state;

    let defaults = {
      icon:
        this.state.weather === null
          ? (this.icon = "CLEAR_DAY")
          : (this.icon = String(
              this.state.weather.replace(/ /g, "_").toUpperCase()
            )),
      color: "white",
      size: 150,
      animate: true,
    };

    return (
      <div>
        <div className="icon">
          <ReactAnimatedWeather
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
          />
        </div>
        <div className="location-container">
          <div className="location">{place}</div>
        </div>
        <div className="weather-container">
          <div className="temp">{temp}&deg;</div>
          <div className="weather">{weather}</div>
        </div>
        <Stats weather={this.state.weather} />
      </div>
    );
  }
}

export default Weather;
