
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
import axios from 'axios'

const App = () => {


// Conditional Renders
  const [schedule, setSchedule] = useState(true);
  const [drivers, setDrivers] = useState(false);
  const [standings, setStandings] = useState(false);
  const [champs, setChamps] = useState(false);

// Champions Info
const [champsInfo, setChampsInfo] = useState('');

// Driver Standings
const [driverStandings, setDriverStandings] = useState('')


// GETS
  const getChamps = () => {
    axios({
      url: `http://ergast.com/api/f1/driverStandings/1.json?limit=100`,
      method: "get",
      headers: {
      },
    })
      .then((response) => {
        setChampsInfo(response.data.MRData.StandingsTable.StandingsLists)
      })
      .catch((err) => {
        console.log("Breaking in Get Champs", err);
      });
  };

  //Get Driver Standings

  const getDriverStandings = () => {
    axios({
      url: `http://ergast.com/api/f1/2022/driverStandings.json`,
      method: "get",
      headers: {
      },
    })
      .then((response) => {
        setDriverStandings(response.data.MRData.StandingsTable)
      })
      .catch((err) => {
        console.log("Breaking in Get Driver", err);
      });
  };

 // http://ergast.com/api/f1/2022/driverStandings.json

// Invoking
  useEffect(() => {
    getChamps();
    getDriverStandings();
  }, []);

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

       {drivers ? <CurrentDrivers driverStandings={driverStandings}/> : null }
       { schedule ? <CurrentSchedule/> : null}
       {standings ? <Constructors/> : null }
       {champs ? <Champions champsInfo={champsInfo}/> : null }
      </>
    );
}

export default hot(App);