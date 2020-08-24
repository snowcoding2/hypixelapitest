import React, { Component } from 'react';
import './PlayerCard.css';

const API = 'https://api.hypixel.net/player?key=afdf14f9-ec52-4e9f-b1dc-20176ef6ea7b&name=';

class PlayerCard extends Component {

  constructor() {
    super();
    this.state = {
      text: "",
      user: {},
      wins: undefined,
      losses: undefined
    }
  }

  clicked(e) {
    e.preventDefault();
    fetch(API + this.state.text)
        .then(result => result.json())
        .then(data => this.setState({
          user: data.player,
          losses: data.player.stats.Bedwars.losses_bedwars,
          wins: data.player.stats.Bedwars.wins_bedwars
        }));
    
}

  typing(e) {
    this.setState({
        text: e.target.value
    })
}

  round(num, digits) {
    let decimalPlaces = Math.pow(10, digits);
    return Math.round((num + Number.EPSILON) * decimalPlaces) / decimalPlaces;
  }

  render() { 
    const { user, wins, losses } = this.state;
    return (  
      <div className="player-card">
        <form>
            <input placeholder="Search..." onChange={this.typing.bind(this)}/>
            <button onClick={this.clicked.bind(this)}>Select</button>
            <h1>{user.displayName}</h1>
            <p>Wins: {wins}</p>
            <p>Losses: {losses}</p>
            <p>Win percentage: {this.round((wins / (wins + losses) * 100), 2)} %</p>
        </form>
      </div>
     );
  }
}
 
export default PlayerCard;