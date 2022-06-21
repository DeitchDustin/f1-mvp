
import React from "react";
import { hot } from 'react-hot-loader/root';
import CurrentDrivers from './components/CurrentDrivers.jsx';
import CurrentSchedule from './components/CurrentSchedule.jsx';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          F1
        </h1>
        Buttons
        <CurrentDrivers/>
        <CurrentSchedule/>
      </>
    );
  }
}

export default hot(App);