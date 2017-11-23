export const actionTypes = {
    NOTE_ADDED: 'NOTE_ADDED',
    NOTE_UPDATED: 'NOTE_UPDATED',
    NOTE_DELETED: 'NOTE_DELETED'
}

const defaultState = {
    notes: [
        {
            title: 'MSD Code Academy',
            text: "Let's crete React app with a few components.",
            uuid: 1,
        }
    ]
}

export default function Reducer(state = defaultState, action) {
    switch (action.type) {

        case actionTypes.NOTE_ADDED:
            const newNote = action.newNote
            let newNotes = { ...state, notes: [...state.notes, newNote] };
            return newNotes

        case actionTypes.NOTE_UPDATED:
            const editedNote = action.editedNote
            newNotes = state.notes.map((note, index) => note.uuid === editedNote.uuid ? editedNote : note);
            return { ...state, notes: newNotes }

        case actionTypes.NOTE_DELETED:
            const deletedNoteUuid = action.deletedNoteUuid
            newNotes = state.notes.filter(note => {
                return note.uuid !== deletedNoteUuid
            })
            return { ...state, notes: newNotes }

        default:
            return state;
    }
}
