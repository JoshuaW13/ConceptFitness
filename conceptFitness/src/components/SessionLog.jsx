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
      <p className="text-xl text-black p-3 rounded-t-lg">
        {programs.find((p) => p.id == sessionLog.programId).name}
      </p>
      <p className="text-lg text-black px-3 py-2">Date: {sessionLog.date}</p>
      <p className="text-lg text-black px-3 py-2">Duration: {sessionLog.durationMinutes} mins</p>
    </div>
  );
}

export default SessionLog;
