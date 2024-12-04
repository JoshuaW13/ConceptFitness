import React, { useState, useEffect, useMemo } from 'react';
import '../App.css';
import PauseIcon from"@mui/icons-material/Pause"
import PlayIcon from "@mui/icons-material/PlayArrow"

function Timer() {
    const [timer, setTimer] = useState(0); // Timer state to track elapsed time
    const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track if timer is running

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      };

      useEffect(() => {
        let interval;
        if (isTimerRunning) {
          interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
          }, 1000); // Increment timer by 1 second
        } else {
          clearInterval(interval); // Clear interval when timer is stopped
        }
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, [isTimerRunning]);
  return (
    <div className="flex gap-2 w-full px-8 py-4">
        <button
            className="time-button bg-gray-300 p-1 text-sm h-full flex items-center justify-center"
            onClick={() => setIsTimerRunning(!isTimerRunning)} // Start or pause the timer
        >
            {isTimerRunning ? <PauseIcon /> : <PlayIcon />}
        </button>
        <div 
            className="flex justify-center items-center session-time-button bg-gray-300 p-1 text-sm rounded-lg h-full"
        >
            {formatTime(timer)}
        </div>
    </div>


  );
}

export default Timer;
