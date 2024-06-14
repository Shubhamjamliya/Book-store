import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import { useState } from 'react'
import { CartProvider } from './contects/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <Navbar />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <MyFooter />
      </CartProvider>
    </>
  )
}

export default App
