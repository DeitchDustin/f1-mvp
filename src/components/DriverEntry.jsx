import React from 'react'
import { hot } from 'react-hot-loader/root';

const DriverEntry = () => {

  return (
    <div>
      <h3>Position: </h3>
      <div>
        Name:
        Driver#:
      </div>
      Constructor:
      <div>
        Season Points:
        Season Wins:
      </div>
      <div>
        Nationality:
        Birthday:
      </div>
      Wiki Page:
    </div>
  )
}

export default hot(DriverEntry);