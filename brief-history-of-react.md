# A Brief History of React

Why did Facebook create React? What problems does it solve? What was there before? Let's see a little bit of history.

## First browser war (1995 - 2008)

First, Brendan Eich created JavaScript. It was included in Netscape in 1995 and Internet Explorer in 1996.
There was no npm, few libraries and resources, slow engines.
You would use JavaScript as simple tool for validating forms.

jQuery was a huge change at that time because it brought consistent API across all browsers and abstracted away lots of bugs.
However, many apps were a bunch of spaghetti scripts; nobody cared much because reloading the page happened often and fixed all problems.

Some tools of this era:
- [Prototype](http://prototypejs.org/) (2005)
- [YUI](https://yuilibrary.com/) (2006)
- [ExtJS](https://www.sencha.com/products/extjs/) (2007)

## Second browser war (2008 - 2012)

With the release of V8 the world figured out that JavaScript can be fast too.
A new fancy buzzword was invented - Single Page Application - and people started writing applications, not pages. That means user spends much more time in a single context, and state management and application architecture becomes much more important.

The most favourite paradigm of this age was [Two way binding](https://docs.angularjs.org/guide/databinding):
View event triggers Model update, and Model event triggers View update.
While that sounds good in theory and works well in examples, it may cause issues.
Performance can suffer in some circumstances, debugging is pure pain and tracking which event caused which update is difficult.

In this era, lots of new tools popped up:
- [V8](https://developers.google.com/v8/) (2008)
- [Node.js](https://nodejs.org/) (2009)
- [npm](https://www.npmjs.com/) (2010)
- [AngularJS](https://angularjs.org/) (2010)
- [Knockout](http://knockoutjs.com/) (2010)
- [Backbone.js](http://backbonejs.org/) (2010)
- [Ember.js](http://emberjs.com/) (2011)

## React era (2013+)

In 2013, Facebook released React. Its main advantage is simple API. You only need one method:

```javascript
react.render(<App />, props)
```

and that's it! No need to care about binding, be it one way or two way.
This is the killer feature. There are others too:

- Declarative interface
- Just JavaScript, no custom DSL ([\*](https://facebook.github.io/react/docs/jsx-in-depth.html))
- Components are idempotent functions
- Support for client, server, string, and native rendering

Other frameworks and tools appeared that play very well with React:

- [Immutable](https://facebook.github.io/immutable-js/) (2014)
- [Flux](https://facebook.github.io/flux/) (2014)
- [Redux](http://redux.js.org/) (2015)

## Why bother?

Why bother? Why does it need to be so complicated? Just render everything, like server sent pages do, and we are fine.

Well, rendering [takes a lot of time](https://developers.google.com/web/fundamentals/performance/rendering/). There are [several steps](https://developers.google.com/web/fundamentals/performance/rendering/) that happen when [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) changes:

1. Parsing and executing JavaScript
2. CSS calculation
3. Layout
4. Painting
5. Layers composition

There is actually a lot of work to be done and rendering a webpage takes between 200 milliseconds to 1 second on a fast computer. That is acceptable on first page load, but definitely too much for user actions.

It helps if the app touches _less elements_: some steps can be skipped, some are faster, and rendering is faster.

Other frameworks mentioned here required the developer to solve this; React comes with Virtual DOM.

## Virtual DOM and tree diffing

React comes with a [tree diff algorithm](https://calendar.perfplanet.com/2013/diff/) that does the heavy lifting. Instead of touching browser DOM, it remembers a copy in memory: virtual DOM. Virtual DOM is just a bunch of JavaScript objects and requires less CPU and less time than browser DOM. It then figures out what needs to be changed and only touches that particular Element.

From developer point of view, this is a win: it looks like we render everything every time, so the app looks simple. And React takes care of only changing what must be changed, so performance does not suffer.

## More reading

- https://en.wikipedia.org/wiki/Browser_wars
- https://developers.google.com/web/fundamentals/performance/rendering/
- https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6
- https://facebook.github.io/react/blog/2013/06/05/why-react.html
- http://stackoverflow.com/a/23995928/738944
