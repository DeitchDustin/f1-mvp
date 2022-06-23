import React from 'react'
import { hot } from 'react-hot-loader/root';
import ChampionsEntry from './ChampionsEntry.jsx';

const Champions = ({champsInfo}) => {
  let champs;
  if(champsInfo[0].season === '1950') {
     champs = champsInfo.reverse()
  } else {
     champs = champsInfo;
  }

  return (
    <div>
      <h2>Past Champions</h2>
      {champs.map((champ, index) =>
        (<ChampionsEntry champ={champ} key={index}/>)
     )}
    </div>
  )
}

export default hot(Champions);