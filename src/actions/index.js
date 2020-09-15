import axios from "axios";
import {
  FETCH_WEATHER_BY_CITY,
  FETCH_WEATHER_FULFILLED,
  FETCH_WEATHER_REJECTED,
  GET_WEATHER_BY_CURRENT_LOCATION,
  API_KEY,
} from "../common/constants";


export const getCurrentCityLocation = (coordinates ) => async ( dispatch ) => {
  const lat = coordinates.latitude.toFixed( 0 );
  const lon = coordinates.longitude.toFixed( 0 );

  dispatch({ type: GET_WEATHER_BY_CURRENT_LOCATION });

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  return await axios.get( url )
    .then( response => {
        dispatch({ type: FETCH_WEATHER_FULFILLED, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: FETCH_WEATHER_REJECTED, payload: err })
      })
}

export const citySearchAction = ( city ) => async ( dispatch ) => {
  dispatch({ type: FETCH_WEATHER_BY_CITY });

  const url = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${API_KEY}`;

	return await axios.get( url )
  	.then( response => {
    	dispatch({ type: FETCH_WEATHER_FULFILLED, payload: response.data})
  	})
  	.catch( err  => {
    	dispatch({ type: FETCH_WEATHER_REJECTED, payload: err })
  	})
}
