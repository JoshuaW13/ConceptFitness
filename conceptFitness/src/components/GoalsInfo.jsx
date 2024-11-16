import React from 'react'
import '../App.css'

function GoalsInfo( {data} ) {
    return (
        <div className='flex justify-between px-4'>
            <div className='flex flex-col items-start justify-center h-full pl-4 pb-4 gap-4'>
                <p>Goal</p>
                <p>Current Weight</p>
                <p>Target Weight</p>
                <p>Target Date</p>
            </div>
            <div className='flex flex-col items-end justify-center h-full pr-4 pb-4 gap-4'>
                <p>{data.goal}</p>
                <p>{data.currentWeight}</p>
                <p>{data.targetWeight}</p>
                <p>{data.targetDate}</p>
            </div>
        </div>
    )
}

export default GoalsInfo