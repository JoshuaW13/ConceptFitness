import React from 'react';
import '../App.css'

function ConfirmationPopup({message, onConfirm}) {

  return (
    <div className="flex flex-col">
        <p>{message}</p>
          <button onClick={(e)=>{e.stopPropagation();onConfirm();}} className="bg-gray-300 text-black pl-2 pr-2">Yes</button>
    </div>
  )
}

export default ConfirmationPopup