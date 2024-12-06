import React from 'react'
import '../App.css'
import { useCalendarContext } from '../contexts/CalendarContext';
import { useGoalContext } from '../contexts/GoalsContext.jsx';
import { useNotifContext } from "../contexts/NotifContext.jsx";

function CalenderPopupMini({progAssignClick, selectedDate, programName, goalAssignClick}) {
  const { removeProgramFromDay, dayPrograms } = useCalendarContext()
  const { removeGoal, assignedGoals } = useGoalContext()
  const { showNotif } = useNotifContext();

  const removeProgram = () => {
    const daySchedule = dayPrograms.find((d) => d.date == selectedDate)
    if(daySchedule == undefined){
      showNotif("No Program Scheduled")
    }
    else {
      removeProgramFromDay(selectedDate)
      showNotif("Program Deleted")
    }
  }

  const removeGoals = () => {
    const dayGoal = assignedGoals.find((g) => g.date == selectedDate)
    if(dayGoal == undefined){
      showNotif("No Goal Scheduled")
    }
    else {
      removeGoal(dayGoal)
      showNotif("Goal Deleted")
    }
  }

  return (
    <div className="flex flex-col text-black">
      { programName != "" ? (
        <button onClick={progAssignClick}>Add Program</button>
        ) :
        (<button onClick={removeProgram}>Delete Program</button>)
      }
      <button onClick={goalAssignClick}>Add Goal</button>
      <button onClick={removeGoals}>Remove Goal</button>
    </div>
  )
}

export default CalenderPopupMini


