import React from 'react'
import '../App.css'


function ExerciseDataPopup() {
  return (
    <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
          <button className="bg-gray-300 text-black pl-2 pr-2">Favorite</button>
          <button className="bg-gray-300 text-black pl-2 pr-2">Add to...</button>
    </div>
  )
}

export default ExerciseDataPopup


