import React from 'react'
import '../App.css'
import { useState } from 'react'

function MetricsInputs( {onSave, initialData} ) {

    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSave = () => {
        onSave(formData)
    } 


    return (
        <div className='flex flex-col gap-4'>
            {['age', 'weight', 'height', 'activityLevel'].map((field) => (
                <div key={field} className="flex flex-row items-center w-full max-w-md gap-4">
                    <p className="w-[25%] text-right capitalize">{field}</p>
                    <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded py-1 ml-5"
                    />
                </div>
        ))}
            {/* <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Age</p>
                <input type="text" className="w-[50%] bg-white border border-black rounded px-2 py-1" />
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Weight</p>
                <input type="text" className="w-[50%] bg-white border border-black rounded px-2 py-1" />
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Height</p>
                <input type="text" className="w-[50%] bg-white border border-black rounded px-2 py-1" />
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Activity Level</p>
                <input type="text" className="w-[50%] bg-white border border-black rounded px-2 py-1" />
            </div>
            <div className='flex justify-center'>
                <button className='w-[20%] bg-green-300 p-1 m-2'>
                    Save
                </button>
            </div> */}
            <div className='flex justify-center'>
                <button onClick={handleSave} className='w-[20%] bg-green-300 p-1 m-2'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default MetricsInputs