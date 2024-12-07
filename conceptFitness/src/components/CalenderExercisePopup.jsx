import React from 'react'
import '../App.css'
import ProgramHeader from '../components/ProgramHeader'
import ExerciseGoalInfoHeader from '../components/ExerciseGoalInfoHeader'
import { useExerciseCatalogueContext } from '../contexts/ExerciseCatalogueContext'

function CalenderExercisePopup({onClick, selectedDate}) {
  const { exercises } = useExerciseCatalogueContext()

  return (
    <div className="flex flex-col h-full w-full items-center align-middle" onClick={(e) => e.stopPropagation()}>
      <div className="h-full w-[85%] flex flex-col gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden">
        {exercises.map((exercise) => {
          return (
            <ProgramHeader
              key={exercise.id}
              InitialComponent={ExerciseGoalInfoHeader}
              InitialProps={{
                exerciseId: exercise.id,
                exerciseName: exercise.name,
                exerciseEquipment: exercise.equipment,
                targetMuscle: exercise.targetMuscle,
                onClick: onClick,
              }}
            />
          );
        })}
      </div>
    </div>
  )
}

export default CalenderExercisePopup


