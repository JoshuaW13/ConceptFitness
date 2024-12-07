import React from 'react'
import '../App.css'

function GoalsInfo( {data, unitSystem} ) {

    const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs'

    return (
        <div className='flex justify-between px-4 mb-4'>
            <div className='flex flex-col items-start justify-center h-full gap-4'>
                <p>Goal</p>
                <p>Target Weight ({weightUnit}) </p>
                <p>Target Date</p>
            </div>
            <div className='flex flex-col items-end justify-center h-full pr-4 gap-4'>
                <p>{data.goal || 'N/A'}</p>
                <p>{data.targetWeight || 'N/A'}</p>
                <p>{data.targetDate || 'N/A'}</p>
            </div>
        </div>
    )
}

export default GoalsInfo