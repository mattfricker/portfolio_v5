import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homepageApp from './reducers'
import App from './components/App'

import initialPortfolio from '../data/portfolio.js'
import techStack from '../data/techStack.js'

import css from './styles/app.css'

let store = createStore(homepageApp, {portfolio: initialPortfolio, techStack: techStack});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)