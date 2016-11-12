import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import routes from './routes'

const router = <Router history={browserHistory} routes={routes} />;

ReactDOM.render(router, document.querySelector('#root'));
