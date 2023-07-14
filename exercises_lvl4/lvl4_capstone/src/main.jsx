import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AxiosContextProvider } from './context/AxiosContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AxiosContextProvider>
    <App />
  </AxiosContextProvider>,
)
