import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

try {
  const stored = localStorage.getItem('portfolio-theme')
  document.documentElement.setAttribute(
    'data-theme',
    stored === 'light' ? 'light' : 'dark',
  )
} catch {
  document.documentElement.setAttribute('data-theme', 'dark')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
