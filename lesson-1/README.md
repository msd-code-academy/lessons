# jQuery vs React

Comparison of 2 approaches to web-app development (over-simplified):
* "traditional" web app development using selectors, imperative style, plain-text ES5
* "modern" declarative approach, separation of concerns using MV* (Model-View-Controller/Presenter/...) abstraction,
  compiled ES6+

## jQuery, other Ajax libraries and modern Web API
* [Ajax frameworks](https://en.wikipedia.org/wiki/List_of_Ajax_frameworks#JavaScript) 
* compare to native Web API: http://youmightnotneedjquery.com/
* http://caniuse.com/ provides a way to check feature support as well as a list of "modern" browsers

_Exercise #1:_
* download and open [jquery/v1.html](jquery/v1.html)
* edit to remove jQuery dependency, targeting IE11+ (assuming last 2 and "extended support" versions of other browsers)


## MV* frameworks

Comparison of simple-but-practical implemantation of the same TODO app in various MV* frameworks, libraries
and vanilla JS: http://todomvc.com/

### React

* official docs: https://reactjs.org/
* Create React App: https://github.com/facebookincubator/create-react-app#quick-overview

_Exercise #2:_
* `git clone https://github.com/msd-code-academy/lessons.git`
* `cd lessons/lesson-1/react/v1`
* `npm i`
* `npm start`
* update the component to render static content similar to original jquery app
    * html title, main header, static button, static text
* use life-cycle methods to add dynamic features 


## Homework

* http://todomvc.com/ - review a few examples, e.g. for React
