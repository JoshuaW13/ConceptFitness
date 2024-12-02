import React, { useState } from 'react';
import '../App.css';

function SessionSetLog({exerciseRecords}) {

  return (
    <div className="flex flex-col space-y-2">
        {exerciseRecords.map((set, index)=>(
        <p key={index}className="text-gray-700 text-sm">Set {index+1} Weight:{set.weight} Reps:{set.reps}</p>
        ))}
    </div>
  );
}

export default SessionSetLog;