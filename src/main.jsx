// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Sermons from './pages/Sermons.jsx'
import Videos from './pages/Videos.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/sermons', element: <Sermons /> },
  { path: '/videos', element: <Videos /> },
  { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
