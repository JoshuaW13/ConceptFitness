import React from 'react'
import '../App.css'
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext';

function ExerciseDataPopup(contentProps) {
  const { exercises } = useExerciseCatalogueContext();

  const searchExercise = () => {
    contentProps.setSearchText(() => {
      for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i];
        if (exercise.id == contentProps.exerciseId) {
            return exercise.name;
        }
    }
    })
    contentProps.setSearchState(false)
  }

  return (
    <div className="flex flex-col gap-1" onClick={(e) => e.stopPropagation()}>
          <button className="bg-gray-300 text-black pl-2 pr-2" onClick={searchExercise}>Search</button>
          <button className="bg-gray-300 text-black pl-2 pr-2">Favorite</button>
          <button className="bg-gray-300 text-black pl-2 pr-2">Add to...</button>
    </div>
  )
}

export default ExerciseDataPopup