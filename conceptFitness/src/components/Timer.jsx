import React, { useState, useEffect } from 'react';
import '../App.css';
import PauseIcon from "@mui/icons-material/Pause";
import PlayIcon from "@mui/icons-material/PlayArrow";

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
        <div className="flex items-center justify-center gap-4 w-full px-8 py-4">
            {/* Play/Pause Button */}
            <button
                className="flex items-center justify-center bg-gray-400 hover:bg-gray-500 text-white p-2 rounded-full shadow-md transition-all duration-200 ease-in-out w-12 h-12"
                onClick={() => setIsTimerRunning(!isTimerRunning)} // Start or pause the timer
            >
                {isTimerRunning ? <PauseIcon sx={{ fontSize: 24 }} /> : <PlayIcon sx={{ fontSize: 24 }} />}
            </button>

            {/* Smaller Timer Display */}
            <div
                className="flex justify-center items-center bg-gray-600 text-white p-2 rounded-lg shadow-md w-18 h-18 text-base font-mono"
                style={{ fontSize: '1rem' }}
            >
                {formatTime(timer)}
            </div>
        </div>
    );
}

export default Timer;
