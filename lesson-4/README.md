# Advanced React - Async

## Goal - understand (unidirectional) data flow

## TODO

* [recap] Component's life cycle hooks recap
* [recap] State & Props
* [recap] Children + key (re-render)
* [recap] Promises + Async
* [concept] HOC - Higher order components
* [concept] FAC - Function as children / [Render callback](http://reactpatterns.com/#render-callback)
* [new] PropTypes - Runtime TypeSafety
* [new] Effects
* [new] Local (Components) state vs. Centralized (Atom) state
* [new] Error handling / Loading (the state machine)

## Problem - "Idea Journal"

* make it work with server - CRUD
* display loading state indicator
* validate server payload via propTypes

## Exercises

1. display total number of notes in header // passing state down
1. prevent saving an empty note (button must disabled)
1. add propTypes for `Header.js` `Note.js` components
1. replace the `default` with your github username to ./src/config/api.js`
1. run `node upload-data.js`

1. implement load notes from server 😈
1. fetch notes in `componentDidMount` of App.js, transform and save notes to state
1. in App.js display `<Spinner />` instead of `<NoteList />` during server call
1. in App.js display 0 notes if there are no notes on server
1. in App.js display an `errorMessage`
1. implement <EditNoteModal />
1. implement note deletion
1. add propTypes everywhere

## Learning resources

* [React Forms](https://reactjs.org/docs/forms.html)
* [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
* [Michael Jackson - Never Write Another HoC](https://www.youtube.com/watch?v=BcVAq3YFiuc)
* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
