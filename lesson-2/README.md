# React Fundamentals I

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## The Goal

Finish all of bellow mentioned steps to manage Idea Journal store ideas in local state of the app.

## Practise & learn

_Exercise #1:_
Clone it on your machine and then in project directory install npm modules and dependencies, run app in the development mode.

```
npm i
npm start
```

### React Components
- Components are like JavaScript functions - they accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen
- Class and Functional components
- Always start component names with a capital letter
- Components must return a single root element

### React JSX
- What UI should look like, it's neither string nor HTML
- JavaScript expressions are wrapped into {}
- Specifying attributes are string literals or {JavaScript expressions}
- camelCase property naming, e.g. className, tabIndex

_Exercise (basics) #2:_
Create Note component displaying title and text of a note.

_Exercise (basics) #3:_
Create Footer component containing `<div>` with style class `Footer` and add it to App component.

### React State
- State is similar to props, but it is private and fully controlled by the component
- Class Components
- Initial this.state is assigned in class constructor
- Do not modify state directly, use setState()

_Exercise (state) #4:_
Display modal window to add a new note.

_Exercise (state) #5:_
Display or hide text in Note component.

### React Props
- Props are attributes of component
- Read-only - component never modify its own props

_Exercise (props) #6:_
Pass notes info via props from App to NoteList.

_Exercise (props) #6:_
Pass note info via props from NoteList to Note.

_Exercise (props) #7:_
Pass callback function from NewNoteModal to App and add a new note to a list.

_EXTRA Exercise (props) #7:_
Pass callback function from Note to App and remove note from a list.

To run solution
```
cd solution/
npm i
npm start # or PORT=3001 npm start to run in parallel with working app
```

## Useful resources

- [React.js - Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
- [React.js - Rendering Elements](https://facebook.github.io/react/docs/rendering-elements.html)
- [React.js - Components and props](https://facebook.github.io/react/docs/components-and-props.html)
- [React.js - State and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React Patterns](http://reactpatterns.com/)
- [The many faces of `this` in javascript](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e)