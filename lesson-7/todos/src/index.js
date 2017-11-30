import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import logger from 'redux-logger'

import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import Reducer from './Reducer';

import thunk from 'redux-thunk';

let store = createStore(Reducer, 
    applyMiddleware(logger),
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
