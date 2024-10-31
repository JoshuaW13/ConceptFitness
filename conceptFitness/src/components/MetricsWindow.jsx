import React from 'react'
import '../App.css'

function MetricsWindow() {
    return (
        <div className="w-[90%] h-[45%] bg-gray-50 rounded-lg shadow-lg flex items-center justify-center flex-col border-gray border-2 text-black">
            <div className='flex flex-row items-center m-4'>
                <p className='mr-2'>Age</p>
                <input type="text" className="bg-white border border-black rounded px-2 py-1"></input>
            </div>
            <div className='flex flex-row items-center m-2'>
                <p className='mr-2'>Weight</p>
                <input type="text" className="bg-white border border-black rounded px-2 py-1"></input>
            </div>
            <div className='flex flex-row items-center m-2'>
                <p className='mr-2'>Height</p>
                <input type="text" className="bg-white border border-black rounded px-2 py-1"></input>
            </div>
            <div className='flex flex-row items-center m-2'>
                <p className='mr-2'>Activity Level</p>
                <input type="text" className="bg-white border border-black rounded px-2 py-1"></input>
            </div>
        </div>
    )
}

export default MetricsWindow