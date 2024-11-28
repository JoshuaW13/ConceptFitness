import React from 'react'
import '../App.css'

function Tag({ text, removable, onRemove }) {
  return (
    <span className="flex items-center justify-center gap-2 px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-700 border border-gray-300 shadow-sm hover:shadow-md transition-shadow">
      #{text}
      
      {removable && (
        <button
          className=" flex justify-center items-center bg-red-500 text-white text-xs w-5 h-5 rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
          onClick={onRemove}
        >
          X
        </button>
      )}
    </span>
  );
}

export default Tag;
