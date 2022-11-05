import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Movies from './pages/Movies/Movies'
import Series from './pages/Series'
import Home from './pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
