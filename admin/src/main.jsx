import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Authapi from '../Context/Authapi.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authapi>
    <App />
    </Authapi>
    </BrowserRouter>,
)
