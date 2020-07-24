import React, { Component } from 'react';

export default (props) => <div>
        <p>Wins: {props.wins}</p>
        <p>Losses: {props.losses}</p>
        <p>Winrate: {props.wins / (props.wins+props.losses) * 100}</p>
    </div>