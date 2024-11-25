import React from 'react';
import '../App.css';

function SessionLog({ onClick }) {
  return (
    <div
      className="w-full rounded-t-lg font-semibold"
      onClick={onClick}
    >
      <p className="text-sm text-gray-800 p-3 rounded-t-lg">
        Program Name: Insert Name Here
      </p>
      <p className="text-xs text-gray-600 px-3 py-2">Date: Random Date</p>
      <p className="text-xs text-gray-600 px-3 py-2">Duration: 0 seconds</p>
    </div>
  );
}

export default SessionLog;
