import React from 'react'
import { hot } from 'react-hot-loader/root';

const ConstructorsEntry = ({constructor}) => {

  return (
    <div>
      <h3>Position: #{constructor.position}</h3>
     <b>Constructor:</b> {constructor.Constructor.name}
      <div>
      <b>Wins: </b> {constructor.wins} {" "}
      | <b>Points: </b> {constructor.points}
      </div>
      <div>
      <b>Nationality: </b> {constructor.Constructor.nationality}
      </div>
      <b>Wiki page: </b> <a  href={constructor.Constructor.url}>{constructor.Constructor.url}</a>
    </div>
  )
}

export default hot(ConstructorsEntry);