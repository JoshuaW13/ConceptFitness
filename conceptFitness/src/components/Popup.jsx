import React from 'react'
import '../App.css'


function Popup({onClick}) {

  return (
    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 z-10">
          <p className="text-gray-700">Popup Content</p>
          <button 
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded" 
            onClick={onClick}
          >
            Close
          </button>
    </div>
  )
}

export default Popup


