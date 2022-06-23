import React from 'react'
import { hot } from 'react-hot-loader/root';

const DriverEntry = ({driver}) => {

  return (
    <div>
      <h3>Position: #{driver.position}</h3>
      <div>
      <b>Name: </b> {driver.Driver.givenName} {' '}
         {driver.Driver.familyName} {' '}
         <b>Driver#: </b> {driver.Driver.permanentNumber ? driver.Driver.permanentNumber : 'N/A'}
      </div>
      <b>Constructor:</b> {driver.Constructors[0].name}
      <div>
        <b>Season Points:</b>  {driver.points} {' '} |
        {' '}<b>Season Wins:</b> {driver.wins} {' '}
      </div>
      <div>
      <b>Nationality: </b> {driver.Driver.nationality} {' '}
     | <b>Birthday: </b> {driver.Driver.dateOfBirth} {' '}
      </div>
      <b>Wiki page: </b> <a href={driver.Driver.url}>{driver.Driver.url}</a>
    </div>
  )
}

export default hot(DriverEntry);