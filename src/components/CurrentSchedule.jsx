import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  SchedButton
} from "../Components/StyledComponents.jsx";
import { useState, useEffect} from "react";
import ResultsEntry from './ResultsEntry';
import Schedule from './Schedule.jsx'

const CurrentSchedule = ({past, future}) => {

  const [notRaced, setNotRaced] = useState(false);
  const [raced, setRaced] = useState(true);


  return (
    <div>
      <h2>Current Schedule ({past.season})</h2>
      {past.season === '2022' ? <div> <SchedButton onClick={(e) =>{setNotRaced(true), setRaced(false)}}>All Races</SchedButton>
        <SchedButton onClick={(e) => {setNotRaced(false), setRaced(true)}}>Completed Races</SchedButton> </div> : null}
        {raced === true ?
        <div>
           {past.Races.map((race, index) =>
           (<ResultsEntry race={race} key={index}/>))}
        </div> :
         <div>
          {future.Races.map((race, index) => (<Schedule race={race} key={index}/>))}
        </div>}
    </div>
  )
}

export default hot(CurrentSchedule);