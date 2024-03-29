import '../assets/stylesheets/index.css'
import React from 'react'
import BrowserHistory from 'react-router/lib/BrowserHistory'
// import HashHistory from 'react-router/lib/HashHistory'
import Root from './Root'

// Use hash location for Github Pages
// but switch to HTML5 history locally.

// OLD
// const history = process.env.NODE_ENV === 'production' ?
//   new HashHistory() :
//   new BrowserHistory()

// NEW
const history = new BrowserHistory()

React.render(<Root history={history} />, document.getElementById('app'))
