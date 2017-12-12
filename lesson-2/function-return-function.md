# Function return function

I got an interesting question recently: _"wtf is the double arrow?"_ (It was not phrased exactly like this tho.) Here it is in action in file [App.js](./idea-journal/solution/src/components/App.js):

```javascript
removeNoteFromList = (noteId) => () => { // wtf
  // more work here
}
```

So:

## What is the double fat arrow?

That is a great question. Well, let's find out. We know that `=>` is an ES6 trickery, so if you do not remember the syntax we can try to transpile it to something more familiar. https://babeljs.io/repl/ is a nice tool! Paste our code to the left box and observe the right one.

The output is:
```javascript
var removeNoteFromList = function removeNoteFromList(noteId) {
  return function () {
    // more work here
  };
};
```

Aha! A function that returns a function. Now naturally the next question becomes _"but why?"_ which is an excellent question because all of this is kind of difficult to get used to unless you did some Haskell in the past.

The difference is when you use the function. Let's compare it to a simple arrow function in this example:

```javascript
class Example extends React.Component {
  // defining ...
  removeSingle = noteId => {
    // work
  }

  // defining ...
  removeDouble = noteId => () => {
    // work
  }

  // let's try to use them functions!
  someOtherFunction = () => {
    // nice and easy
    removeSingle(1)

    // omg so many braces
    const remover = removeDouble(1)
    remover()

    // or without the intermediate variable - which one you prefer?
    removeDouble(1)()
  }
}
```

What happened here? Having the nested function actually made things worse! But wait, there is more. If we wish to pass the function as an event handler, things turn the other way around:

```javascript
render() {
  const remover = this.removeSingle.bind(this, noteId)
  return (
    <div>
      {/* bound function */}
      <button onClick={remover}>

      {/* ... or anonymous function; fat arrow binds `this` */}
      <button onClick={(e) => { this.removeSingle(noteId) }}>

      {/* but! */}
      <button onClick={this.removeDouble(noteId)}>
    </div>
  )
}
```

See? Function that returns function made it easier to use in event handlers. Which happens a lot in frontend code; you only want to hook event handlers (some call them event listeners) and wait for user action.

Some more reading:

- [Eloquent JavaScript: Higher-Order Functions](https://eloquentjavascript.net/05_higher_order.html)
- [Davis Walsh: JavaScript Functions that Return Functions](https://davidwalsh.name/javascript-functions)

This concept is somehow but not exactly related to currying (homework: _why?_). Now that you understand the concept of functions returning functions you may check it out too:

- [M. David Green: Currying in Functional JavaScript](https://www.sitepoint.com/currying-in-functional-javascript/)
- [Alex Rauschmayer (2ality): Currying versus partial application](http://2ality.com/2011/09/currying-vs-part-eval.html)

## React, classes and misbehaving `this`

This is not directly related to the original question but I want to include it here because is important to understand the most common problem with classes in JS: `this`.

When using classes you need to be careful what exactly is `this` in your code. It may or may not be what you expect. See this code:

```javascript
class ThisIsHorrible {

  // defined as a oldschool "method"
  brokenFn() { 
    console.log(this, this.javascript)
    // Throws a TypeError: this.setState is not a function because `this` is not what you expect.
    // (actually a global object: Window)
    this.setState({ output: this.javascript })
  }

  // defined with equals = and fat arrow =>
  workingFn = () => {
    console.log(this, this.javascript)
    // Works as expected because `this` is an instance of `ThisIsHorrible` Component
    // In other words: `this` is bound
    this.setState({ output: this.javascript })
  }

}
```

(I have omitted some code for clarity. See the full running [example on codepen.io](https://codepen.io/corkscreewe/pen/vpBwaM?editors=0010) if you're interested.)

For complete mastery and understanding of various rules for `this` I recommend the excellent book [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/README.md).

>Side-Side note: Why did I put "method" in quotes? Because these are not methods. They may look like one but are functions. `{ foo() {} }` [is a shorthand](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions) for `{ foo: function foo() {} }`.

## ES6 and stages and transpiling

This is even less related but I also want to include it here because you may wonder why none of these examples actually work when you copy and paste then in your browser console or run it without transpiling first.

This is because the _"equals"_ definition is not standard and `workingFn = ` throws a SyntaxError. It is actually a [Candidate (Stage 3) proposal](https://github.com/tc39/proposal-class-fields) which means it may or may not become part of the language. You will need babel to transpile it. 

If you wish to learn more about the ES Stages see the [official document](https://github.com/tc39/proposal-class-fields) and [explanation by Alex Rauschmayer](http://2ality.com/2015/11/tc39-process.html).

Did I say that JavaScript is simple? I most certainly did not.
