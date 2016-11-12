import React from 'react'
import ReactDOM from 'react-dom'
import {Router, hashHistory} from 'react-router'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import routes from './routes'

ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.querySelector('#root')
);
