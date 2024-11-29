import React from 'react';
import '../App.css';
import { useProgramContext } from "../contexts/ProgramsContext";

function SessionLog({ onClick, sessionLog }) {

  const {programs}=useProgramContext();

  return (
    <div
      className="w-full rounded-t-lg font-semibold"
      onClick={onClick}
    >
      <p className="text-sm text-gray-800 p-3 rounded-t-lg">
        {programs.find((p) => p.id == sessionLog.programId).name}
      </p>
      <p className="text-xs text-gray-600 px-3 py-2">Date: {sessionLog.date}</p>
      <p className="text-xs text-gray-600 px-3 py-2">Duration: {sessionLog.durationMinutes} minutes</p>
    </div>
  );
}

export default SessionLog;
