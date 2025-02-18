import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Bootstrap/index.css'
import './Bootstrap/text.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
