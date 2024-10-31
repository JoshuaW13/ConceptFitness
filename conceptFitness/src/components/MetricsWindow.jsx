import React from 'react'
import '../App.css'

function MetricsWindow() {
    return (
        <div className="w-full h-[70%] bg-gray-50 rounded-lg shadow-lg flex flex-col items-center justify-center border border-gray-300 text-black p-6 gap-4">

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Age</p>
                <input type="text" className="w-[75%] bg-white border border-black rounded px-2 py-1" />
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Weight</p>
                <input type="text" className="w-[75%] bg-white border border-black rounded px-2 py-1" />
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Height</p>
                <input type="text" className="w-[75%] bg-white border border-black rounded px-2 py-1" />
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Activity Level</p>
                <input type="text" className="w-[75%] bg-white border border-black rounded px-2 py-1" />
            </div>

        </div>
    )
}

export default MetricsWindow