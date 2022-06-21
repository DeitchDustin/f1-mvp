
import React from "react";
import { useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import CurrentDrivers from './components/CurrentDrivers.jsx';
import CurrentSchedule from './components/CurrentSchedule.jsx';
import Champions from './components/Champions.jsx';
import Constructors from './components/Constructors.jsx';
import {
  Mainbuttons,
  MainHeader
} from "./Components/StyledComponents.jsx";

const App = () => {

  const [schedule, setSchedule] = useState(true);
  const [drivers, setDrivers] = useState(false);
  const [standings, setStandings] = useState(false);
  const [champs, setChamps] = useState(false);


    return (
      <>
        <MainHeader>
          F1 Information
        </MainHeader>
        <Mainbuttons>
          <button onClick={(e) =>
            {
              setSchedule(true),
              setDrivers(false),
              setStandings(false),
              setChamps(false)
              }}>
            Current Schedule
          </button>
          <button onClick={(e) =>
            {
              setSchedule(false),
              setDrivers(true),
              setStandings(false),
              setChamps(false)
            }}>Current Drivers
          </button>
          <button  onClick={(e) =>
            {
              setSchedule(false),
              setDrivers(false),
              setStandings(true),
              setChamps(false)
            }}>Constructor Standings
          </button>
          <button  onClick={(e) =>
             {
              setSchedule(false),
              setDrivers(false),
              setStandings(false),
              setChamps(true)
             }}>World Drivers' Champions
          </button>
        </Mainbuttons>

       {drivers ? <CurrentDrivers/> : null }
       { schedule ? <CurrentSchedule/> : null}
       {standings ? <Constructors/> : null }
       {champs ? <Champions/> : null }
      </>
    );
}

export default hot(App);