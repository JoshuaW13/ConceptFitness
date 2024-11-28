import React from 'react';
import '../App.css';

function Popup({ onClick, Content, contentProps }) {
  return (
    <div className="absolute top-0 right-0 bg-white shadow-lg rounded p-2 z-10 flex flex-col text-sm">
      <div className="flex-grow mb-4"> {/* Flex-grow allows the content area to expand */}
        {React.createElement(Content, contentProps)}
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

export default Popup;
