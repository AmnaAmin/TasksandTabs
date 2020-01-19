import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import App from './App';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
, document.getElementById('root')
);
