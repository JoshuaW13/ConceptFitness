import React from 'react'
import { useState } from 'react'
import '../App.css'

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
        sessionStorage.setItem('metricsData', JSON.stringify(formData))
    } 


    return (
        <div className='flex flex-col gap-4'>            
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Age</p>
                    <input
                        type="text"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded px-2 py-1"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Weight (kg)</p>
                    <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded px-2 py-1"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Height (cm)</p>
                    <input
                        type="text"
                        name='height'
                        value={formData.height}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded px-2 py-1"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Activity Level</p>
                <select
                    name="activityLevel"
                    value={formData.activityLevel}
                    onChange={handleChange}
                    className="w-[50%] bg-white border border-black rounded px-2 py-1 text-sm"
                >
                    <option value="" disabled>Select</option>
                    <option value="Sedentary">Sedentary</option>
                    <option value="Lightly Active">Lightly Active</option>
                    <option value="Active">Active</option>
                    <option value="Very Active">Very Active</option>
                </select>
            </div>

            <div className='flex justify-center'>
                <button onClick={handleSave} className='w-[20%] bg-green-300 p-1 m-2'>
                    Save
                </button>
            </div>

        </div>
    )
}

export default MetricsInputs