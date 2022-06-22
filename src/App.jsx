
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

// Constructors Standings
const [constructors, setConstructors] = useState('')

// Past Races
const [past, setPast] = useState({Races: []})

//future Races
const [future, setFuture] = useState({Races: []})


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

  // Get Constructors Standings
  const getConstructors = () => {
    axios({
      url: `http://ergast.com/api/f1/2022/constructorStandings.json`,
      method: "get",
      headers: {
      },
    })
      .then((response) => {
       setConstructors(response.data.MRData.StandingsTable.StandingsLists[0])
      })
      .catch((err) => {
        console.log("Breaking in Get Driver", err);
      });
  };

  // Get Results for Past Races
  const getResults = () => {
    axios({
      url: `http://ergast.com/api/f1/2022/results/1.json`,
      method: "get",
      headers: {
      },
    })
      .then((response) => {
        setPast(response.data.MRData.RaceTable)
      })
      .then((response) => {
        setLoadedPast(true);
      })
      .catch((err) => {
        console.log("Breaking in Get Driver", err);
      });
  };
// Get Schedule
const getSched = () => {
  axios({
    url: `http://ergast.com/api/f1/current.json`,
    method: "get",
    headers: {
    },
  })
    .then((response) => {
      setFuture(response.data.MRData.RaceTable)
    })
    .then((response) => {
      setLoadedFuture(true);
    })
    .catch((err) => {
      console.log("Breaking in Get Driver", err);
    });
};


// Invoking
  useEffect(() => {
    getChamps();
    getDriverStandings();
    getConstructors();
    getResults();
    getSched();
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
            }}>Driver Standings
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
       { schedule ? <CurrentSchedule past={past} future={future}/> : null}
       {standings ? <Constructors constructors={constructors}/> : null }
       {champs ? <Champions champsInfo={champsInfo}/> : null }
      </>
    );
}

export default hot(App);