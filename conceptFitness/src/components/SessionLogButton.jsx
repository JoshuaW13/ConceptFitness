import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function SessionLogPage({ typeSelected }) {
  const navigate = useNavigate();
  console.log("type selected is "+typeSelected)

  const handleClick = () => {
    navigate("/sessionLogs");
  };

  // Conditional background color based on `typeSelected`

  return (
    <button
      className={`text-black text-sm font-bold w-1/4 h-10 flex items-center justify-center hover:bg-gray-200 focus:outline-none`}
      onClick={handleClick}
      style={typeSelected === "session" ? { backgroundColor: "#E85A4F" } : {backgroundColor: "#E98074"}}
    >
      <p>Sessions</p>
    </button>
  );
}

export default SessionLogPage;
