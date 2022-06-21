import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  SchedButton
} from "../Components/StyledComponents.jsx";

const CurrentSchedule = ({past}) => {

  return (
    <div>
      {console.log(past)}
      <h2>Current Schedule</h2>
        <SchedButton>All Races</SchedButton>
        <SchedButton>Race Results</SchedButton>
    </div>
  )
}

export default hot(CurrentSchedule);