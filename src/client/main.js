import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homepageApp from './reducers'
import App from './components/App'

import css from './styles/app.css'

var initialPortfolio = [
    {
        id: 1,
        title: "CSTK (working version)",
        link: 'http://www.targetedkilling.org:3030',
        description: "This is the working version of the CSTK website, built with Angularjs, Express, and MongoDB",
        image: "http://matthewfricker.com/img/cstk.png",
        status: "Completed in 2015"
    },
    {
        id: 2,
        title: "CSTK",
        link: 'http://www.targetedkilling.org:3030',
        description: "This is the current production version of CSTK buil in Q1 2015, it uses Angular, Express, and MySQLB",
        image: "http://matthewfricker.com/img/cstk.png",
        status: "In Active Development"
    },
]

let store = createStore(homepageApp, {portfolio: initialPortfolio});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)