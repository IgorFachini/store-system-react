import { Routes, Route } from 'react-router-dom'
import React from 'react'

import './App.css'

import { Home } from 'pages/Home'
import { MainLayout } from 'layouts/MainLayout'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
