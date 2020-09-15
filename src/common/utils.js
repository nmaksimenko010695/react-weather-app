import { kelvinOffsetCelsius } from "./constants";

export const kelvinToCelsius = ( tempKelvin ) => {
    return ( tempKelvin - kelvinOffsetCelsius ).toFixed(0);
}

export const formatDate = ( dateString ) => {
  const dateWithoutHours = dateString.slice( 0, 10 );

  let datePart = dateWithoutHours.match(/\d+/g),
	  year = datePart[0].substring(2), 
	  month = datePart[1], day = datePart[2];

  return day + "/" + month + "/" + year;
}