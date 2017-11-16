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

## Problem - "Add "most important note" page

1. add MostImportantNote page
2. it should display first note in the list

## Learning resources

* [HTML5 history](https://developer.mozilla.org/en-US/docs/Web/API/History)
* [React router v4 documentation](https://reacttraining.com/react-router/web/guides/philosophy)
* [Redux guide](https://redux.js.org/docs/introduction/)