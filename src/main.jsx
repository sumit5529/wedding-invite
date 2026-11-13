import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getLinkMakerRedirect } from './guest'

// /invite -> /?make=<key>  (the link-maker page)
const redirectTo = getLinkMakerRedirect()
if (redirectTo) {
  window.location.replace(redirectTo)
} else {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
