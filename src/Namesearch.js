import React, { Component } from 'react';
import Wins from './Wins.js';


const API = 'https://api.hypixel.net/player?key=afdf14f9-ec52-4e9f-b1dc-20176ef6ea7b&name=';

class Namesearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: "",
            exists: true
        }
    }

    clicked(e) {
        e.preventDefault();
        fetch(API + this.state.text)
            .then(result => result.json())
            .then(data => this.props.handleSelectUser(data.player));
    }

    typing(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return ( 
            <div>
                <form>
                    <input placeholder="Search..." onChange={this.typing.bind(this)}/>
                    <button onClick={this.clicked.bind(this)}>Select</button>
                </form>
            </div>
         );
    }
}
 
export default Namesearch;