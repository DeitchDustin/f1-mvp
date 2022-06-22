import React from 'react';
import { hot } from 'react-hot-loader/root';

const ResultsEntry = ({race}) => {

  return (
    <div>
     <h3>Race # {race.round}</h3>
      <div>
        <b>Race Name: </b> {race.raceName}
      </div>
      <div>
        <b>Circuit Name:</b> {race.Circuit.circuitName}
      </div>
      <div>
        <b>Location: </b> {race.Circuit.Location.locality}, {race.Circuit.Location.country}
        <div>
        <b>Date: </b> {race.date}
        </div>
      </div>
      <b>Laps: </b> {race.Results[0].laps} | <b>Fastest Lap: </b>  {race.Results[0].FastestLap.Time.time} | <b>Race Length: </b> {race.Results[0].Time.time}
      <div>
      <div>
        <b>Winner: </b>
        {race.Results[0].Driver.givenName} {" "}
        {race.Results[0].Driver.familyName} {" "}|{" "}
        <b>Constructor: </b> {race.Results[0].Constructor.name}
      </div>
      </div>
      <b>Wiki: </b> <a href={race.url}>{race.url}</a>
      <hr className="solid"></hr>
    </div>
  )
}

export default hot(ResultsEntry);