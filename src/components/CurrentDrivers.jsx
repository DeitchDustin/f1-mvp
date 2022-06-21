import React from 'react'
import { hot } from 'react-hot-loader/root';
import DriverEntry from './DriverEntry.jsx';

const CurrentDrivers = ({driverStandings}) => {
  let drivers = driverStandings.StandingsLists[0].DriverStandings
  return (
    <div>
     <h2>Current Driver Standings ({driverStandings.season})</h2>
      {drivers.map((driver, index) => (<DriverEntry driver={driver} key={index}/>))}
    </div>
  )
}

export default hot(CurrentDrivers);