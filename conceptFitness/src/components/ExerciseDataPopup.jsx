import React from 'react'
import '../App.css'


function ExerciseDataPopup() {
  return (
    <div className="flex flex-col"
    onClick={(event) => {
      event.stopPropagation();  // Prevent the event from bubbling up to the parent
    }} 
    >
          <button>Favorite</button>
          <button>Add to...</button>
    </div>
  )
}

export default ExerciseDataPopup


