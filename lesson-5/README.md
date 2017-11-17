# React router / redux

## Goal - understand basics of react router and redux

## Workshop structure

* [goal] add second page showing summary of all notes, that can be accessed from menu in header
* [exercise - refactor] move logic from App.js to separate component - EditNotesPage.js
    1. create component EditNotesPage and move logic from App.js to this new component (this breaks everything for now)
    1. create folder editNotesPage and move all related components to it
    1. fix paths in moved components, so it builds
* [theory] react router
* [demo] add one link to header and point it to EditNotesPage
* [exercise] create second page with summary
    1. create new folder summaryPage
    1. create new component summaryPage and make it display titles of all notes (won't work for now, we broke stuff in our refactor)
    1. make the new component display some dummy data for now
    1. npm i --save 'react-router-dom'
    1. add link to the header and make it work
* [theory] redux
    1. [overview](https://i.stack.imgur.com/LNQwH.png)
    1. [three principles](https://redux.js.org/docs/introduction/ThreePrinciples.html)
    1. [why to use redux](https://cdn.css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg)
    1. disadvantages
* [demo] add redux to to editNotesPage
* [demo] combining reducers
* [exercise]
    1. npm install --save react-redux
    1. add redux to header
* [theory] redux vs local state

## Changes since end of workshop

* added [redux-logger](https://github.com/evgenyrodionov/redux-logger) package (dont forget to run 'npm i'), so if you open your browser console, you will see every state change there, [like so](https://user-images.githubusercontent.com/3807458/30935862-4bbd3094-a3d2-11e7-8702-c6222fedc78f.png)
* removed combining reducers - everything is now in Reducer.js (it was unnecessary so far and confusing)
* action types are now string constants inside Reducer.js - it's very recommended to use constants instead of typing it in every time
* connected NewNoteModal.js to redux store and added NOTE_ADDED action - notice how action is dispatched there

## Exercise @home - connect Header to redux store and make it display number of notes
* it's better to pass to the component only number of notes - this components doesn't need to have access to whole array

## Exercise @home - connect SummaryPage to redux store and make it display all note titles as a list

## Exercise @home (for bonus points) - add MAKE ALL CAPS button
* add MAKE ALL CAPS button next to edit and remove buttons, that will make make title of the note all UPPER CASE
* it's useful if you want to easily make a note REALLY IMPORTANT
* should be done through new action, with action.type = 'NOTE_MAKE_TITLE_ALL_CAPS'



## Learning resources

* [HTML5 history API](https://developer.mozilla.org/en-US/docs/Web/API/History)
* [React router v4 documentation](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux guide](https://redux.js.org/docs/introduction/)
* [Explain Redux like I'm five](https://dev.to/hemanth/explain-redux-like-im-five)
* [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)