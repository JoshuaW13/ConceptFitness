import React from 'react';
import '../App.css';

function Popup_Bot({ onClick, progAssignClick, Content, selectedDate, goalAssignClick}) {
  return (
    <div className="absolute bottom-0.5 right-0.5 bg-white shadow-lg rounded p-2 z-10 flex flex-col text-sm">
      <div className="flex-grow mb-4"> {/* Flex-grow allows the content area to expand */}
        <Content 
          progAssignClick={progAssignClick}
          selectedDate={selectedDate}
          goalAssignClick={goalAssignClick}
        />
      </div>
      <button 
        className="px-1 py-1 bg-red-500 text-white rounded" 
        onClick={onClick}
      >
        Close
      </button>
    </div>
  );
}

export default Popup_Bot;
