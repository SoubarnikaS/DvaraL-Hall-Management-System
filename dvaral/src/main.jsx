import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './assets/user-pages/AuthContext.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <React.StrictMode>

    <AuthProvider>
      <App />
    </AuthProvider>
 
  </React.StrictMode>,
  
  </BrowserRouter>
)