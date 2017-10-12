import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button>Red</button>
        <button>Blue</button>
        <div className="App-output App-output1" />
        <div className="App-output App-output2">Lorem ipsum, ...</div>
      </div>
    );
  }
}

export default App;
