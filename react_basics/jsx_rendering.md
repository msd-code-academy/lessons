# React.js basics - JSX & how to render component

## JSX

- syntactic sugar, transpiled to javascript calls:

```javascript
<button className="btn">Submit<button>
```

... is equivalent to:

```javascript
React.createElement("button", {className: "btn"}, "Submit");
```

... which also means you can work with that in your code just like with regular values:

```javascript
let message = null;

if (showRandomMessage) {
  message = <span>Random message</span>;  
}

return (
  <div>
    <h3>Header</h3>
    {message}
  </div>
);
```

... other features:

- automatically escapes values (XSS prevention):
    ```javascript
    const dangerString = "<div><h2>Heh</h2><script>alert("Heh")</script></div>";
    return <div>{dangerString}</div>
    ```
- classnames - use `className` instead of `class`:
    ```javascript
    <img className="picture" />
    ```
- all tags needs to be closed! 
   
## Components
   
- You can render any component just like HTML tag:
   
    ```javascript
    import SomeComponent from "./SomeComponent";
    
    class App extends Component {
      render () {
        return (
          <div>
            <h1>Page header</h1>
            <SomeComponent />
          </div>
        );
      }
    }
    ```   

... please note that capital letter in component name is important convention!

## Component props

- Components can accept values of any type as properties:
    ```javascript
    render () {
      const name = "Joe";
  
      return (
        <div>
          <SayHello name={name} />
        </div>
      ); 
    }
    ```
    
    then in SayHello component:
    
    ```javascript
    class SayHello extends Component {
  
      render () {
        return (
          <div>
            <h2>Hello world!</h2>
            <p>Hello {this.props.name}, nice to meet you!</p>
          </div>
        );
      }
    }
    ```
    
    **IMPORTANT RULE**: always tread props as read-only values:
    
    ```javascript
      this.props.name = "Jane"; // never ever!
      
      this.props.people.push(person); // also mutation!
    ```
    
    ... unless you want to introduce bugs into your codebase...


## Component state

- any change that can happen over time inside the React.js component is represented by `state`:

    ```
    class App extends React.Component {
      constructor (props) {
        super(props);
                
        this.onClick = this.onClick.bind(this);
                
        this.state = {count: 0}; // initial state
      }
            
      onClick () {
        this.setState(function (state) { // set new state
          return {count: state.count + 1} 
        });
      }
            
      render () {
        return (
          <div>
            <button onClick={this.onClick}>Click me</button>
            <div>Count: {this.state.count}</div>
            </div>
        );
      }
    }
    ```
    
See working example on [Codepen](http://codepen.io/jaroslav-kubicek/pen/RpoXJV?editors=0010)
  
  - create initial state in constructor: `this.state = {count: 0};`
  - set new state by calling `this.setState({count: newCount})` (or by passing "update" function as in the example)
  - state object is merged:
  ```javascript
  /* 
  current state:
  {
    value: "John",
    count: 0
  }
  */
  
  this.setState({count: "Jane"});
  
  /*
  next state:
  {
    value: "Jane",
    count: 0
  }
  */
  ```
  
## Stateless component function  

- If the component doesn't need state and it's simple enough, 
it can be declared alternatively as a function, taking `props` as first argument:
    
    ```
    const SimplySayHello = (props) => 
      <h2>Hello {props.name}, nice to meet you!</h2>
    ```    

See working example on [Codepen](http://codepen.io/jaroslav-kubicek/pen/qrRWbR?editors=0010)

## Lists of components

- when rendering list of components, you need to provide key for each item:

```
const people = [
 {id: 1, name: "John"},
 {id: 2, name: "Jane"}
];

people.map(person => <PersonItem key={person.id} person={person} />);
```

*Are you asking why?*

- React.js use it for faster & more effective DOM updates
- when the key is changed, new instance of component is created

Further reading in [DOCs](https://facebook.github.io/react/docs/lists-and-keys.html)

## Resources

- [React.js - introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
- [React.js - rendering elements](https://facebook.github.io/react/docs/rendering-elements.html)
