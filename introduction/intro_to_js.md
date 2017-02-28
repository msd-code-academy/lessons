# Intro to JavaScript world

## Brief history & language development

TODO

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

TODO?

### Variables defined with let & const

Normally, You already know, `var` defines variables in the scope of whole function.
This doesn't apply to let & const, which are defined for blocks:

```
var getName = (isSystem) {
  const name = "Neo";
  var agent = null;
  
  if (isSystem) {
    const name = "Anderson"; // here you just defined new variable available inly in `if` 
    var agent = "Smith"; // but there you just redefined the already existing variable
  }
  
  // variable name always refers to "Neo" again
  // variable agent is redefined to "Smith" if isSystem is truthy
  ...
};
```

### *this* identifier

TODO

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

[MDN](https://developer.mozilla.org/cs/docs/Web/JavaScript/) - Unofficial JavaScript wiki 
[You don't know JS](https://github.com/getify/You-Dont-Know-JS) - Superb well of all JavaScript concepts & traps, both for novices & professionals
[Essential JavaScript links](https://github.com/ericelliott/essential-javascript-links) - Exhaustive list of learning resources
[React awesome](https://github.com/enaqx/awesome-react) - A collection of various things regarding just React ecosystem.
[Superheroes.js](http://superherojs.com/) - Yet another comprehensive list of resources.

