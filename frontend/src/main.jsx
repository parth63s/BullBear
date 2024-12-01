import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HomePage/>
  </StrictMode>,
)
