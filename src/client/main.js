import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import homepageApp from './reducers'
import App from './components/App'

let store = createStore(homepageApp, {portfolio: {initial: 'shades'}});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)