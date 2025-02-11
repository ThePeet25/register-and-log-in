import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

const App = () => {
  return (
    <div className="bg-neutral-800">
      <Navbar />
      <Home />
      <Register />
      <Login />
    </div>
  )
}

export default App