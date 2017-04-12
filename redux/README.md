# Managing application state - redux

## Agenda

1. Problem introduction
   - Components are [too long](https://github.com/msd-code-academy/06-cinema-portal-redux/blob/master/src/containers/App.js)
   - We need pass props (data or event handlers) up and down
   - We don't have enough abstractions for app to grow

1. Time-travel debugging in Redux devtools
   - Clone https://github.com/zalmoxisus/redux-devtools-extension/tree/master/examples
   - Go to `examples/counter/`
   - Install [Redux devtools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
   - Open example and explore Redux devtools

1. Redux concepts
   - Introduction
   - [The Gist](http://redux.js.org/#the-gist)
   - [Three Principles](http://redux.js.org/docs/introduction/ThreePrinciples.html)
   - [Actions](http://redux.js.org/docs/basics/Actions.html)
   - [Reducers](http://redux.js.org/docs/basics/Reducers.html)
   - [Combining reducers](http://redux.js.org/docs/api/combineReducers.html)
   - [Store](http://redux.js.org/docs/basics/Store.html)
   - [Usage with React](http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
   - [Async actions](http://redux.js.org/docs/advanced/AsyncActions.html#actionsjs)

1. Working on Cinema Portal application

# More Resources

- [Redux introduction talk from Dan Abramov](https://www.youtube.com/watch?v=xsSnOQynTHs)
- [Redux documentation](http://redux.js.org/)
- [Getting Started with Redux on egghead.io](https://egghead.io/courses/getting-started-with-redux)
- [Redux architecture diagram](https://staltz.com/img/redux-unidir-ui-arch.jpg)
