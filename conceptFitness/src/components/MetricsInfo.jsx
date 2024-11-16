import React from 'react'
import '../App.css'

function MetricsInfo( {data} ) {
    return (
        <div className='flex justify-between px-4'>
            <div className='flex flex-col items-start justify-center h-full pl-2 pb-4 gap-4'>
                <p>Age</p>
                <p>Weight (lbs)</p>
                <p>Height (cm)</p>
                <p>Activity Level</p>
            </div>
            <div className='flex flex-col items-end justify-center h-full pr-4 pb-4 gap-4'>
                <p>{data.age || 'N/A'}</p>
                <p>{data.weight || 'N/A'}</p>
                <p>{data.height || 'N/A'}</p>
                <p>{data.activityLevel || 'N/A'}</p>
            </div>
        </div>
    )
}

export default MetricsInfo