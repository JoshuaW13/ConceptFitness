import React from 'react'
import '../App.css'

function MetricsInfo( {data, unitSystem} ) {

    const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs'
    const heightUnit = unitSystem === 'metric' ? 'cm' : 'ft/in'

    return (
        <div className='flex justify-between px-4'>
            <div className='flex flex-col items-start justify-center h-full pb-4 gap-4'>
                <p>Age</p>
                <p>Weight ({weightUnit})</p>
                <p>Height ({heightUnit})</p>
                <p>Activity Level</p>
            </div>
            <div className='flex flex-col items-end justify-center h-full pr-4 pb-4 gap-4'>
                <p>{data.age || 'N/A'}</p>
                <p>{data.weight || 'N/A'}</p>
                {unitSystem === 'metric' ? (
                    <p>{data.height || 'N/A'}</p>
                ):(
                    data.heightFt || data.heightIn ? (
                        <p>
                            {data.heightFt || '0'}ft {data.heightIn || '0'}in
                        </p>
                    ) : (
                    <p>N/A</p>
                    )
                )}
                <p>{data.activityLevel || 'N/A'}</p>
            </div>
        </div>
    )
}

export default MetricsInfo