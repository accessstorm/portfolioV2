import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Projects from './components/Projects.jsx'
import ContactPage from './components/ContactPage.jsx'
import BlenderShowcase from './components/BlenderShowcase.jsx'
import './styles/App.css'
import './styles/components.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blender-showcase" element={<BlenderShowcase />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
