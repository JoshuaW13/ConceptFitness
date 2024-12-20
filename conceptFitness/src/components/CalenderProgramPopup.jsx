import React from 'react'
import '../App.css'
import { useProgramContext } from "../contexts/ProgramsContext";
import ProgramHeader from './ProgramHeader';
import ProgramHeaderContent from './ProgramHeaderContent';

function CalenderProgramPopup({onClick, selectedDate}) {
  const { programs } = useProgramContext()

  return (
    <div className="flex flex-col h-full w-full items-center align-middle" onClick={(e) => e.stopPropagation()}>
      <div className="h-full w-[85%] flex flex-col gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden">
        {programs.map((program) => {
          return (
            <ProgramHeader
              key={program.id}
              InitialComponent={ProgramHeaderContent}
              InitialProps={{
                id: program.id,
                name: program.name,
                tags: program.tags,
                numExercises: program.exercises.length,
                onClick: onClick,
                selectedDate: selectedDate
              }}
            />
          );
        })}
      </div>
    </div>
  )
}

export default CalenderProgramPopup


