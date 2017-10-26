# React Testing

## The Goal

Learn about different types of automated tests and how to apply them in React environment.

## Automated tests

![Test pyramid by Martin Fowler](https://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)

[The test pyramid](https://martinfowler.com/bliki/TestPyramid.html)

- **End To End tests**: Slow, complicated, brittle, complete
- **Unit tests**: Fast, simple, reliable, isolated

## How to write a good test

1. Write a failing test
2. Observe that it actually fails!
3. Make sure that it fails with red
4. Fix code so that the test passes
5. GOTO 1

## How to write a code that is easy to test

**Pure functions** for the win:
- Given an input, always produces the same output
- No side effects (including changing its arguments)

React Components are usually pure functions. Not a coincidence!

## Tools that we will use

- [Jest - Delightful JavaScript Testing](https://facebook.github.io/jest/) framework and toolset for testing
- [Enzyme](https://github.com/airbnb/enzyme) library for testing React components

## Tools that we will not use

**E2E testing**: Selenium, Webdrivers, Headless browsers, Robot Framework (because they take too much time to set up and learn)

**Unit testing**: Mocha, Chai, Expect, Istanbul, Sinon (because these are alternatives to Jest)

**Server/API testing**: Supertest (because we focus on frontend only, for now)

## Hands on!

_Excercise 1: Checkout lesson-3 folder and run the app! `npm install`, `npm start`_

_Excercise 2: Find your favourite bug_

_Excercise 3: Write a unit test and `npm test`_

https://facebook.github.io/jest/docs/en/expect.html

Hint:
```javascript
import { removeFromArray } from "./functions"

// test suite: organize your tests!
describe("functions.test.js: removeFromArray", () => {

    // single test
    it("should remove item from array", () => {
        const input = ... // prepare data
        const actual = ... // call the function here
        const expected = ... // what you want to see?
        expect(actual).toEqual(expected) // test!
    })
})
```

_Excercise 4: Write a Component test using enzyme_

http://airbnb.io/enzyme/docs/api/shallow.html

https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components

```javascript
import React from "react" // because we will use JSX
import Party from "./Party"
import { shallow } from "enzyme" // there are multiple kinds of rendering

describe("Party.js", () => {

    it("should display party name", () => {
        const party = { name: "MyParty", members: 100 } // some data that we pass to props
        const wrapper = shallow(<Party party={party} />)
        const text = wrapper.text()
        expect(text).toMatch("MyParty")
    })

})
```

_Excercise 5: Write propTypes_

Technically, this is not a test. But it will help you!

https://reactjs.org/docs/typechecking-with-proptypes.html



## Reading and more links

(You may think I am biased towards Eric Elliot - perhaps. But he does write well!)

- [5 Questions Every Unit Test Must Answer](https://medium.com/javascript-scene/what-every-unit-test-needs-f6cd34d9836d)
- [5 Common Misconceptions About TDD & Unit Tests](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9)
- [TDD the RITE Way](https://medium.com/javascript-scene/tdd-the-rite-way-53c9b46f45e3)
- [Learn Test Driven Development (TDD)](https://github.com/dwyl/learn-tdd)
- https://github.com/msd-code-academy/03-testing-react-app
- [What is a Pure Function?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
- [Pure Happiness with Pure Functions](https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch3.html)
