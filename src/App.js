import React, { Component } from 'react';
import './App.css';
import Wins from './Wins.js';
import Namesearch from './Namesearch.js'
import PlayerCard from './PlayerCard';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  handleSelectUser(user) {
    this.setState({
      user: user
    })
  }

  render() {
    const { user } = this.state;
    return <PlayerCard user={user} />
  }
}

export default App;
