import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import parties from "./election-results"
import PartiesList from "./PartiesList"
import Coalition from "./Coalition"

import { removeFromArray } from "./functions"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      coalition: []
    }
  }

  addParty = (party) => {
    this.setState({
      coalition: this.state.coalition.concat(party)
    })
  }
  

  removeParty = (partyToRemove) => {
    this.setState({
      coalition: removeFromArray(this.state.coalition, partyToRemove)
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Czech Republic, 2017</h1>
          <h2>Build your own coalition!</h2>
        </header>
        <PartiesList parties={parties} partySelected={this.addParty} />
        <hr />
        <Coalition parties={this.state.coalition} partySelected={this.removeParty} />
      </div>
    );
  }
}

export default App;
