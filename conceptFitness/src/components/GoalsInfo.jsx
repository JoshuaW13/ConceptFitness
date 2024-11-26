import React from 'react'
import '../App.css'

function GoalsInfo( {data} ) {
    return (
        <div className='flex justify-between px-4'>
            <div className='flex flex-col items-start justify-center h-full pl-2 pb-4 gap-4'>
                <p>Goal</p>
                <p>Current Weight (lbs)</p>
                <p>Target Weight (lbs) </p>
                <p>Target Date</p>
            </div>
            <div className='flex flex-col items-end justify-center h-full pr-4 pb-4 gap-4'>
                <p>{data.goal || 'N/A'}</p>
                <p>{data.currentWeight || 'N/A'}</p>
                <p>{data.targetWeight || 'N/A'}</p>
                <p>{data.targetDate || 'N/A'}</p>
            </div>
        </div>
    )
}

export default GoalsInfo