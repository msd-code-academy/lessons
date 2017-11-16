import React from 'react'
import NoteList from './NoteList'

class EditNotesPage extends React.Component {

    state = {
        notes: [
            {
                title: 'MSD Code Academy',
                text: "Let's crete React app with a few components.",
                uuid: 1,
            }
        ]
    }

    addNoteToList = note => {
        this.setState({
            notes: [...this.state.notes, note],
        })
    }

    editNote = editedNote => {
        const { notes } = this.state
        const newNotes = notes.map((note, index) => note.uuid === editedNote.uuid ? editedNote : note);
        this.setState({
            notes: newNotes,
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
        const notes = this.state.notes
        const noteCount = notes.length
        return (<NoteList
            notes={notes}
            removeNoteFromList={this.removeNoteFromList}
            editNote={this.editNote} />)
    }

}

export default EditNotesPage