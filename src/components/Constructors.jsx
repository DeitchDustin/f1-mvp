import React from 'react'
import { hot } from 'react-hot-loader/root';
import ConstructorsEntry from './ConstructorsEntry.jsx'


const Constructors = ({constructors}) => {

  return (
    <div>
      <h2>Constructor Standings ({constructors.season})</h2>
      { constructors.season === '2022' ?
       <h4>
         As of Round: {constructors.round} / 22
       </h4> : null}
      {constructors.ConstructorStandings.map((constructor, index) => (<ConstructorsEntry constructor={constructor} key={index}/>))}
    </div>
  )
}

export default hot(Constructors);