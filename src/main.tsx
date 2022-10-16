import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastProvider } from './context/toast'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
)
