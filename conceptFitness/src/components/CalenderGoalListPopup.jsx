import React from 'react'
import '../App.css'
import ProgramHeader from '../components/ProgramHeader'
import GoalInfoHeader from '../components/GoalInfoHeader'
import { useGoalContext } from '../contexts/GoalsContext'

function CalenderGoalListPopup({onClick, selectedDate}) {
  const { assignedGoals } = useGoalContext()

  return (
    <div className="flex flex-col h-full w-full items-center align-middle" onClick={(e) => e.stopPropagation()}>
      <div className="h-full w-[85%] flex flex-col gap-2 p-2 rounded-lg overflow-y-auto m-2 scrollbar-hidden">
        {assignedGoals.filter((g) => g.date == selectedDate).map((goal) => {
          return (
            <ProgramHeader
              key={goal.id}
              InitialComponent={GoalInfoHeader}
              InitialProps={{
                goalId: goal.id,
                goalType: goal.goalType,
                goalExercise: goal.exercise,
                goalValue: goal.value,
                goalDate: goal.date,
                closePopupClick: onClick,
              }}
            />
          );
        })}
      </div>
    </div>
  )
}

export default CalenderGoalListPopup


