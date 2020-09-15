import { 
	FETCH_WEATHER_BY_CITY,
	FETCH_WEATHER_REJECTED, 
	FETCH_WEATHER_FULFILLED,
  GET_WEATHER_BY_CURRENT_LOCATION,
} from "../common/constants";

const initialState = {
  searchCityResults: [],
  searchCurrentResult: [],
  startFetching: false,
  error: null,
  fetched: false,
  fetchedCity: false,
};


const onSearchCity = ( state = initialState, action ) => {
  switch ( action.type ) {
    case FETCH_WEATHER_BY_CITY:
    	return { 
    		...state,
        startFetching: true,
    	};

    case FETCH_WEATHER_REJECTED: {
        return {
          ...state, 
          error: action.payload
        }
      }

    case FETCH_WEATHER_FULFILLED: {
      const cityNamesArr =  state.searchCityResults.map(location => (
        location.id || location.city.id
      ));

      const cityId = action.payload.id || action.payload.city.id;
      const isDuplicated = cityNamesArr.includes( cityId );

      if( isDuplicated ) {
        return {
          ...state,
          searchInitiated: false,
          fetched: true,
          error: null
        }
      } else {
        return {
          ...state,
          searchInitiated: false,
          fetched: false,
          searchCityResults: [ ...state.searchCityResults, action.payload ],
          error: null
        }
      }
      
    }
    case GET_WEATHER_BY_CURRENT_LOCATION: {
      return {
        ...state,
        searchCurrentResult: [ ...state.searchCurrentResult, action.payload ],
      }
    }
    default:
      return state;
  }
};

export default onSearchCity;