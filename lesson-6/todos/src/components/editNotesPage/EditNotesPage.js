import React from 'react'
import NoteList from './NoteList'
import { actionTypes } from '../../Reducer'

import { connect } from 'react-redux'

class EditNotesPage extends React.Component {



    editNote = editedNote => {
        this.props.dispatch({ type: actionTypes.NOTE_UPDATED, editedNote })
    }

    removeNoteFromList = deletedNoteUuid => () => {
        this.props.dispatch({ type: actionTypes.NOTE_DELETED, deletedNoteUuid })
    }

    render() {
        const notes = this.props.notes
        const noteCount = notes.length
        return (<NoteList
            notes={notes}
            removeNoteFromList={this.removeNoteFromList}
            editNote={this.editNote} />)
    }

}

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

export default connect(mapStateToProps)(EditNotesPage);