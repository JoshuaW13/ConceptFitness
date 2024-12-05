import React from 'react'
import '../App.css'
import { useCalendarContext } from '../contexts/CalendarContext';
import { useNotifContext } from "../contexts/NotifContext.jsx";

function CalenderPopupMini({progAssignClick, selectedDate}) {
  const { removeProgramFromDay, dayPrograms } = useCalendarContext()
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

  return (
    <div className="flex flex-col text-black">
          <button onClick={progAssignClick}>Add Program</button>
          <button onClick={removeProgram}>Delete Program</button>
    </div>
  )
  
}

export default CalenderPopupMini


