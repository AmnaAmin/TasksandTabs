import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import Thunk from 'redux-thunk';

import App from './App';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(Thunk))}>
    <App />
  </Provider>
, document.getElementById('root')
);
