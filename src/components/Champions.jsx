import React from 'react'
import { hot } from 'react-hot-loader/root';
import ChampionsEntry from './ChampionsEntry.jsx';

const Champions = ({champsInfo}) => {

  return (
    <div>
      <h2>Past Champions</h2>
      {champsInfo.map((champ, index) =>
        (<ChampionsEntry champ={champ} key={index}/>)
     )}
    </div>
  )
}

export default hot(Champions);