import React, { Component } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

class App extends Component {
  render() {
    return (
      <div>
        <PlayerCard/>
        <PlayerCard/>
      </div>
    )
  }
}

export default App;
