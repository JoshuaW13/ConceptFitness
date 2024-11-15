import React from 'react'
import { useState } from 'react'
import '../App.css'

function GoalsInputs( {onSave, initialData} ) {

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
        localStorage.setItem('goalsData', JSON.stringify(formData))
    }

    return (
        <div className='flex flex-col gap-4'>            
            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Goal</p>
                    <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded px-2 py-1 text-sm"
                    >
                        <option value="Select Goal">Select</option>
                        <option value="Lose Weight">Lose Weight</option>
                        <option value="Gain Weight">Gain Weight</option>
                        <option value="Maintain Weight">Maintain Weight</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Current Weight</p>
                    <input
                        type="text"
                        name="currentWeight"
                        value={formData.currentWeight}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded px-2 py-1"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <div className='flex flex-row items-center w-full max-w-md gap-4'>
                    <p className="w-[25%] text-right">Target Weight</p>
                    <input
                        type="text"
                        name='targetWeight'
                        value={formData.targetWeight}
                        onChange={handleChange}
                        className="w-[50%] bg-white border border-black rounded px-2 py-1"
                    />
                </div>
            </div>

            <div className="flex flex-row items-center w-full max-w-md gap-4">
                <p className="w-[25%] text-right">Target Date</p>
                <input
                    type="date"
                    name="targetDate"
                    value={formData.targetDate}
                    onChange={handleChange}
                    className="w-[50%] bg-white border border-black rounded px-2 py-1 text-sm"
                />
            </div>

            <div className='flex justify-center'>
                <button onClick={handleSave} className='w-[20%] bg-green-300 p-1 m-2'>
                    Save
                </button>
            </div>

        </div>
    )

}

export default GoalsInputs