import React from 'react'
import '../App.css'

function MetricsInfo( {data} ) {
    return (
    //    <div className='flex flex-col items-start justify-center h-full pl-4 pb-4 gap-4'>
    //         <p>Age: {data.age}</p>
    //         <p>Weight: {data.weight}</p>
    //         <p>Height: {data.height}</p>
    //         <p>Activity Level: {data.activityLevel}</p>
    //    </div>
        <div className='flex justify-between px-4'>
            <div className='flex flex-col items-start justify-center h-full pl-4 pb-4 gap-4'>
                <p>Age</p>
                <p>Weight</p>
                <p>Height</p>
                <p>Activity Level</p>
            </div>
            <div className='flex flex-col items-end justify-center h-full pr-4 pb-4 gap-4'>
                <p>{data.age}</p>
                <p>{data.weight}</p>
                <p>{data.height}</p>
                <p>{data.activityLevel}</p>
            </div>
        </div>
    )
}

export default MetricsInfo