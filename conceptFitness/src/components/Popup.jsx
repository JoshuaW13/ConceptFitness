import React from 'react';
import '../App.css';

function Popup({ onClick, Content, contentProps, isCentered }) {
  return (
    <div
      className={`absolute ${
        isCentered
          ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          : "top-0 right-0"
      } bg-white shadow-lg rounded p-2 z-10 flex flex-col text-sm`}
    >
      <div className="flex-grow mb-4">
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
