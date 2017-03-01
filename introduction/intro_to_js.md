# Intro to JavaScript world

## Brief history & language development

- Language itself developed in 10 days at Netscape by Brendan Eich
- Working draft originally called Mocha, then renamed to LiveScript in beta, then released as JavaScript
- It's said that name "JavaScript" was selected mainly because of marketing purpose (because Java was cool back then)
- Standardisation done by "EcmaScript" standards
    - early versions: 1, 2, 3
    - version no. 4 abandoned
    - version no. 5 and 5.1 from 2009-2011
    - version no. 6, later renamed to 2015
    - from now on, one version release per year - 2016, 2017, ... 
    - see the proposals and their statuses on Github: [github.com/tc39/proposals](https://github.com/tc39/proposals) 
- Node.js - JavaScript interpreter for server, basically V8 engine from Chromium enhanced by filesystem & network utilities
- Npm - package manager for maintaining dependencies & stuff...

## JavaScript basics

### Types

Javascript is dynamically typed language:

```
var something = 123;
```

You just don't define types for the variables.

JavaScript is also weakly typed language:

```
var realNumber = Math.sqrt(2);
var looksLikeNumber = "123";
console.log(realNumber * looksLikeNumber); // Outputs "173.9482681718907"
```

Which means it can perform type coercion implicitly. Without prior asking or failing, as opposed to C#:

```
double a = 7.3;
string x = "hi";
a = a - x; // Fails at compile time with "Operator '-' cannot be applied to operands of type 'double' and 'string'"
```

Let's look on slightly different example:
 
```
var doesntlookLikeNumber = "abc123";
var result = doesntlookLikeNumber * 2;
console.log(result); // Outputs "NaN" (Not a number)
console.log(typeof result); // Outputs "number"
```

Isn't it fun?

### Truthy/Falsy
 
```
if (!someVariable) { // outputs "Yes" if someVariable is "", 0, NaN, null, undefined or false 
    console.log("Yes");
}
``` 

### Scopes

![Function scope](/assets/img/function_scope.png)

- each function defines new scope 
- code in inner (child) scope can access variables defined in outer (parent) scope
- variables defined in current scope take precedence over variables in parent scope

#### Variables defined with let & const

Normally, You already know, `var` defines variables in the scope of whole function.
This doesn't apply to let & const, which are defined for blocks:

```
var getName = function (isSystem) {
  const name = "Neo";
  var agent = null;
  
  if (isSystem) {
    const name = "Anderson"; // here you just defined new variable available only in `if` 
    var agent = "Smith"; // but there you just redefined the already existing variable
  }
  
  // variable name always refers to "Neo" again
  // variable agent is redefined to "Smith" if isSystem is truthy
  ...
};
```

### *this* identifier

- Refers to the “context” in which the function is called
- It’s not the reference to scope

```
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

**More on JavaScript basics:**
[You Don't Know JS: Up & Going - Chapter 2: Into JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md)

## Javascript crash course

Let's practice a little bit a knowledge from this section, fork the repository:
[github.com/msd-code-academy/intro-javascript-crash-course](https://github.com/msd-code-academy/intro-javascript-crash-course)
clone it, go the the project folder and run commands:

```bash
npm install # installs all the required dependencies (see package.json)
npm test # run tests
```

As you can see, tests failed. Can you fix the code so they pass?

## Useful resources

- [MDN](https://developer.mozilla.org/cs/docs/Web/JavaScript/) - Unofficial JavaScript wiki 
- [You don't know JS](https://github.com/getify/You-Dont-Know-JS) - Superb well of all JavaScript concepts & traps, both for novices & professionals
- [JS comparison table](https://dorey.github.io/JavaScript-Equality-Table/) - Explanatory table why you simply don't want to use `==`
- [Essential JavaScript links](https://github.com/ericelliott/essential-javascript-links) - Exhaustive list of learning resources
- [React awesome](https://github.com/enaqx/awesome-react) - A collection of various things regarding just React ecosystem.
- [Superheroes.js](http://superherojs.com/) - Yet another comprehensive list of resources.

