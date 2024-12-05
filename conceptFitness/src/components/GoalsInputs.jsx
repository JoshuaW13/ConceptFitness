import React from 'react'
import { useState } from 'react'
import '../App.css'

function GoalsInputs( {onSave, onCancel, initialData, unitSystem} ) {

    const [formData, setFormData] = useState(initialData)

    const weightUnit = unitSystem === 'metric' ? 'kg' : 'lbs'

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSave = () => {
        onSave(formData)
        sessionStorage.setItem('goalsData', JSON.stringify(formData))
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
                        className="input-field w-[50%] text-sm"
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
                    <p className="w-[25%] text-right">Target Weight ({weightUnit})</p>
                    <input
                        type="text"
                        name='targetWeight'
                        value={formData.targetWeight}
                        onChange={handleChange}
                        className="input-field w-[50%]"
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
                    className="input-field w-[50%]"
                    style={{colorScheme: "light"}}
                />
            </div>

            <div className='flex justify-center'>
                <button onClick={onCancel} className='cancel-button'>
                    Cancel
                </button>
                <button onClick={handleSave} className='save-button'>
                    Save
                </button>
            </div>

        </div>
    )

}

export default GoalsInputs