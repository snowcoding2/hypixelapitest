import React from 'react';
import Namesearch from './Namesearch';
import Wins from './Wins';

export default (props) => props.user == null ?
          <div className="App">
            < Namesearch handleSelectUser={this.handleSelectUser.bind(this)}/>
          </div>
          :
          <div className="App">
            < Namesearch handleSelectUser={this.handleSelectUser.bind(this)}/>
            <h1>{user.displayname}</h1>
            < Wins wins={props.user.stats.Bedwars.wins_bedwars} losses={props.user.stats.Bedwars.losses_bedwars} />
          </div>