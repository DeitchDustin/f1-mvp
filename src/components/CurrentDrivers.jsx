import React from 'react'
import { hot } from 'react-hot-loader/root';
import DriverEntry from './DriverEntry.jsx';

const CurrentDrivers = ({driverStandings}) => {
  let drivers = driverStandings.StandingsLists[0].DriverStandings
  return (
    <div>
     <h2>Driver Standings ({driverStandings.season})</h2>
     {driverStandings.season === '2022' ? <h4>As of Round: {driverStandings.StandingsLists[0].round} / 22</h4> : null}
      {drivers.map((driver, index) => (<DriverEntry driver={driver} key={index}/>))}
    </div>
  )
}

export default hot(CurrentDrivers);