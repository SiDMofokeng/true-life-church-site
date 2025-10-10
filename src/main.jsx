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

import SermonDetail from './pages/SermonDetail.jsx'

import Give from './pages/Give.jsx'

import Contact from './pages/Contact.jsx'
import ContactSent from './pages/ContactSent.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/sermons', element: <Sermons /> },
  { path: '/sermons/:eid', element: <SermonDetail /> },
  { path: '/videos', element: <Videos /> },
  { path: '/give', element: <Give /> },
  { path: '/contact', element: <Contact /> },
  { path: '/contact/sent', element: <ContactSent /> },
  { path: '*', element: <NotFound /> },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
