import React, { useState } from 'react';
import '../App.css';
import EditIcon from "@mui/icons-material/Edit"

function SessionSetLog({exerciseRecords, onEdit}) {

  return (
    <div className="flex flex-col space-y-2">
        {exerciseRecords.map((set, index)=>(
            <div key={index} className='flex gap-1'>
            <p className="text-gray-700 text-sm">Set {index+1} Weight:{set.weight} Reps:{set.reps}</p>
            <button className='flex w-6 h-6 bg-gray-300' 
                onClick={(e)=>{
                    onEdit(e,{number:index+1,weight:set.weight,reps:set.reps})
                }
            }>
              <EditIcon/>
            </button>
            </div>
        ))}
    </div>
  );
}

export default SessionSetLog;