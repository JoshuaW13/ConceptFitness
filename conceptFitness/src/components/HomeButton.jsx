import React from 'react'
import '../App.css'
import viteLogo from '/vite.svg'

function HomeButton() {

  return (
    <button className="text-black text-lg font-bold w-1/4 bg-gray-300 h-10 flex items-center justify-center hover:bg-gray-200">
        <img src={viteLogo} alt="" className="h-full w-auto" />
    </button>
  )
}

export default HomeButton
