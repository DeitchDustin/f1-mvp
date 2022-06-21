import React from 'react'
import { hot } from 'react-hot-loader/root';
import ChampionsEntry from './ChampionsEntry.jsx';

const Champions = () => {

  return (
    <div>
      <h2>Past Champions</h2>
      <ChampionsEntry/>
    </div>
  )
}

export default hot(Champions);