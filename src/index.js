import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { SET_EMOJIS } from './constants'

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

fetch('http://localhost:5000/emojis')
  .then(res => res.json())
  .then(emojis => {
    store.dispatch({ type: SET_EMOJIS, payload: emojis })
  })
