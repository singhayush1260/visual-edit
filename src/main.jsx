import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import ErrorBoundary from './error-boundary/ErrorBoundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
