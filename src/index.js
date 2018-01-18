
import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import './index.css'

const target = document.querySelector('#root')


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
		<App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
