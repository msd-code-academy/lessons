# React.js basics - JSX & how to render component

## JSX

- syntactic sugar, transpiled to javascript calls:

```javascript
<button className="btn">Submit<button>
```

... is equivalent to:

```javascript
React.createElement('button', {className: 'btn'}, 'Submit');
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

- automatically escape values (XSS prevention):
    ```javascript
    const dangerString = '<div><h2>Heh</h2><script>alert("Heh")</script></div>';
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
    import SomeComponent from './SomeComponent';
    
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

... please note that **capital letter in component name is important convention!**

## Component props

- Components can accept values of any type as properties:
    ```javascript
    render () {
      const name = 'Joe';
  
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
      this.props.name = 'Jane'; // never ever!
    ```
    
    ... unless you want to introduce bugs into your codebase...


## Component state

## Lists of components

## Resources

- [React.js - introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
- [React.js - rendering elements](https://facebook.github.io/react/docs/rendering-elements.html)
