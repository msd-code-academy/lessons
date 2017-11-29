import * as api from './api'

export const actionTypes = {
    FETCH_NOTES_COMPLETED: 'FETCH_NOTES_COMPLETED',
    FETCH_NOTES_ERROR: 'FETCH_NOTES_ERROR',

    FETCH_SUMMARY_HTML_COMPLETED: 'FETCH_SUMMARY_HTML_COMPLETED',
    FETCH_SUMMARY_HTML_ERROR: 'FETCH_SUMMARY_HTML_ERROR',

    NOTE_ADDED: 'NOTE_ADDED',
    NOTE_UPDATED: 'NOTE_UPDATED',
    NOTE_DELETED: 'NOTE_DELETED'
}

const defaultState = {
    notes: [],
    summaryHtml: undefined
}

export function fetchNotesAsync() {
    return dispatch => {
      api.getTodos()
      .then(todos => {
        dispatch({ type: actionTypes.FETCH_NOTES_COMPLETED, notes: todos });
      })
      .catch(error => {
        dispatch({ type: actionTypes.FETCH_NOTES_ERROR, error });
      });
    };
  }

export function fetchSummaryHtmlAsync() {
    return dispatch => {
      api.getSummaryHtml()
      .then(summaryHtml => {
        dispatch({ type: actionTypes.FETCH_SUMMARY_HTML_COMPLETED, summaryHtml });
      })
      .catch(error => {
        dispatch({ type: actionTypes.FETCH_SUMMARY_HTML_ERROR, error });
      });
    };
  }

export default function Reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.FETCH_NOTES_COMPLETED:
            return { ...state, notes: [...action.notes] };

        case actionTypes.FETCH_NOTES_ERROR:
            console.log(action.error); // TODO: client error handling
            return { ...state, notes: [] };

        case actionTypes.FETCH_SUMMARY_HTML_COMPLETED:
            return { ...state, summaryHtml: action.summaryHtml };

        case actionTypes.FETCH_SUMMARY_HTML_ERROR:
            console.log(action.error); // TODO: client error handling
            return { ...state, summaryHtml: undefined };

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
