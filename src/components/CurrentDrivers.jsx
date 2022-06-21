import React from 'react'
import { hot } from 'react-hot-loader/root';
import DriverEntry from './DriverEntry.jsx';

const CurrentDrivers = () => {

  return (
    <div>
     <h2>Current Driver Standings</h2>
      <DriverEntry/>
    </div>
  )
}

export default hot(CurrentDrivers);