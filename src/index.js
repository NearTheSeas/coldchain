import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './Redux'
import route from './Router'
import registerServiceWorker from './registerServiceWorker'

import 'normalize.css'
import './style/common.scss'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    {route}
  </Provider>, document.getElementById('root'))
registerServiceWorker()
