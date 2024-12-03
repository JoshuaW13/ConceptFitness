import React from 'react';
import '../App.css'

function ConfirmationPopup({message, onConfirm}) {

  return (
    <div className="flex flex-col">
        <p>{message}</p>
          <button onClick={onConfirm} className="px-1 py-1 bg-gray-300 text-black rounded mt-4">Delete</button>
    </div>
  )
}

export default ConfirmationPopup