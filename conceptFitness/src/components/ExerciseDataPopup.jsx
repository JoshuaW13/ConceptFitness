import React from 'react'
import '../App.css'
import { useProgramContext } from "../contexts/ProgramsContext";


function ExerciseDataPopup({currentExerciseId}) {
  const {programs, addProgram} = useProgramContext();
  return (
    <div className="flex flex-col gap-1 overflow-auto" onClick={(e) => e.stopPropagation()}>
      <h2 className='font-semibold'>Add to program:</h2>
      {programs.map((program, index)=>(
          !program.exercises.find((exercise) => exercise == currentExerciseId)&&
          <button key={index}className="bg-gray-300 text-black pl-2 pr-2"
          onClick={(e)=>{
            e.stopPropagation();
            let programToAdd = program;
            programToAdd.exercises.push(currentExerciseId);
            addProgram(programToAdd);
          }}
          >
            {program.name}
          </button>
      ))}
    </div>
  )
}

export default ExerciseDataPopup


