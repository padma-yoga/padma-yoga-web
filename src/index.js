import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from 'core/App'
import Provider from 'core/store'
import * as serviceWorker from 'core/serviceWorker'
import theme from './theme'
import './index.css'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

serviceWorker.register()
