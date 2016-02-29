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
        image: "//c2.staticflickr.com/2/1585/25266435441_bb4e08525b_b.jpg",
        status: "Completed in 2015"
    },
    {
        id: 2,
        title: "CSTK",
        link: 'http://www.targetedkilling.org:3030',
        description: "This is the current production version of CSTK buil in Q1 2015, it uses Angular, Express, and MySQLB",
        image: "//c2.staticflickr.com/2/1479/25359493365_329e48fdb1_c.jpg",
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