import React, { Suspense, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import Loader from './components/Loader.jsx';
import ThemeProvider from './components/context/ThemeProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Suspense fallback={<Loader />}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </Suspense>
  
  </React.StrictMode>,
)
