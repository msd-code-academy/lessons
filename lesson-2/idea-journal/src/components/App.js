import React from 'react'
import Header from './Header'
import '../styles/App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      notes: [{
        title: 'MSD Code Academy',
        text: 'Let\'s crete React app with a few components.',
        uuid: 1
      }]
    }
  }

  addNoteToList = (note) => {
    // add new note, use Array.prototype.concat()
  }
  
  removeNoteFromList = (noteId) => () => {
    // filter out note based on noteId, use Array.prototype.filter()
  }

  render() {
    const {notes} = this.state
    return (
      <div className="App">
        <div>
          <Header />
        </div>
      </div>
    )
  }
}

export default App
