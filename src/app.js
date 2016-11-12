import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import promiseMiddleware from 'redux-promise'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import routes from './routes'
import reducers from 'reducers/index'

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

export const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const router = <Router history={browserHistory} routes={routes} />;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.querySelector('#root')
);
