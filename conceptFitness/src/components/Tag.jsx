import React from 'react'
import '../App.css'

function Tag({ text, removable, onRemove }) {
  return (
    <span className="cursor-default flex items-center justify-center gap-2 px-2 py-1 text-sm rounded-full bg-[#8E8D8A] text-white border border-gray-300 shadow-sm transition-shadow">
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
