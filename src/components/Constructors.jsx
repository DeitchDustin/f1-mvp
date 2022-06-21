import React from 'react'
import { hot } from 'react-hot-loader/root';
import ConstructorsEntry from './ConstructorsEntry.jsx'

const Constructors = () => {

  return (
    <div>
      <h2>Current Constructor Standings</h2>
      <ConstructorsEntry/>
    </div>
  )
}

export default hot(Constructors);