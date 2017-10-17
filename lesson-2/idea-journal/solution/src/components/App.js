import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
import Footer from './Footer'
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
    const {notes} = this.state
    const newNote = {...note}
    this.setState({
      notes: notes.concat(newNote)
    })
  }
  
  removeNoteFromList = (noteId) => () => {
    const {notes} = this.state
    const newNotes = notes.filter((note) => {
      return note.uuid !== noteId
    })
    this.setState({
      notes: newNotes
    })
  }

  render() {
    const {notes} = this.state
    return (
      <div className="App">
        <div>
          <Header onAddNote={this.addNoteToList} />
          <NoteList notes={notes} removeNoteFromList={this.removeNoteFromList} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
