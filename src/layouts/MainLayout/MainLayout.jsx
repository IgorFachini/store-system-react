import React from 'react'
import { Outlet } from 'react-router-dom'

import './MainLayout.css'

const MainLayout = () => {
  return (
    <React.StrictMode>
      <main className='container'>
        <Outlet />
      </main>
    </React.StrictMode>
  )
}

export default MainLayout
