
import React from "react";
import { useState, useEffect} from "react";
import { hot } from 'react-hot-loader/root';
import CurrentDrivers from './components/CurrentDrivers.jsx';
import CurrentSchedule from './components/CurrentSchedule.jsx';
import Champions from './components/Champions.jsx';
import Constructors from './components/Constructors.jsx';
import ChatEntry from './components/ChatEntry.jsx'
import {
  Mainbuttons,
  MainHeader,
  AppWrap,
  Chat,
  User,
  CommentHeader,
  Row,
  GoTo
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

// Submit Comments
const [user, setUser] = useState('')
const [comment, setComment] = useState('')

// Get Comments
const [allComments, setAllComments] = useState([]);

// Year Select
const [year, setYear] = useState('2022')

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
      url: `http://ergast.com/api/f1/${year}/driverStandings.json`,
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
      url: `http://ergast.com/api/f1/${year}/constructorStandings.json`,
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
      url: `http://ergast.com/api/f1/${year}/results/1.json`,
      method: "get",
      headers: {
      },
    })
      .then((response) => {
        setPast(response.data.MRData.RaceTable)
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
    .catch((err) => {
      console.log("Breaking in Get Driver", err);
    });
};

// Get Chat information
const helper = () => {
  axios.get('http://localhost:3001/f1')
  .then((data) => {
    setAllComments(data.data.reverse())
  })
};

const handleClick = () => {
  let addThis = {user: user, comment: comment}
  if (user !== "" && comment !== "") {
  axios.post('http://localhost:3001/f1', addThis)
  helper();
  } else {
    alert('Please enter username and comment')
  }
};

const handleSelect = (e) => {
  e.preventDefault();
  setYear(e.target.value)
};



// Invoking
  useEffect(() => {
    getChamps();
    getDriverStandings();
    getConstructors();
    getResults();
    getSched();
    helper();
  }, [year]);

    return (
   <div>
    <MainHeader>
      F1 Information
    </MainHeader>
    Select Year:
    <select onChange={(e) => {handleSelect(e)}}>
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
    </select>
    <GoTo href='#chat'>
       {' '}
      <small>Go to Comments</small>{' '}
    </GoTo>
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
      <AppWrap>
       {drivers ? <CurrentDrivers driverStandings={driverStandings}/> : null }
       { schedule ? <CurrentSchedule past={past} future={future}/> : null}
       {standings ? <Constructors constructors={constructors}/> : null }
       {champs ? <Champions champsInfo={champsInfo}/> : null }
      </AppWrap>
      <CommentHeader><u>Comments</u></CommentHeader>
      <Chat id='chat'>
        {allComments.map((comment, index)=>(<ChatEntry helper={helper} comment={comment} key={index}/>))}
      </Chat>

      <User> Username: {' '} <input onChange={(e) => setUser(e.target.value)} placeholder='Enter Username'/></User>
        <User></User>
       <User>Comment: <textarea onChange={(e) => setComment(e.target.value)} placeholder='Enter Comment' rows='4' cols='70'/></User>
        <div>
        </div>
        <User>
          <button onClick={(e) => {handleClick()}} type="submit">
            {" "}
            Add Comment{" "}
          </button>
         </User>
      </div>
    );
}

export default hot(App);