import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import theme from './style/theme'
import GlobalStyle from './style/global'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
)
