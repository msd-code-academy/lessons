# Intro to JavaScript world

Please ask questions if some topic is not clear and/or if I speak to slow or quiet.
Purpose of this introduction is to give you vocabulary to ask better questions,  

## Brief history & language development

- developed in 10 days at Netscape by Brendan Eich
- inspired by *Java* syntax, *Scheme* functional programming and *Self* object oriented programming with prototypical inheritance
- standardized by ECMA => a.k.a. "ECMAScript"
    - ES3, ES5 Strict, ES6 == ES2015, ES6+
    - status of new proposals on GitHub, stage-0 to state-4 [github.com/tc39/proposals](https://github.com/tc39/proposals)
    - babel [compiler](http://babeljs.io/) vs [polyfills](https://babeljs.io/docs/usage/polyfill/)
- Node.js - JavaScript interpreter for server, V8 engine from Chromium enhanced by file system & network utilities
- npm - package manager for maintaining dependencies & stuff...

## JavaScript (JS) basics

### Statements and Expressions

- a statement will DO something - `if`, `for`, `var`, `function`, `{}` (block), ...
- an expression will be evaluated to a value (i.e. an object) - `1 + 1`, `function`, ...
- expressions consist of:
  - operators: `=` (assignment), `+` (arithmetic vs string), `.` (property accessor), `()` (function invocation), `.. ? .. : ..` (ternary), `!` (logical), `|` (bitwise - slow)
  - objects: `1`, `'abc'`, `[]`, `{}`
  - and identifiers that *refer* to an object: `var a`, `function a(){}`, `a.b` ...

### Types

JS is dynamically typed language - it DOES have types, you just don't define types explicitly:

```
var something = 123;
```

JS is also loosely (weakly) typed language - which means it can perform type coercion implicitly:

```js
var actualNumber = Math.sqrt(2);
var looksLikeNumber = "123";
console.log(actualNumber * looksLikeNumber); // Outputs 173.9482681718907

var doesntlookLikeNumber = "abc123";
var result = doesntlookLikeNumber * 2;
console.log(result); // Outputs NaN (Not a number)
console.log(typeof result); // Outputs "number"

console.log('$' + 1 + 1);
```

- see [Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) on MDN
- `null`, `undefined`, undeclared
- typeof, Array.isArray
- TypeError, `var a = {}; a.b.c` in Firefox vs Chrome/Node
- TypeScript, Flow, PropTypes, ...

### Lets try to explain this quiz question #1 from registration form - what the output will be?

```js
const obj = {
  name: 'John',
  getName () {
    return this.name;
  }
};

const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`);

//A: "John John"
//B: "null John"
//C: "John undefined" - is correct answer
//D: It will throw an error
//E: Have no idea
```


### Truthy/Falsy

```js
if (!someVariable) {
  // if someVariable is "", 0, NaN, null, undefined or false
  console.log("someVariable is falsy");
}
```
- [equality table](https://dorey.github.io/JavaScript-Equality-Table/)
- `==` vs `===`
- `x && guard`, `x || default`, `!!x`

### Scopes

![Function scope](/assets/img/function_scope.png)

- each function defines new scope - lexical / static scope
- closure - code in child scope can access variables defined in parent scope (even after the outer function already returned)
- shadowing - variables defined in current scope take precedence over variables in parent scope
- hoisting - moves `var` and `function` statements to be declared top of parent function
- passed by reference
- IIFE - immediately-invoked function expression
- don't create functions inside a loop

#### let & const

Normally, You already know, `var` defines variables in the scope of whole function.
This doesn't apply to let & const, which are defined for blocks:

```js
var getName = function (isSystem) {
  const name = "Neo";
  var agent = null;

  if (isSystem) {
    const name = "Anderson"; // here you just defined new variable available only in `if`
    var agent = "Smith"; // but there you just redefined the already existing variable
  }

  // variable name refers to "Neo" again
  // variable agent is redefined to "Smith" if isSystem is truthy
  ...
};
```

### Lets try to explain this quiz question #2 from registration form
How would you change the second line in the following example so that it prints numbers 0, 1, 2, 3 in this order?

```js
for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

//A: By changing line 2) ... (function(number) { setTimeout(() => console.log(number), 0)})(i) is correct answer
//B: By changing line 1) ... for (let i = 0; i < 4; i++) {   is correct answer
//C: By changing line 2) ... var temp = i; setTimeout(() => console.log(temp), 0)
//D: By changing line 2) ... setTimeout((i) => console.log(i), 0)
//E: Have no idea
```

#### *this* identifier

- refers to a “context” object in which the function was called
- dynamically scoped

```js
const hasClass = function (className) {
  return this.classList.contains(className);
};
const e = document.querySelector('#element');

hasClass('.btn'); // Cannot read property 'contains' of undefined
hasClass.call(e, '.btn'); // true/false depending on element
hasClass.call({}, '.btn'); // Cannot read property 'contains' of undefined

const imprisoned = hasClass.bind(e); // returns new function with "fixed" context
imprisoned('.btn'); // true/false depending on element
```

- `new` keyword, constructor functions, `Object.creat`e, object literals `{}`
- `bind` method
- `var that = this`
- `class ... extends ...` is syntax sugar for prototypical inheritance

### Lets try to explain this quiz question #3 from registration form

Finish line `var sayHello = ` so the whole code example prints "Hello John" to the console

```js
var hello = {
  name: 'John',
  sayHello: function() {
    return 'Hello ' + this.name
  }
}

var sayHello = ...

console.log(sayHello())

//A: var sayHello = hello.sayHello
//B: var sayHello = hello.sayHello()
//C: var sayHello = hello.sayHello.call(hello)
//D: var sayHello = hello.sayHello.bind(hello) is correct answer
//E: Have no idea
```

### Q&A

* Check also [JavaScript Homework](js_homework.md)

## More resources

- [MDN](https://developer.mozilla.org/cs/docs/Web/JS/) - Unofficial JS wiki
- [MDN - A re-introduction to JS](https://developer.mozilla.org/en-US/docs/Web/JS/A_re-introduction_to_JS) - MDN page dedicated specially to JS basics
- [You don't know JS](https://github.com/getify/You-Dont-Know-JS) - Superb well of all JS concepts & traps, both for novices & professionals
 - [You Don't Know JS: Up & Going - Chapter 2: Into JS](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md)
- [Essential JS links](https://github.com/ericelliott/essential-JS-links) - Exhaustive list of learning resources
- [React awesome](https://github.com/enaqx/awesome-react) - A collection of various things regarding just React ecosystem.
- [Superheroes.js](http://superherojs.com/) - Yet another comprehensive list of resources.
- [Crockford on JavaScript](https://www.youtube.com/watch?v=RO1Wnu-xKoY) - youtube video
