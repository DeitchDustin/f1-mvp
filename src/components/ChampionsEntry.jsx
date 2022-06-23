import React from 'react'
import { hot } from 'react-hot-loader/root';
import {
  ChampsWrapper,
  Bold
} from "../Components/StyledComponents.jsx";

const ChampionsEntry = ({champ}) => {

  return (
    <ChampsWrapper>
    <b>Year:</b> {champ.season} {' '}
    <b>Name:</b> {champ.DriverStandings[0].Driver.givenName} {' '}
      {champ.DriverStandings[0].Driver.familyName} {' '}
    <b>DOB:</b>{champ.DriverStandings[0].Driver.dateOfBirth} {' '}
    <b>Wins:</b> {champ.DriverStandings[0].wins} {' '}
    <b>Points:</b> {champ.DriverStandings[0].points} {' '}
    <b>Nationality:</b> {champ.DriverStandings[0].Driver.nationality} {' '}
    <b>Constructor:</b> {champ.DriverStandings[0].Constructors[0].name} {' '}
     <hr className="solid"></hr>
    </ChampsWrapper>
  )
}

export default hot(ChampionsEntry);