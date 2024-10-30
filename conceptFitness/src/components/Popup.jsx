import React from 'react';
import '../App.css';

function Popup({ onClick, Content }) {
  return (
    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 z-10 flex flex-col text-sm">
      <div className="flex-grow mb-4"> {/* Flex-grow allows the content area to expand */}
        <Content />
      </div>
      <button 
        className="px-4 py-2 bg-red-500 text-white rounded" 
        onClick={onClick}
      >
        Close
      </button>
    </div>
  );
}

export default Popup;
