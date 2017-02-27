# Environment setup

The goal of this guide is to setup whole development environment,
so you can run your first hello world application.

## node.js

Although you might decide to never touch backend, you still need 
[node.js](https://nodejs.org/en/) to it's job - compile your source codes into single file, 
automatically reload your app when something has changed, run tests and much more.

## Setup

Install node.js if you haven't done so:

**macOS:**

```bash
brew install node@6
```

**Windows**

Download & install from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Check the installation after in your console:
```bash
node -v
# should print your node.js version, e.g. "v6.10.0"
```

### More advanced setup

These steps are left to you as optional exercise.

Although the setup described previously is totally fine, 
it's usually much better to have a opportunity to switch 
between several versions of node.js on one machine: 
You may be assigned to older 
project that has to be run within certain version, yet it's nice to keep
a chance for trying new stuff just by switching to the newest one.

Please note that it's usually more safe to delete 
all your previous node.js installations, as you might risk running 
into conflicts with them.

***macOs***: [nvm](https://github.com/creationix/nvm)

***Windows***: [nvm-windows](https://github.com/coreybutler/nvm-windows)

### Run "Hello world" application

Run following commands in your console:

```bash
npm install -g create-react-app
create-react-app my-app
cd my-app/
npm start
```

By executing ```npm start``` at the end, browser should automatically open
with the page containing React.js logo. If not, then navigate to `http://localhost:3000`.

Note it might take some time before it downloads all dependencies.

Try to play with it as you wish!

*Optional exercises:*

- Look into source code and break something, see what happened?
- Create new file `src/HelloButton.js` with the following content 
and find out how to add this into page:
 
```jsx harmony
import React, {Component} from 'react';

class HelloButton extends Component {
  handleClick () {
    alert('Hello world!');
  }
  
  render () {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

export default HelloButton;
```
- button looks quite ugly heh? Let's improve that as well by some css...

*More info about `create-react-app`*: [github.com/facebookincubator/create-react-app](https://github.com/facebookincubator/create-react-app)

## Docker

TODO?