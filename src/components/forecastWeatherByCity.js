import React, { Component } from "react";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { kelvinToCelsius, formatDate } from "../common/utils";

class Forecast extends Component {

  render() {
    const dailyData = this.props.temperaturesList.filter( tempByDay => {   
        return tempByDay.dt_txt.includes( "18:00:00" );
      }
    );

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableBody>
          {dailyData.map((data) => {
              const date = formatDate( data.dt_txt );
              // const dataString = `Date: ${ date } - ${kelvinToCelsius( data.main.temp )} C°`;
              return (
                <TableRow key={data.dt_txt}>
                  <TableCell component="th" scope="row">
                    {date}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {kelvinToCelsius( data.main.temp )} C°
                  </TableCell>
                </TableRow>
              )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }
}

export default Forecast;