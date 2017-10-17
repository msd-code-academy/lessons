import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
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
    // const {notes} = this.state
    // const newNote = {...note}
    // add new note, use Array.prototype.concat()
  }
  
  removeNoteFromList = (noteId) => () => {
    // const {notes} = this.state
    // filter out note based on noteId, use Array.prototype.filter()
  }

  render() {
    const {notes} = this.state
    return (
      <div className="App">
        <div>
          <Header />
          <NoteList notes={notes} />
        </div>
      </div>
    )
  }
}

export default App
