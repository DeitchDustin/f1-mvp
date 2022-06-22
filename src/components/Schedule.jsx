import React from 'react';
import { hot } from 'react-hot-loader/root';

const Schedule = ({race}) => {

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
        <b>Race Date: </b> {race.date}
        </div>
      </div>
      <div>
       <b> Qualifying Date: </b> {race.Qualifying.date}

      </div>
      <b>Wiki: </b> <a href={race.url}>{race.url}</a>
      <hr className="solid"></hr>
    </div>
  )
}

export default hot(Schedule);