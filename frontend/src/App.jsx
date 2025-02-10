import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
const App = () => {
  return (
    <div className='bg-neutral-800 min-h-screen'>
      <Navbar />
      <Login />
    </div>
  )
}

export default App