import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'

function App() {

  return (
      <div className="w-[25vw] h-[90vh] bg-gray-500 rounded-lg shadow-lg flex items-center justify-center">
        <Home></Home>
      </div>
  )
}

export default App
