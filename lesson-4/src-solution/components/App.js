import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
import Footer from './Footer'
import Spinner from './Spinner'

import { FIREBASE_URL } from '../config/api'
import '../styles/App.css'

class App extends React.Component {
  state = {
    notes: [],
    errorMessage: '',
  }

  async fetchNotes() {
    try {
      const result = await fetch(`${FIREBASE_URL}/notes.json`)
      const notes = await result.json()

      this.setState({
        notes: Object.keys(notes).map(key => ({
          uuid: key,
          ...notes[key],
        })),
      })
    } catch (err) {
      this.setState({
        errorMessage: err.message ? err.message : err,
      })
    }
  }

  componentDidMount() {
    this.fetchNotes()
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

  editNote = async note => {
    try {
      const result = await fetch(`${FIREBASE_URL}/notes/${note.noteId}.json`, {
        method: 'put',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: note.title,
          text: note.text,
        }),
      })

      if (result.ok) {
        this.fetchNotes()
      }
    } catch (err) {
      console.error('editNote: ',err)
      this.setState({
        errorMessage: `Error during note update`,
      })
    }
  }

  render() {
    const { errorMessage, notes } = this.state
    return (
      <div className="App">
        <div>
          <Header noteCount={notes.length} onAddNote={this.addNoteToList} />
          {errorMessage}
          {notes.length === 0 ? (
            <Spinner />
          ) : (
            <NoteList
              notes={notes}
              editNote={this.editNote}
              removeNoteFromList={this.removeNoteFromList}
            />
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
