import React, { Component } from "react";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import WeatherByLocation from "./WeatherByLocation";

import reducers from "../reducers";

const store = compose(applyMiddleware(thunk))(createStore)(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <WeatherByLocation />
      </Provider>
    );
  }
}

export default App;
