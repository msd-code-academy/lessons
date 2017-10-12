import React, { Component } from 'react'
import './App.css'

class App extends Component {
  // we will learn later when to use props, local state, redux store and how to combine the approaches
  state = {
    currentClass: ''
  }

  setRed = () => {
    // DO NOT this.state.currentClass = 'red' !!!
    this.setState({currentClass: 'App-red'})
  }

  setBlue = () => {
    this.setState({currentClass: 'App-blue'})
  }

  render() {
    const {currentClass} = this.state

    return (
      <div className="App">
        <button onClick={this.setRed}>Red</button>
        <button onClick={this.setBlue}>Blue</button>
        <div className={`App-output App-output1 ${currentClass}`} />
        <div className={`App-output App-output2 ${currentClass}`}>Lorem ipsum, ...</div>
      </div>
    )
  }
}

export default App
