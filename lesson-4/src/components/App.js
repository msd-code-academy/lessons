import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
import Footer from './Footer'

// TODO: use this url to work with the API
// import { FIREBASE_URL } from '../config/api'
import '../styles/App.css'

class App extends React.Component {
  state = {
    notes: [
      {
        title: 'MSD Code Academy',
        text: "Let's crete React app with a few components.",
        uuid: 1,
      },
    ],
    errorMessage: '',
  }

  addNoteToList = note => {
    this.setState({
      notes: [...this.state.notes, note],
    })
  }

  removeNoteFromList = noteId => () => {
    const { notes } = this.state
    const newNotes = notes.filter(note => {
      return note.uuid !== noteId
    })
    this.setState({
      notes: newNotes,
    })
  }

  render() {
    const { errorMessage, notes } = this.state
    return (
      <div className="App">
        <div>
          {/* TODO1: pass `noteCount` to Header */}
          <Header onAddNote={this.addNoteToList} />
          {/* TODO3: display `errorMessage` */}
          {/* TODO2: display spinner when 0 notes or server call in progress */}
          {/* TODO4: optionally add logic to display message with 0 notes, or Spinner */}
          <NoteList notes={notes} removeNoteFromList={this.removeNoteFromList} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
