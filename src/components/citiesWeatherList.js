import React, { Component } from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Forecast from "./forecastWeatherByCity";

import { kelvinToCelsius } from "../common/utils";

import "../styles/styles.css";

class CitiesWeatherList extends Component {

  render() {
    return (  
     <div className="cities-list">
        { 
          this.props.cities.map((location) => {
            let card = location.city && location.city.id ? (
              <Card 
                key={location.city.id} 
                className="card-wrapper"
              >
                <CardContent>
                  <p>{location.city.name}</p>
                  <p>Weather forecast for the next 5 days</p>
                  <Forecast temperaturesList={location.list} />
                </CardContent>
              </Card>
              ) : (
              <Card 
                key={location.id}
                className="card-wrapper"
              >
                <CardContent>
                  <p>Current weather in your location:</p>
                  <p>{ kelvinToCelsius(location.main.temp) } C°</p>
                </CardContent>
              </Card>
            );
          return card;
        })
      }
      </div>
    );
  }
}

export default CitiesWeatherList;