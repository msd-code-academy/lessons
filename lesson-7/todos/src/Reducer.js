import * as api from './api'

export const actionTypes = {
    // TODO: add async action types

    NOTE_ADDED: 'NOTE_ADDED',
    NOTE_UPDATED: 'NOTE_UPDATED',
    NOTE_DELETED: 'NOTE_DELETED'
}

const defaultState = {
    notes: []
}

export function fetchNotesAsync() {
    // TODO: implement
  }

export default function Reducer(state = defaultState, action) {
    switch (action.type) {
        // TODO: add async action types

        case actionTypes.NOTE_ADDED:
            const newNote = action.newNote;
            api.addTodo(newNote);
            let newNotes = { ...state, notes: [...state.notes, newNote] };
            return newNotes

        case actionTypes.NOTE_UPDATED:
            const editedNote = action.editedNote;
            api.updateTodo(editedNote);
            newNotes = state.notes.map((note, index) => note.uuid === editedNote.uuid ? editedNote : note);
            return { ...state, notes: newNotes }

        case actionTypes.NOTE_DELETED:
            const deletedNoteUuid = action.deletedNoteUuid;
            api.deleteTodo(deletedNoteUuid);
            newNotes = state.notes.filter(note => {
                return note.uuid !== deletedNoteUuid
            })
            return { ...state, notes: newNotes }

        default:
            return state;
    }
}
