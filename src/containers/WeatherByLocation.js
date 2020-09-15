import React, { Component } from "react";
import { connect } from "react-redux";

import SearchForm from "../components/searchForm";
import CitiesWeatherList from "../components/citiesWeatherList"

import { citySearchAction, getCurrentCityLocation } from "../actions";

import "../styles/styles.css";

export class WeatherByLocation extends Component {

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.getCurrentPositionWeather(position.coords);
    });
  }

  render() {
    const {
      cities,
      onSearchCityWeather,
      err,
      isResultFetched
    } = this.props;

    return (
      <div className="search-weather-container" >
        <SearchForm 
          onSearch={onSearchCityWeather}
          err={err}
          isResultFetched={isResultFetched}
        />
        <CitiesWeatherList cities={cities} />
      </div>
    )
  }
}

const mapStateToProps = ( state ) => {
  return {
    cities: state.weather.searchCityResults,
    err: state.weather.error,
    isResultFetched: state.weather.fetched,
  };
};

const mapDispatchToProps = dispatch => ({
  onSearchCityWeather: city => {
    dispatch(citySearchAction( city ));
  },
  getCurrentPositionWeather: coord => {
    dispatch(getCurrentCityLocation( coord ))
  },
});

export default connect( mapStateToProps, mapDispatchToProps )(WeatherByLocation);